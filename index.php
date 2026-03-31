<?php
$page_title = 'KamiKiCy SEED';
$page_description = "'KamiKiCy SEED' -- A individual WebP personalized by Cyrus CHUI KA CHUN";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Cyrus CHUI KA CHUN">
  <meta name="description" content="<?php echo htmlspecialchars($page_description); ?>">
  <title><?php echo htmlspecialchars($page_title); ?></title>

  <link rel="stylesheet" href="/styles/main.css">
  <script src="/scripts/menu.js" defer></script>
</head>

<body>
  <header class="site-header">
    <div class="brand">
      <img
        id="site-logo"
        src="/fav.png"
        alt="KamiKiCy SEED 🌱"
        width="100"
        height="100">
      <span id="site-title">KamiKiCy SEED</span>
    </div>

    <!-- Toggle button -->
    <button
      class="menu-toggle"
      aria-label="Toggle navigation"
      aria-expanded="false"
      aria-controls="top-nav">
      🟰 Menu
    </button>

    <!-- Navigation -->
    <nav id="top-nav" class="nav" aria-label="top">
      <a href="/">Home</a>
    </nav>
  </header>

  <main class="container">
    <h1><?php echo htmlspecialchars($page_title); ?></h1>

    <p>
      This is the SEED.
    </p>
  </main>

  <footer>
    <p>&copy; <?php echo date('Y'); ?> KamiKiCy SEED</p>
  </footer>
</body>
</html>
