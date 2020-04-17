const fs = require('fs');

const serveImage = (imagePath, res) => {
  // decodeURIComponent -> decodes a Uniform Resource Identifier (URI) component to string
  const imageBuffer = fs.readFileSync(decodeURIComponent(imagePath));
  res.setHeader('Content-Type', 'image/jpeg');
  res.end(imageBuffer);
};

const serveHTML = (html, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
};

const serveStyleSheet = (styleSheetPath, res) => {
  const file = fs.readFileSync(styleSheetPath);
  res.setHeader('Content-Type', 'text/css');
  res.end(file);
};

module.exports = {
  serveHTML,
  serveImage,
  serveStyleSheet,
};
