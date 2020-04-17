const http = require('http');

const { serveHTML, serveImage, serveStyleSheet } = require('./utils');
const homePageHTML = require('./homePage');
const naturePageHTML = require('./naturePage');
const quotesPageHTML = require('./quotesPage');
const notFoundPageHTML = require('./404Page');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // serve all iamges
  if (req.url.startsWith('/images'))
    return serveImage(`${__dirname}${req.url}`, res);
  // serve all style sheets
  if (req.url.startsWith('/styles'))
    return serveStyleSheet(`${__dirname}${req.url}`, res);

  switch (req.url) {
    case '/':
      serveHTML(homePageHTML, res);
      break;
    case '/nature':
      serveHTML(naturePageHTML, res);
      break;
    case '/quotes':
      serveHTML(quotesPageHTML, res);
      break;
    case '/favicon.ico':
      serveImage(`${__dirname}${req.url}`, res);
      break;
    default:
      res.statusCode = 404;
      serveHTML(notFoundPageHTML, res);
  }
  console.log();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
