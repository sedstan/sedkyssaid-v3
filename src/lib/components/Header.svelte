<script>
  import HomeIcon from "./HomeIcon.svelte";
  import HomeLogo from "./HomeLogo.svelte";
</script>

<header>
  <nav class="mobile-nav">
    <ul class="nav-items">
      <li><a href="#home" class="nav-link"><HomeIcon /></a></li>
      <li><a href="#services" class="nav-link">Services</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </nav>

  <nav class="desktop-nav">
    <ul class="nav-items">
      <li><a href="#home" class="nav-link"><HomeLogo /></a></li>
      <li><a href="#services" class="nav-link">Services</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </nav>
</header>
