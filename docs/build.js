const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// Configuration
const BUILD_DIR = path.join(__dirname, 'build');
const DOCS_DIR = __dirname;

// Clean and create build directory
if (fs.existsSync(BUILD_DIR)) {
  fs.rmSync(BUILD_DIR, { recursive: true });
}
fs.mkdirSync(BUILD_DIR, { recursive: true });

// HTML template
const htmlTemplate = (title, content, navHtml = '') => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - EQUILIBRIUM Documentation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }
    .container {
      display: flex;
      max-width: 1400px;
      margin: 0 auto;
      min-height: 100vh;
    }
    .sidebar {
      width: 280px;
      background: #2c3e50;
      color: #ecf0f1;
      padding: 20px;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
    }
    .sidebar h1 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #3498db;
    }
    .sidebar nav ul {
      list-style: none;
    }
    .sidebar nav li {
      margin-bottom: 8px;
    }
    .sidebar nav a {
      color: #ecf0f1;
      text-decoration: none;
      display: block;
      padding: 8px 12px;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .sidebar nav a:hover {
      background: #34495e;
    }
    .main-content {
      flex: 1;
      background: white;
      padding: 40px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .main-content h1 {
      color: #2c3e50;
      border-bottom: 3px solid #3498db;
      padding-bottom: 10px;
      margin-bottom: 30px;
    }
    .main-content h2 {
      color: #2c3e50;
      margin-top: 30px;
      margin-bottom: 15px;
      padding-bottom: 8px;
      border-bottom: 1px solid #ecf0f1;
    }
    .main-content h3 {
      color: #34495e;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .main-content p {
      margin-bottom: 15px;
    }
    .main-content ul, .main-content ol {
      margin-left: 30px;
      margin-bottom: 15px;
    }
    .main-content li {
      margin-bottom: 8px;
    }
    .main-content code {
      background: #f8f8f8;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    .main-content pre {
      background: #f8f8f8;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      margin-bottom: 15px;
    }
    .main-content pre code {
      background: none;
      padding: 0;
    }
    .main-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    .main-content th, .main-content td {
      padding: 12px;
      text-align: left;
      border: 1px solid #ddd;
    }
    .main-content th {
      background: #3498db;
      color: white;
      font-weight: bold;
    }
    .main-content tr:nth-child(even) {
      background: #f8f8f8;
    }
    .main-content a {
      color: #3498db;
      text-decoration: none;
    }
    .main-content a:hover {
      text-decoration: underline;
    }
    .main-content blockquote {
      border-left: 4px solid #3498db;
      padding-left: 20px;
      margin: 20px 0;
      color: #555;
      font-style: italic;
    }
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
      .sidebar {
        width: 100%;
        height: auto;
        position: relative;
      }
      .main-content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="sidebar">
      <h1>EQUILIBRIUM</h1>
      <nav>
        ${navHtml}
      </nav>
    </div>
    <div class="main-content">
      ${content}
    </div>
  </div>
</body>
</html>`;

// Recursively find all markdown files
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Build navigation from directory structure
function buildNavigation(files) {
  const sections = {};

  files.forEach(file => {
    const relativePath = path.relative(DOCS_DIR, file);
    const parts = relativePath.split(path.sep);

    if (parts[0].match(/^\d{2}-/)) {
      const sectionName = parts[0].replace(/^\d{2}-/, '').replace(/-/g, ' ');
      const sectionKey = parts[0];

      if (!sections[sectionKey]) {
        sections[sectionKey] = {
          name: sectionName.charAt(0).toUpperCase() + sectionName.slice(1),
          files: []
        };
      }

      sections[sectionKey].files.push({
        path: relativePath,
        name: path.basename(file, '.md')
      });
    }
  });

  let navHtml = '<ul>';
  navHtml += '<li><a href="index.html">Home</a></li>';

  Object.keys(sections).sort().forEach(key => {
    const section = sections[key];
    navHtml += `<li><strong>${section.name}</strong><ul>`;

    section.files.forEach(file => {
      const htmlPath = file.path.replace(/\.md$/, '.html');
      const displayName = file.name === 'README'
        ? 'Overview'
        : file.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      navHtml += `<li><a href="${htmlPath}">${displayName}</a></li>`;
    });

    navHtml += '</ul></li>';
  });

  navHtml += '</ul>';
  return navHtml;
}

// Convert markdown file to HTML
function convertMarkdownToHtml(filePath, navHtml) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: markdown } = matter(content);

  const title = data.title || path.basename(filePath, '.md').replace(/-/g, ' ');
  const htmlContent = marked.parse(markdown);

  return htmlTemplate(title, htmlContent, navHtml);
}

// Main build process
console.log('🔨 Building EQUILIBRIUM Documentation...\n');

// Find all markdown files
const markdownFiles = findMarkdownFiles(DOCS_DIR).filter(f =>
  !f.includes('node_modules') && !f.includes('build')
);

console.log(`📄 Found ${markdownFiles.length} markdown files\n`);

// Build navigation
const navHtml = buildNavigation(markdownFiles);

// Convert each markdown file to HTML
markdownFiles.forEach(file => {
  const relativePath = path.relative(DOCS_DIR, file);
  const htmlPath = path.join(BUILD_DIR, relativePath.replace(/\.md$/, '.html'));

  // Create directory structure
  fs.mkdirSync(path.dirname(htmlPath), { recursive: true });

  // Convert and write HTML
  const html = convertMarkdownToHtml(file, navHtml);
  fs.writeFileSync(htmlPath, html);

  console.log(`✅ ${relativePath} → ${path.relative(DOCS_DIR, htmlPath)}`);
});

// Create index.html from README.md
const readmePath = path.join(DOCS_DIR, 'README.md');
if (fs.existsSync(readmePath)) {
  const indexHtml = convertMarkdownToHtml(readmePath, navHtml);
  fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), indexHtml);
  console.log('\n✅ Created index.html from README.md');
} else {
  // Create basic index if README doesn't exist
  const indexContent = `
    <h1>EQUILIBRIUM Project Documentation</h1>
    <p>Welcome to the EQUILIBRIUM project documentation. Use the navigation menu to explore different sections.</p>
  `;
  const indexHtml = htmlTemplate('Home', indexContent, navHtml);
  fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), indexHtml);
  console.log('\n✅ Created basic index.html');
}

console.log('\n✨ Build complete! Documentation ready in ./build/\n');
