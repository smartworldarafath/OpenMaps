const fs = require('fs');
const path = require('path');

// Output directories
const darkDir = path.join(__dirname, '..', 'assets', 'readme', 'dark');
const lightDir = path.join(__dirname, '..', 'assets', 'readme', 'light');
const pubDarkDir = path.join(__dirname, '..', 'public', 'assets', 'readme', 'dark');
const pubLightDir = path.join(__dirname, '..', 'public', 'assets', 'readme', 'light');

for (const d of [darkDir, lightDir, pubDarkDir, pubLightDir]) {
  fs.mkdirSync(d, { recursive: true });
}

// 12-point scalloped Material 3 Expressive flower path (precisely centered at 0, 0)
const CENTERED_FLOWER_PATH = "M24.6,5.0C24.2,5.5 23.8,5.9 23.4,6.4C23.1,6.9 22.7,7.3 22.5,7.8C22.2,8.3 22.0,8.7 21.8,9.2C21.7,9.8 21.6,10.3 21.5,10.9C21.4,11.4 21.4,12.0 21.4,12.6C21.3,13.2 21.3,13.9 21.2,14.5C21.1,15.1 20.9,15.7 20.7,16.3C20.4,16.8 20.1,17.3 19.7,17.8C19.3,18.2 18.9,18.6 18.4,18.9C17.8,19.2 17.2,19.4 16.7,19.6C16.1,19.8 15.4,19.9 14.8,20.0C14.2,20.2 13.6,20.3 13.1,20.4C12.5,20.5 12.0,20.7 11.5,20.9C11.0,21.1 10.6,21.4 10.2,21.7C9.7,22.0 9.3,22.4 8.9,22.9C8.5,23.3 8.1,23.7 7.6,24.2C7.2,24.6 6.7,25.0 6.2,25.4C5.7,25.8 5.2,26.1 4.7,26.3C4.1,26.5 3.5,26.6 2.9,26.7C2.3,26.7 1.7,26.6 1.1,26.4C0.6,26.3 -0.0,26.0 -0.6,25.8C-1.3,25.5 -1.8,25.2 -2.3,24.9C-2.8,24.6 -3.3,24.3 -3.8,24.1C-4.3,23.9 -4.8,23.7 -5.3,23.6C-5.8,23.5 -6.4,23.5 -6.9,23.5C-7.5,23.5 -8.0,23.5 -8.6,23.6C-9.2,23.6 -9.9,23.7 -10.5,23.8C-11.1,23.8 -11.7,23.8 -12.3,23.7C-12.9,23.6 -13.5,23.5 -14.1,23.2C-14.6,23.0 -15.1,22.6 -15.5,22.2C-15.9,21.8 -16.3,21.3 -16.6,20.8C-17.0,20.2 -17.2,19.6 -17.4,19.1C-17.7,18.5 -17.9,17.9 -18.1,17.4C-18.3,16.8 -18.5,16.3 -18.8,15.9C-19.1,15.4 -19.4,15.0 -19.8,14.6C-20.1,14.2 -20.5,13.8 -21.0,13.5C-21.5,13.1 -22.0,12.8 -22.5,12.5C-23.0,12.1 -23.5,11.8 -24.0,11.4C-24.4,11.0 -24.9,10.5 -25.3,10.1C-25.6,9.6 -25.9,9.0 -26.1,8.5C-26.3,7.9 -26.4,7.3 -26.4,6.7C-26.4,6.1 -26.3,5.5 -26.1,4.9C-26.0,4.3 -25.8,3.7 -25.6,3.1C-25.4,2.5 -25.2,2.0 -25.1,1.4C-24.9,0.9 -24.8,0.3 -24.7,-0.2C-24.7,-0.7 -24.7,-1.2 -24.7,-1.8C-24.8,-2.3 -24.9,-2.9 -25.1,-3.4C-25.2,-4.0 -25.4,-4.6 -25.6,-5.2C-25.7,-5.8 -25.9,-6.4 -26.0,-7.0C-26.0,-7.6 -26.0,-8.3 -25.9,-8.8C-25.8,-9.4 -25.7,-10.0 -25.4,-10.5C-25.1,-11.0 -24.7,-11.5 -24.3,-11.9C-23.9,-12.4 -23.4,-12.8 -22.9,-13.1C-22.4,-13.5 -21.8,-13.8 -21.3,-14.1C-20.8,-14.4 -20.3,-14.7 -19.8,-15.0C-19.4,-15.4 -19.0,-15.7 -18.6,-16.1C-18.3,-16.5 -18.0,-17.0 -17.7,-17.4C-17.4,-17.9 -17.2,-18.5 -17.0,-19.0C-16.7,-19.5 -16.5,-20.1 -16.2,-20.7C-15.9,-21.2 -15.6,-21.8 -15.2,-22.3C-14.8,-22.7 -14.4,-23.2 -13.9,-23.5C-13.4,-23.8 -12.9,-24.1 -12.3,-24.3C-11.7,-24.4 -11.1,-24.5 -10.5,-24.5C-9.9,-24.5 -9.2,-24.4 -8.6,-24.4C-8.0,-24.3 -7.4,-24.2 -6.8,-24.1C-6.3,-24.0 -5.8,-23.9 -5.3,-23.9C-4.6,-23.9 -4.1,-24.0 -3.6,-24.1C-3.1,-24.2 -2.5,-24.4 -2.0,-24.7C-1.5,-24.9 -1.0,-25.2 -0.4,-25.4C0.1,-25.7 0.7,-26.0 1.3,-26.2C1.9,-26.4 2.5,-26.6 3.1,-26.6C3.7,-26.7 4.3,-26.7 4.9,-26.6C5.4,-26.4 6.0,-26.2 6.5,-25.9C7.0,-25.6 7.5,-25.2 8.0,-24.8C8.4,-24.4 8.9,-23.9 9.3,-23.5C9.7,-23.0 10.1,-22.5 10.5,-22.1C10.9,-21.7 11.2,-21.3 11.7,-21.0C12.1,-20.7 12.6,-20.5 13.1,-20.2C13.6,-20.0 14.1,-19.9 14.7,-19.7C15.2,-19.6 15.9,-19.5 16.4,-19.3C17.0,-19.1 17.7,-18.9 18.2,-18.7C18.8,-18.4 19.3,-18.1 19.8,-17.8C20.2,-17.4 20.6,-16.9 21.0,-16.4C21.3,-15.9 21.5,-15.4 21.7,-14.8C21.8,-14.2 21.9,-13.6 21.9,-13.0C22.0,-12.3 22.0,-11.7 22.0,-11.1C22.0,-10.5 22.0,-9.9 22.1,-9.4C22.2,-8.8 22.3,-8.3 22.4,-7.8C22.6,-7.3 22.8,-6.8 23.1,-6.3C23.4,-5.9 23.7,-5.4 24.1,-4.9C24.4,-4.4 24.8,-3.9 25.2,-3.4C25.5,-2.9 25.8,-2.3 26.0,-1.7C26.3,-1.2 26.4,-0.6 26.5,0.0C26.5,0.6 26.5,1.2 26.3,1.8C26.2,2.3 25.9,2.9 25.5,3.4C25.3,4.0 24.9,4.5 24.6,5.0Z";

// Helper to write file to both assets/readme and public/assets/readme
function saveSvg(subPath, content) {
  fs.writeFileSync(path.join(__dirname, '..', 'assets', 'readme', subPath), content);
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'assets', 'readme', subPath), content);
}

// Common SVG Icons (Clean 24x24 paths, no fill="currentColor" inside raw path)
const ICONS = {
  download: `<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>`,
  github: `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>`,
  docs: `<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>`,
  launch: `<path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-10 4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v4H4V9h4V7H4z"/>`,
  bug: `<path d="M19 8h-1.81a5.985 5.985 0 0 0-1.82-1.96l1.24-1.24a.996.996 0 1 0-1.41-1.41L13.43 5.16C12.96 5.06 12.49 5 12 5s-.96.06-1.43.16L8.8 3.39a.996.996 0 1 0-1.41 1.41l1.24 1.24A5.985 5.985 0 0 0 6.81 8H5a1 1 0 1 0 0 2h1.17c-.11.64-.17 1.31-.17 2v1H5a1 1 0 1 0 0 2h1v1c0 .69.06 1.36.17 2H5a1 1 0 1 0 0 2h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19a1 1 0 1 0 0-2h-1.17c.11-.64.17-1.31.17-2v-1h1a1 1 0 1 0 0-2h-1v-1c0-.69-.06-1.36-.17-2H19a1 1 0 1 0 0-2h-1v-1c0-.69-.06-1.36-.17-2H19a1 1 0 1 0 0-2zM12 19c-2.76 0-5-2.24-5-5v-3c0-2.76 2.24-5 5-5s5 2.24 5 5v3c0 2.76-2.24 5-5 5z"/>`,
  contribute: `<path d="M18 16c-.79 0-1.5.31-2.03.81L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.51 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.51-.31 2.04-.81l7.05 4.12c-.05.22-.09.45-.09.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>`,
  scale: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v1.5h-2v-1.5c-2.2-.4-3.5-1.8-3.5-3.5h2c0 1.1.9 2 2.5 2s2.5-.9 2.5-2c0-1.3-1-1.7-2.7-2.1-2.3-.5-4.3-1.2-4.3-3.4 0-1.7 1.3-3.1 3.5-3.5V6h2v1.5c1.8.4 3 1.6 3.2 3.1h-2c-.2-.9-.8-1.6-2.2-1.6-1.3 0-2.2.7-2.2 1.6 0 1.1.8 1.5 2.6 1.9 2.5.6 4.4 1.3 4.4 3.6 0 1.9-1.4 3.4-3.8 3.9z"/>`,
  license: `<path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5l5 4.5H7l5-4.5zM12 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>`,
  map: `<path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>`,
  navigation: `<path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>`,
  traffic: `<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>`,
  offline: `<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>`,
  place: `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>`,
  transit: `<path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm0 2c3.71 0 5.13.46 5.67 1H6.33c.54-.54 1.96-1 5.67-1zm6 11.5c0 .83-.67 1.5-1.5 1.5h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5zm0-5.5H6V7h12v3zM8.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>`,
  voice: `<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>`,
  camera: `<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>`,
  shield: `<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/>`,
  lock: `<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>`,
  android: `<path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 2.23 12.95 2 12 2c-.96 0-1.86.23-2.66.63L7.85 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 4.26 6 5.92 6 7.8H18c0-1.87-.97-3.53-2.47-4.64zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>`,
  palette: `<path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.23 19.59 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-5 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>`,
  globe: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`,
  sparkles: `<path d="M9 3L7.5 7.5 3 9l4.5 1.5L9 15l1.5-4.5L15 9l-4.5-1.5z M19 11l-1 3-3 1 3 1 1 3 1-3 3-1-3-1z M17 3l-.6 1.8L14.6 5.4l1.8.6.6 1.8.6-1.8 1.8-.6-1.8-.6z"/>`,
  check: `<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>`,
  sync: `<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>`,
  code: `<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>`,
  terminal: `<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-12-3l3.5-3.5L8 8l1.4-1.4 4.9 4.9-4.9 4.9L8 15zm7 0h4v2h-4v-2z"/>`,
  help: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.65z"/>`,
  gallery: `<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>`
};

// Strict explicit color rendering helper (NO fill="currentColor")
function renderIcon(name, size, color) {
  let iconSvg = ICONS[name] || ICONS.map;
  // Replace or inject explicit fill
  if (iconSvg.includes('fill="currentColor"')) {
    iconSvg = iconSvg.replace(/fill="currentColor"/g, `fill="${color}"`);
  } else if (!iconSvg.includes('fill=')) {
    iconSvg = iconSvg.replace(/<path /g, `<path fill="${color}" `);
  }
  const scale = size / 24;
  const offset = -size / 2;
  return `<g transform="translate(${offset}, ${offset}) scale(${scale})">${iconSvg}</g>`;
}

// -------------------------------------------------------------
// 1. ROTATING PIXEL BADGE (Height: 28, Flower Center: 14, 14)
// -------------------------------------------------------------
function generateBadge({ name, label, icon, flowerDark, flowerLight, iconDark, iconLight, width }) {
  // DARK with active 8s rotation
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28" viewBox="0 0 ${width} 28">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M14,0H${width - 14}A14,14 0 0 1 ${width},14V14A14,14 0 0 1 ${width - 14},28H14A14,14 0 0 1 0,14V14A14,14 0 0 1 14,0Z" fill="#182321" stroke="#253531" stroke-width="1"/>
    <g transform="translate(14, 14)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(0.44)"/>
      </g>
      ${renderIcon(icon, 11, iconDark)}
    </g>
    <text x="27" y="18" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#d9ebe7">${label}</text>
  </svg>`;
  saveSvg(path.join('dark', `badge-${name}.svg`), darkSvg);

  // LIGHT with active 8s rotation
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28" viewBox="0 0 ${width} 28">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M14,0H${width - 14}A14,14 0 0 1 ${width},14V14A14,14 0 0 1 ${width - 14},28H14A14,14 0 0 1 0,14V14A14,14 0 0 1 14,0Z" fill="#e8f4f0" stroke="#cfdfdb" stroke-width="1"/>
    <g transform="translate(14, 14)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(0.44)"/>
      </g>
      ${renderIcon(icon, 11, iconLight)}
    </g>
    <text x="27" y="18" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="11.5" font-weight="600" fill="#132320">${label}</text>
  </svg>`;
  saveSvg(path.join('light', `badge-${name}.svg`), lightSvg);
}

// -------------------------------------------------------------
// 2. ROTATING ACTION BUTTON (Height: 68, Flower Center: 38, 34)
// -------------------------------------------------------------
function generateButton({ name, sublabel, label, icon, flowerDark, flowerLight, iconDark, iconLight, bgDark, bgLight, textDark, textLight, width = 216 }) {
  // DARK with active 10s rotation
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="68" viewBox="0 0 ${width} 68">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 10s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M34,1H${width - 34}A33,33 0 0 1 ${width - 1},34V34A33,33 0 0 1 ${width - 34},67H34A33,33 0 0 1 1,34V34A33,33 0 0 1 34,1Z" fill="${bgDark || '#172220'}" stroke="#283935" stroke-width="1"/>
    <g transform="translate(38, 34)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.05)" />
      </g>
      ${renderIcon(icon, 24, iconDark)}
    </g>
    <text x="74" y="27" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="10" font-weight="700" fill="${textDark ? textDark + '99' : '#88aba3'}" letter-spacing="0.08em">${sublabel.toUpperCase()}</text>
    <text x="74" y="47" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="16" font-weight="700" fill="${textDark || '#ffffff'}">${label}</text>
  </svg>`;
  saveSvg(path.join('dark', `btn-${name}.svg`), darkSvg);

  // LIGHT
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="68" viewBox="0 0 ${width} 68">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 10s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M34,1H${width - 34}A33,33 0 0 1 ${width - 1},34V34A33,33 0 0 1 ${width - 34},67H34A33,33 0 0 1 1,34V34A33,33 0 0 1 34,1Z" fill="${bgLight || '#e6f3ee'}" stroke="#cbdfd7" stroke-width="1"/>
    <g transform="translate(38, 34)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.05)" />
      </g>
      ${renderIcon(icon, 24, iconLight)}
    </g>
    <text x="74" y="27" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="10" font-weight="700" fill="${textLight ? textLight + '99' : '#3f675e'}" letter-spacing="0.08em">${sublabel.toUpperCase()}</text>
    <text x="74" y="47" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="16" font-weight="700" fill="${textLight || '#10201d'}">${label}</text>
  </svg>`;
  saveSvg(path.join('light', `btn-${name}.svg`), lightSvg);
}

// -------------------------------------------------------------
// 3. ROTATING HEADER BANNER (1000 x 104, Flower Center: 56, 52)
// -------------------------------------------------------------
function generateHeader({ name, title, subtitle, icon, tags = [], flowerDark, flowerLight, iconDark, iconLight }) {
  function renderTags(tagsList, isDark) {
    let x = 970;
    let out = '';
    const pillBg = isDark ? '#263733' : '#d2e8e0';
    const textColor = isDark ? '#ffffff' : '#122320';
    
    for (let i = tagsList.length - 1; i >= 0; i--) {
      const t = tagsList[i];
      const pillWidth = t.length * 8 + 26;
      x -= pillWidth;
      out += `<g transform="translate(${x}, 36)">
        <rect width="${pillWidth}" height="32" rx="16" fill="${pillBg}"/>
        <text x="${pillWidth / 2}" y="20.5" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13" font-weight="700" fill="${textColor}" text-anchor="middle">${t}</text>
      </g>`;
      x -= 10;
    }
    return out;
  }

  // DESKTOP DARK
  const dDark = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="104" viewBox="0 0 1000 104">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M52,0H948A52,52 0 0 1 1000,52V52A52,52 0 0 1 948,104H52A52,52 0 0 1 0,52V52A52,52 0 0 1 52,0Z" fill="#182321"/>
    <g transform="translate(56, 52)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.52)" />
      </g>
      ${renderIcon(icon, 36, iconDark)}
    </g>
    <text x="114" y="47" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="32" font-weight="700" fill="#ffffff">${title}</text>
    <text x="114" y="74" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="15" font-weight="400" fill="#99bcb4">${subtitle}</text>
    ${renderTags(tags, true)}
  </svg>`;
  saveSvg(path.join('dark', `h-${name}.svg`), dDark);

  // DESKTOP LIGHT
  const dLight = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="104" viewBox="0 0 1000 104">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M52,0H948A52,52 0 0 1 1000,52V52A52,52 0 0 1 948,104H52A52,52 0 0 1 0,52V52A52,52 0 0 1 52,0Z" fill="#e2f1ec"/>
    <g transform="translate(56, 52)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.52)" />
      </g>
      ${renderIcon(icon, 36, iconLight)}
    </g>
    <text x="114" y="47" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="32" font-weight="700" fill="#10201d">${title}</text>
    <text x="114" y="74" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="15" font-weight="400" fill="#3c625a">${subtitle}</text>
    ${renderTags(tags, false)}
  </svg>`;
  saveSvg(path.join('light', `h-${name}.svg`), dLight);

  // MOBILE RESPONSIVE VERSION (640 x 90, Flower Center: 46, 45)
  const mDark = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="90" viewBox="0 0 640 90">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M45,0H595A45,45 0 0 1 640,45V45A45,45 0 0 1 595,90H45A45,45 0 0 1 0,45V45A45,45 0 0 1 45,0Z" fill="#182321"/>
    <g transform="translate(46, 45)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.28)" />
      </g>
      ${renderIcon(icon, 30, iconDark)}
    </g>
    <text x="96" y="42" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="25" font-weight="700" fill="#ffffff">${title}</text>
    <text x="96" y="66" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13" font-weight="400" fill="#99bcb4">${subtitle}</text>
  </svg>`;
  saveSvg(path.join('dark', `hm-${name}.svg`), mDark);

  const mLight = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="90" viewBox="0 0 640 90">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M45,0H595A45,45 0 0 1 640,45V45A45,45 0 0 1 595,90H45A45,45 0 0 1 0,45V45A45,45 0 0 1 45,0Z" fill="#e2f1ec"/>
    <g transform="translate(46, 45)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.28)" />
      </g>
      ${renderIcon(icon, 30, iconLight)}
    </g>
    <text x="96" y="42" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="25" font-weight="700" fill="#10201d">${title}</text>
    <text x="96" y="66" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13" font-weight="400" fill="#3c625a">${subtitle}</text>
  </svg>`;
  saveSvg(path.join('light', `hm-${name}.svg`), mLight);
}

// -------------------------------------------------------------
// 4. ROTATING HERO BANNER (1000 x 260 desktop, 640 x 200 mobile)
// -------------------------------------------------------------
function generateHero() {
  const dDark = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="260" viewBox="0 0 1000 260">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <rect width="1000" height="260" rx="36" fill="#101918"/>
    <path d="M0,0 L1000,0 C980,100 800,260 600,260 L0,260 Z" fill="#162523" opacity="0.6"/>
    <circle cx="850" cy="130" r="180" fill="#1d3531" opacity="0.4"/>
    
    <!-- Hero Rotating Flower & Mark -->
    <g transform="translate(130, 130)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="14s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="#006A60" transform="scale(3.2)" />
      </g>
      ${renderIcon('navigation', 74, '#70F7E5')}
    </g>

    <!-- Content -->
    <g transform="translate(260, 68)">
      <text x="0" y="44" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-0.02em">OpenMaps</text>
      <text x="0" y="80" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="18" font-weight="500" fill="#70F7E5">Android Maps &amp; Navigation · Degoogled &amp; Privacy-First</text>
      <text x="0" y="112" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="400" fill="#a4c6be">
        Live traffic, turn-by-turn navigation, and open vector tiles with zero Google account, no Play Services, and no telemetry.
      </text>

      <!-- Badges row -->
      <g transform="translate(0, 136)">
        <rect width="138" height="28" rx="14" fill="#253a36"/>
        <text x="69" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#70F7E5" text-anchor="middle">JETPACK COMPOSE</text>

        <rect x="146" width="130" height="28" rx="14" fill="#253a36"/>
        <text x="211" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#EADDFF" text-anchor="middle">MAPLIBRE NATIVE</text>

        <rect x="284" width="144" height="28" rx="14" fill="#253a36"/>
        <text x="356" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#FFDCC3" text-anchor="middle">OPENSTREETMAP</text>

        <rect x="436" width="138" height="28" rx="14" fill="#253a36"/>
        <text x="505" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#C4F0A4" text-anchor="middle">OFFLINE ROUTING</text>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('dark', 'h-hero.svg'), dDark);

  const dLight = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="260" viewBox="0 0 1000 260">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <rect width="1000" height="260" rx="36" fill="#e8f5f1"/>
    <path d="M0,0 L1000,0 C980,100 800,260 600,260 L0,260 Z" fill="#d9ece5" opacity="0.7"/>
    <circle cx="850" cy="130" r="180" fill="#cae3db" opacity="0.5"/>

    <!-- Hero Rotating Flower & Mark -->
    <g transform="translate(130, 130)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="14s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="#70F7E5" transform="scale(3.2)" />
      </g>
      ${renderIcon('navigation', 74, '#006A60')}
    </g>

    <!-- Content -->
    <g transform="translate(260, 68)">
      <text x="0" y="44" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="44" font-weight="800" fill="#10201d" letter-spacing="-0.02em">OpenMaps</text>
      <text x="0" y="80" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="18" font-weight="600" fill="#006A60">Android Maps &amp; Navigation · Degoogled &amp; Privacy-First</text>
      <text x="0" y="112" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="400" fill="#446a62">
        Live traffic, turn-by-turn navigation, and open vector tiles with zero Google account, no Play Services, and no telemetry.
      </text>

      <!-- Badges row -->
      <g transform="translate(0, 136)">
        <rect width="138" height="28" rx="14" fill="#cbe6dc"/>
        <text x="69" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#005149" text-anchor="middle">JETPACK COMPOSE</text>

        <rect x="146" width="130" height="28" rx="14" fill="#cbe6dc"/>
        <text x="211" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#3E2768" text-anchor="middle">MAPLIBRE NATIVE</text>

        <rect x="284" width="144" height="28" rx="14" fill="#cbe6dc"/>
        <text x="356" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#6E3714" text-anchor="middle">OPENSTREETMAP</text>

        <rect x="436" width="138" height="28" rx="14" fill="#cbe6dc"/>
        <text x="505" y="18" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700" fill="#284B12" text-anchor="middle">OFFLINE ROUTING</text>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('light', 'h-hero.svg'), dLight);

  // Mobile Hero (640 x 200)
  const mDark = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="200" viewBox="0 0 640 200">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <rect width="640" height="200" rx="28" fill="#101918"/>
    <g transform="translate(68, 100)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="14s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="#006A60" transform="scale(2.2)" />
      </g>
      ${renderIcon('navigation', 50, '#70F7E5')}
    </g>
    <g transform="translate(150, 48)">
      <text x="0" y="36" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="34" font-weight="800" fill="#ffffff">OpenMaps</text>
      <text x="0" y="66" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="600" fill="#70F7E5">Degoogled Maps &amp; Navigation for Android</text>
      <text x="0" y="94" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="12.5" font-weight="400" fill="#99bcb4">
        Open vector tiles, offline turn-by-turn &amp; zero tracking.
      </text>
      <g transform="translate(0, 112)">
        <rect width="108" height="24" rx="12" fill="#253a36"/>
        <text x="54" y="16" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#70F7E5" text-anchor="middle">COMPOSE</text>
        <rect x="116" width="108" height="24" rx="12" fill="#253a36"/>
        <text x="170" y="16" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#FFDCC3" text-anchor="middle">OFFLINE</text>
        <rect x="232" width="118" height="24" rx="12" fill="#253a36"/>
        <text x="291" y="16" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#C4F0A4" text-anchor="middle">NO TRACKING</text>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('dark', 'hm-hero.svg'), mDark);

  const mLight = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="200" viewBox="0 0 640 200">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 14s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <rect width="640" height="200" rx="28" fill="#e8f5f1"/>
    <g transform="translate(68, 100)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="14s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="#70F7E5" transform="scale(2.2)" />
      </g>
      ${renderIcon('navigation', 50, '#006A60')}
    </g>
    <g transform="translate(150, 48)">
      <text x="0" y="36" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="34" font-weight="800" fill="#10201d">OpenMaps</text>
      <text x="0" y="66" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="600" fill="#006A60">Degoogled Maps &amp; Navigation for Android</text>
      <text x="0" y="94" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="12.5" font-weight="400" fill="#446a62">
        Open vector tiles, offline turn-by-turn &amp; zero tracking.
      </text>
      <g transform="translate(0, 112)">
        <rect width="108" height="24" rx="12" fill="#cbe6dc"/>
        <text x="54" y="16" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#005149" text-anchor="middle">COMPOSE</text>
        <rect x="116" width="108" height="24" rx="12" fill="#cbe6dc"/>
        <text x="170" y="16" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#6E3714" text-anchor="middle">OFFLINE</text>
        <rect x="232" width="118" height="24" rx="12" fill="#cbe6dc"/>
        <text x="291" y="16" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#284B12" text-anchor="middle">NO TRACKING</text>
      </g>
    </g>
  </svg>`;
  saveSvg(path.join('light', 'hm-hero.svg'), mLight);
}

// -------------------------------------------------------------
// 5. ROTATING FEATURE CARD (430 x 218, Flower Center: 64, 60)
// -------------------------------------------------------------
function generateCard({ name, title, lines, icon, flowerDark, flowerLight, iconDark, iconLight }) {
  const tLines = lines.map((l, i) => `<tspan x="36" dy="${i === 0 ? 0 : 20}">${l}</tspan>`).join('');

  // DARK
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="430" height="218" viewBox="0 0 430 218">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <clipPath id="c_${name}"><rect width="430" height="218" rx="32" /></clipPath>
    <rect width="430" height="218" rx="32" fill="#131e1c" stroke="#253531" stroke-width="1"/>
    <g clip-path="url(#c_${name})">
      <path d="M440,110 C420,115 390,125 375,115 C360,105 340,65 315,55 C295,47 285,15 305,-5 C325,-25 355,-55 390,-55 C430,-55 470,20 475,50 C480,80 455,105 440,110 Z" fill="#1c2c29" />
    </g>
    <g transform="translate(64, 60)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(1.18)" />
      </g>
      ${renderIcon(icon, 30, iconDark)}
    </g>
    <text x="36" y="125" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="21" font-weight="700" fill="#ffffff">${title}</text>
    <text x="36" y="152" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13.5" font-weight="400" fill="#9dbfb6">
      ${tLines}
    </text>
  </svg>`;
  saveSvg(path.join('dark', `card-${name}.svg`), darkSvg);

  // LIGHT
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="430" height="218" viewBox="0 0 430 218">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 12s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <clipPath id="cl_${name}"><rect width="430" height="218" rx="32" /></clipPath>
    <rect width="430" height="218" rx="32" fill="#ebf6f2" stroke="#cfe1da" stroke-width="1"/>
    <g clip-path="url(#cl_${name})">
      <path d="M440,110 C420,115 390,125 375,115 C360,105 340,65 315,55 C295,47 285,15 305,-5 C325,-25 355,-55 390,-55 C430,-55 470,20 475,50 C480,80 455,105 440,110 Z" fill="#ddede7" />
    </g>
    <g transform="translate(64, 60)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(1.18)" />
      </g>
      ${renderIcon(icon, 30, iconLight)}
    </g>
    <text x="36" y="125" font-family="system-ui, -apple-system, 'Google Sans', Roboto, sans-serif" font-size="21" font-weight="700" fill="#10201d">${title}</text>
    <text x="36" y="152" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="13.5" font-weight="400" fill="#446a62">
      ${tLines}
    </text>
  </svg>`;
  saveSvg(path.join('light', `card-${name}.svg`), lightSvg);
}

// -------------------------------------------------------------
// 6. ROTATING TECH STACK PILL (Height: 42, Flower Center: 21, 21)
// -------------------------------------------------------------
function generateStackPill({ name, label, icon, flowerDark, flowerLight, iconDark, iconLight, width }) {
  // DARK with active 8s rotation
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="42" viewBox="0 0 ${width} 42">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M21,0H${width - 21}A21,21 0 0 1 ${width},21V21A21,21 0 0 1 ${width - 21},42H21A21,21 0 0 1 0,21V21A21,21 0 0 1 21,0Z" fill="#182321" stroke="#253531" stroke-width="1"/>
    <g transform="translate(21, 21)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerDark}" transform="scale(0.68)" />
      </g>
      ${renderIcon(icon, 17, iconDark)}
    </g>
    <text x="42" y="26" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="600" fill="#d9ebe7">${label}</text>
  </svg>`;
  saveSvg(path.join('dark', `pill-${name}.svg`), darkSvg);

  // LIGHT
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="42" viewBox="0 0 ${width} 42">
    <defs>
      <style>
        @keyframes m3e-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .m3e-flower-spin { animation: m3e-spin 8s linear infinite; transform-origin: 0px 0px; }
      </style>
    </defs>
    <path d="M21,0H${width - 21}A21,21 0 0 1 ${width},21V21A21,21 0 0 1 ${width - 21},42H21A21,21 0 0 1 0,21V21A21,21 0 0 1 21,0Z" fill="#e8f4f0" stroke="#cfdfdb" stroke-width="1"/>
    <g transform="translate(21, 21)">
      <g class="m3e-flower-spin">
        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
        <path d="${CENTERED_FLOWER_PATH}" fill="${flowerLight}" transform="scale(0.68)" />
      </g>
      ${renderIcon(icon, 17, iconLight)}
    </g>
    <text x="42" y="26" font-family="system-ui, -apple-system, Roboto, sans-serif" font-size="14.5" font-weight="600" fill="#132320">${label}</text>
  </svg>`;
  saveSvg(path.join('light', `pill-${name}.svg`), lightSvg);
}

// =============================================================
// RUN ASSET GENERATION FOR OPENMAPS
// =============================================================
console.log('Generating Google Pixel / Material 3 Expressive animated assets for OpenMaps...');

// Top Hero Banner
generateHero();

// Action Buttons (216 x 68)
generateButton({ name: 'download', sublabel: 'STABLE APK', label: 'Download APK', icon: 'download', flowerDark: '#006A60', flowerLight: '#70F7E5', iconDark: '#FFFFFF', iconLight: '#003731', width: 206 });
generateButton({ name: 'github', sublabel: 'STAR ON GITHUB', label: 'Source code', icon: 'github', flowerDark: '#2C3A37', flowerLight: '#D0E3DD', iconDark: '#FFFFFF', iconLight: '#142521', width: 206 });
generateButton({ name: 'docs', sublabel: 'SEARCHABLE DOCS', label: 'Documentation', icon: 'docs', flowerDark: '#4A3B73', flowerLight: '#E8DCFF', iconDark: '#FFFFFF', iconLight: '#23124E', width: 218 });
generateButton({ name: 'releases', sublabel: 'NIGHTLY & CANARY', label: 'All Releases', icon: 'launch', flowerDark: '#853B55', flowerLight: '#FFD8E4', iconDark: '#FFFFFF', iconLight: '#3B071F', width: 208 });
generateButton({ name: 'issues', sublabel: 'FOUND A BUG?', label: 'Report Issue', icon: 'bug', flowerDark: '#8A5128', flowerLight: '#FFDCC1', iconDark: '#FFFFFF', iconLight: '#351500', width: 206 });
generateButton({ name: 'license', sublabel: 'OPEN SOURCE', label: 'MIT License', icon: 'license', flowerDark: '#3A5E53', flowerLight: '#CCE8DE', iconDark: '#FFFFFF', iconLight: '#042018', width: 200 });

// Badges (Height: 28)
generateBadge({ name: 'android', label: 'Android 8.0+', icon: 'android', flowerDark: '#2E6A45', flowerLight: '#C3EED0', iconDark: '#FFFFFF', iconLight: '#00210E', width: 126 });
generateBadge({ name: 'clientonly', label: '100% Client-Side', icon: 'lock', flowerDark: '#006A60', flowerLight: '#70F7E5', iconDark: '#FFFFFF', iconLight: '#003731', width: 142 });
generateBadge({ name: 'zerotracking', label: 'Zero Telemetry', icon: 'shield', flowerDark: '#3B4E73', flowerLight: '#D3E3FD', iconDark: '#FFFFFF', iconLight: '#041E49', width: 130 });
generateBadge({ name: 'compose', label: 'Jetpack Compose', icon: 'palette', flowerDark: '#6750A4', flowerLight: '#EADDFF', iconDark: '#FFFFFF', iconLight: '#21005D', width: 146 });
generateBadge({ name: 'maplibre', label: 'MapLibre Native', icon: 'map', flowerDark: '#1E5268', flowerLight: '#C4E7FF', iconDark: '#FFFFFF', iconLight: '#001E2E', width: 138 });
generateBadge({ name: 'osm', label: 'OpenStreetMap', icon: 'globe', flowerDark: '#4D6438', flowerLight: '#D3EABC', iconDark: '#FFFFFF', iconLight: '#111F05', width: 136 });
generateBadge({ name: 'offline', label: 'Offline Navigation', icon: 'offline', flowerDark: '#776228', flowerLight: '#FFE193', iconDark: '#FFFFFF', iconLight: '#251A00', width: 152 });
generateBadge({ name: 'mit', label: 'MIT License', icon: 'license', flowerDark: '#455173', flowerLight: '#D8E2FF', iconDark: '#FFFFFF', iconLight: '#001A41', width: 118 });
generateBadge({ name: 'prs', label: 'PRs welcome', icon: 'contribute', flowerDark: '#734375', flowerLight: '#FBD7FC', iconDark: '#FFFFFF', iconLight: '#2C132E', width: 122 });

// Section Header Banners (1000 x 104 desktop, 640 x 90 mobile)
generateHeader({ name: 'overview', title: 'Overview', subtitle: 'A native, degoogled Google Maps alternative for stock and privacy Android', icon: 'map', tags: ['No Play Services', 'No Google Account', 'Vector Tiles'], flowerDark: '#006A60', flowerLight: '#70F7E5', iconDark: '#FFFFFF', iconLight: '#003731' });
generateHeader({ name: 'comparison', title: 'Privacy Architecture', subtitle: 'What reaches Google anonymously vs what stays strictly on your phone', icon: 'shield', tags: ['Zero Telemetry', 'Anonymous Web', 'Local GPS'], flowerDark: '#3B4E73', flowerLight: '#D3E3FD', iconDark: '#FFFFFF', iconLight: '#041E49' });
generateHeader({ name: 'screenshots', title: 'Screenshots & UI', subtitle: 'Turn-by-turn navigation, lane guidance, place sheets & live departure boards', icon: 'gallery', tags: ['Turn-by-Turn', 'Transit', 'Dark & Light'], flowerDark: '#3A5E53', flowerLight: '#CCE8DE', iconDark: '#FFFFFF', iconLight: '#042018' });
generateHeader({ name: 'features', title: 'Key Features', subtitle: 'Everything built into OpenMaps for daily driving, transit and discovery', icon: 'sparkles', tags: ['Live Traffic', 'Camera Alerts', 'Voice'], flowerDark: '#776228', flowerLight: '#FFE193', iconDark: '#FFFFFF', iconLight: '#251A00' });
generateHeader({ name: 'stack', title: 'Engineering Stack', subtitle: 'Architected with Jetpack Compose, MapLibre Native, Kotlin & Sherpa-ONNX', icon: 'code', tags: ['Kotlin 2.4', 'Compose', 'MapLibre'], flowerDark: '#6750A4', flowerLight: '#EADDFF', iconDark: '#FFFFFF', iconLight: '#21005D' });
generateHeader({ name: 'install', title: 'Installation & Verification', subtitle: 'Direct signed APK downloads, fingerprint verification & local builds', icon: 'terminal', tags: ['APK Verify', 'GrapheneOS', 'Android Auto'], flowerDark: '#8A5128', flowerLight: '#FFDCC1', iconDark: '#FFFFFF', iconLight: '#351500' });
generateHeader({ name: 'faq', title: 'Frequently Asked Questions', subtitle: 'Common questions regarding privacy, offline maps, and data sources', icon: 'help', tags: ['Offline Data', 'OSM', 'Traffic'], flowerDark: '#455173', flowerLight: '#D8E2FF', iconDark: '#FFFFFF', iconLight: '#001A41' });
generateHeader({ name: 'license', title: 'License & Attribution', subtitle: 'Free and open source under the MIT License and open data contributors', icon: 'scale', tags: ['MIT License', 'OpenStreetMap', 'Overture'], flowerDark: '#4A3B4F', flowerLight: '#E8DCEB', iconDark: '#FFFFFF', iconLight: '#251A29' });

// Bento Grid Feature Cards (430 x 218)
generateCard({ name: 'navigation', title: 'Live Turn-by-Turn', lines: ['Turn-by-turn navigation with lane diagrams,', 'exit shields, posted speed limits, and', 'faster-route traffic offers while driving.'], icon: 'navigation', flowerDark: '#006A60', flowerLight: '#70F7E5', iconDark: '#FFFFFF', iconLight: '#003731' });
generateCard({ name: 'basemap', title: 'Open Vector Basemap', lines: ['Native MapLibre engine rendering OpenFreeMap', 'and OpenStreetMap vector tiles at 60fps in', 'custom Google palette with Google Sans Flex.'], icon: 'map', flowerDark: '#1E5268', flowerLight: '#C4E7FF', iconDark: '#FFFFFF', iconLight: '#001E2E' });
generateCard({ name: 'offline', title: '100% Offline Maps', lines: ['Download countries, states or custom cuts for', 'map browsing, typed address search, and', 'turn-by-turn routing with zero connection.'], icon: 'offline', flowerDark: '#776228', flowerLight: '#FFE193', iconDark: '#FFFFFF', iconLight: '#251A00' });
generateCard({ name: 'places', title: 'Open Places & Live Info', lines: ['Pins drawn from Overture Maps and AllThePlaces.', 'Tapping a place queries hours, holiday times,', 'photos and reviews anonymously.'], icon: 'place', flowerDark: '#8A5128', flowerLight: '#FFDCC1', iconDark: '#FFFFFF', iconLight: '#351500' });
generateCard({ name: 'transit', title: 'Live Transit Departures', lines: ['Live transit departure boards and full stop', 'sequences powered by community Transitous', 'and open agency GTFS timetable feeds.'], icon: 'transit', flowerDark: '#4A3B73', flowerLight: '#E8DCFF', iconDark: '#FFFFFF', iconLight: '#23124E' });
generateCard({ name: 'voice', title: 'On-Device Neural Voice', lines: ['High-fidelity spoken voice directions powered', 'by on-device Sherpa-ONNX neural TTS.', 'Audio stays 100% on device with no cloud API.'], icon: 'voice', flowerDark: '#853B55', flowerLight: '#FFD8E4', iconDark: '#FFFFFF', iconLight: '#3B071F' });
generateCard({ name: 'camera', title: 'Surveillance Camera Alerts', lines: ['Mapped license plate cameras (DeFlock OSM).', 'Avoid surveillance routing switch and spoken', "'Camera ahead' audible warnings."], icon: 'camera', flowerDark: '#734375', flowerLight: '#FBD7FC', iconDark: '#FFFFFF', iconLight: '#2C132E' });
generateCard({ name: 'privacy', title: 'Zero Tracking & Telemetry', lines: ['No Google login, no Play Services, and no ad', 'identities. Your GPS trail, history and saved', 'places never leave your phone.'], icon: 'shield', flowerDark: '#2E6A45', flowerLight: '#C3EED0', iconDark: '#FFFFFF', iconLight: '#00210E' });

// Tech Stack Pills (Height: 42)
generateStackPill({ name: 'kotlin', label: 'Kotlin 2.4', icon: 'code', flowerDark: '#6750A4', flowerLight: '#EADDFF', iconDark: '#FFFFFF', iconLight: '#21005D', width: 140 });
generateStackPill({ name: 'compose', label: 'Jetpack Compose', icon: 'palette', flowerDark: '#006A60', flowerLight: '#70F7E5', iconDark: '#FFFFFF', iconLight: '#003731', width: 184 });
generateStackPill({ name: 'maplibre', label: 'MapLibre Native', icon: 'map', flowerDark: '#1E5268', flowerLight: '#C4E7FF', iconDark: '#FFFFFF', iconLight: '#001E2E', width: 172 });
generateStackPill({ name: 'android', label: 'Android SDK 35/37', icon: 'android', flowerDark: '#2E6A45', flowerLight: '#C3EED0', iconDark: '#FFFFFF', iconLight: '#00210E', width: 190 });
generateStackPill({ name: 'osm', label: 'OpenStreetMap Data', icon: 'globe', flowerDark: '#4D6438', flowerLight: '#D3EABC', iconDark: '#FFFFFF', iconLight: '#111F05', width: 196 });
generateStackPill({ name: 'routing', label: 'OSRM & Valhalla', icon: 'navigation', flowerDark: '#8A5128', flowerLight: '#FFDCC1', iconDark: '#FFFFFF', iconLight: '#351500', width: 172 });
generateStackPill({ name: 'voice', label: 'Sherpa-ONNX Voice', icon: 'voice', flowerDark: '#853B55', flowerLight: '#FFD8E4', iconDark: '#FFFFFF', iconLight: '#3B071F', width: 186 });
generateStackPill({ name: 'okhttp', label: 'OkHttp & Coroutines', icon: 'sync', flowerDark: '#3B4E73', flowerLight: '#D3E3FD', iconDark: '#FFFFFF', iconLight: '#041E49', width: 194 });
generateStackPill({ name: 'mit', label: 'MIT License (Open Source)', icon: 'license', flowerDark: '#4A3B4F', flowerLight: '#E8DCEB', iconDark: '#FFFFFF', iconLight: '#251A29', width: 236 });

console.log('Successfully generated all Google Pixel / Material 3 Expressive SVG assets!');
