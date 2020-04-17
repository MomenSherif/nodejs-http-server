const fs = require('fs');
const images = fs.readdirSync('./images/Nature');

const html = `
  <!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/styles/style.css">
      <title>Document</title>
    </head>

    <body>
      <header class="header">
        <div class="container header__container">
          <a href="/" class="logo">Logo</a>
          <nav class="header__nav">
            <ul class="header__nav-list">
              <li class="header__nav-item">
                <a href="/" class="header__link">Home</a>
              </li>
              <li class="header__nav-item">
                <a href="/nature" class="header__link header__link--active">Nature</a>
              </li>
              <li class="header__nav-item">
                <a href="/quotes" class="header__link">Quotes</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="nature-section">
        <div class="container nature__container">
          ${images
            .map(
              (img) => `
              <div class="img-box">
              <img src="/images/Nature/${img}" alt="Nature" class="image">
              </div>`
            )
            .join('')}
      </section>
    </body>
  </html>
`;

module.exports = html;
