const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '..', 'README.md');
if (!fs.existsSync(readmePath)) {
  console.error('README.md not found!');
  process.exit(1);
}

let markdown = fs.readFileSync(readmePath, 'utf8');

// Basic markdown-to-html helper
function parseMarkdownToHtml(md) {
  let html = md;

  // Header tags
  html = html.replace(/^####\s+(.*)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.*)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Code blocks
  html = html.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Replace markdown tables: | col1 | col2 |
  const lines = html.split('\n');
  let inTable = false;
  let tableHtml = '';
  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (line.includes('---')) {
        continue;
      }
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      if (!inTable) {
        inTable = true;
        tableHtml = '<table width="100%"><thead><tr>' + cells.map(c => `<th align="left">${c}</th>`).join('') + '</tr></thead><tbody>';
      } else {
        tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
      }
    } else {
      if (inTable) {
        tableHtml += '</tbody></table>';
        newLines.push(tableHtml);
        inTable = false;
        tableHtml = '';
      }
      newLines.push(lines[i]);
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table>';
    newLines.push(tableHtml);
  }

  return newLines.join('\n');
}

const parsedBody = parseMarkdownToHtml(markdown);

const fullHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README Preview - OpenMaps (Material 3 Expressive)</title>
  <style>
    :root {
      --bg: #0f1514;
      --text: #d8e5e1;
      --border: #21332f;
      --card-bg: #152220;
      --link: #70f7e5;
    }
    html[data-theme="light"] {
      --bg: #f5fbf8;
      --text: #14221f;
      --border: #cee1db;
      --card-bg: #e6f3ee;
      --link: #006a60;
    }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Google Sans", "Noto Sans", Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: background-color 0.2s, color 0.2s;
    }
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
      width: 100%;
      background: var(--card-bg);
      border-bottom: 1px solid var(--border);
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
    }
    .toolbar-title {
      font-weight: 700;
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .theme-btn {
      background: #006A60;
      color: white;
      border: none;
      padding: 8px 18px;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .theme-btn:hover {
      background: #00877a;
    }
    .readme-container {
      max-width: 980px;
      width: 100%;
      padding: 32px 24px;
      box-sizing: border-box;
      line-height: 1.6;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 16px 0;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 10px 14px;
    }
    th {
      background: var(--card-bg);
    }
    pre {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      overflow: auto;
    }
    code {
      font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
      font-size: 88%;
    }
    a {
      color: var(--link);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    picture img {
      max-width: 100%;
      height: auto;
    }
    hr {
      border: none;
      border-top: 1px solid var(--border);
      margin: 28px 0;
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <div class="toolbar-title">
      <span>🗺️ OpenMaps README.md Preview (Pixel / Material 3 Expressive)</span>
    </div>
    <div style="display: flex; gap: 12px; align-items: center;">
      <button class="theme-btn" onclick="toggleTheme()" id="themeBtn">🌓 Switch to Light Mode</button>
    </div>
  </div>

  <div class="readme-container">
    ${parsedBody}
  </div>

  <script>
    function toggleTheme() {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      document.getElementById('themeBtn').innerText = next === 'dark' ? '🌓 Switch to Light Mode' : '🌓 Switch to Dark Mode';
    }
  </script>
</body>
</html>`;

const pubDir = path.join(__dirname, '..', 'public');
fs.mkdirSync(pubDir, { recursive: true });
fs.writeFileSync(path.join(pubDir, 'readme-preview.html'), fullHtml);
console.log('Generated public/readme-preview.html successfully!');
