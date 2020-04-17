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
              <a href="/" class="header__link header__link--active">Home</a>
            </li>
            <li class="header__nav-item">
              <a href="/nature" class="header__link">Nature</a>
            </li>
            <li class="header__nav-item">
              <a href="/quotes" class="header__link">Quotes</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="container not-found">
       404 😭
    </div>
  </body>
</html>
`;

module.exports = html;
