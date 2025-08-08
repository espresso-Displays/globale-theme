const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');
const HANDLES_PATH = path.join(SRC, 'handles.liquid');
const PLACEHOLDER_REGEX = /{%\s*comment\s*%}\s*inject:handles\s*{%\s*endcomment\s*%}/g;

// Recursively copy src to dist
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Inject handles into all .liquid files in dist
function injectHandles() {
  const handlesContent = fs.readFileSync(HANDLES_PATH, 'utf8');
  function processDir(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        processDir(filePath);
      } else if (file.endsWith('.liquid')) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (PLACEHOLDER_REGEX.test(content)) {
          content = content.replace(PLACEHOLDER_REGEX, handlesContent);
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Injected handles into ${filePath}`);
        }
      }
    });
  }
  processDir(DIST);
}

// Clean dist, copy src, inject handles
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true, force: true });
copyDir(SRC, DIST);
injectHandles();
console.log('Build complete: src → dist with handles injected.');
