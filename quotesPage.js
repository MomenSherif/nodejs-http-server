const fs = require('fs');
const images = fs.readdirSync('./images/Quotes');

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
                <a href="/nature" class="header__link ">Nature</a>
              </li>
              <li class="header__nav-item">
                <a href="/quotes" class="header__link header__link--active">Quotes</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="quotes-section">
        <div class="container quotes__container">
          ${images
            .map(
              (img) => `
            <div class="img-box">
            <img src="/images/Quotes/${img}" alt="Nature" class="image">
            </div>`
            )
            .join('')}
        </div>
      </section>
    </body>
  </html>
`;

module.exports = html;
