const fs = require('fs');
const path = require('path');

// Config
const buildDir = 'dist';
const chromeDir = path.join(buildDir, 'chrome');
const firefoxDir = path.join(buildDir, 'firefox');

// Create build directories
function createDirs() {
  [buildDir, chromeDir, firefoxDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Copy shared files
function copySharedFiles(targetDir) {
  ['content.js', 'LICENSE', 'README.md'].forEach(file => {
    fs.copyFileSync(file, path.join(targetDir, file));
  });
}

// Build extensions
function build() {
  // Clean build directory
  if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true });
  }

  createDirs();

  // Build Chrome version
  copySharedFiles(chromeDir);
  fs.copyFileSync('manifest.json', path.join(chromeDir, 'manifest.json'));

  // Build Firefox version
  copySharedFiles(firefoxDir);
  fs.copyFileSync('manifest.firefox.json', path.join(firefoxDir, 'manifest.json'));

  console.log('Build complete! Check the dist/ directory.');
}

build();
