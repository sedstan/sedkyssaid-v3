<script lang="ts">
  import HomeIcon from "../Header/HomeIcon.svelte";
  import HomeLogo from "../Header/HomeLogo.svelte";
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
      <li><a href="#home" class="nav-link nav-link-desktop"><HomeLogo /></a></li>
      <li><a href="#services" class="nav-link">Services</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </nav>
</header>
