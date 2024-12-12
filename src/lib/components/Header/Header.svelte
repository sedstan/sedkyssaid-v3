<script lang="ts">
  import HomeIcon from "../Header/HomeIcon.svelte";
  import HomeLogo from "../Header/HomeLogo.svelte";

  
</script>

<header>
  <nav class="mobile-nav">
    <ul class="nav-items">
      <li><a href="/" class="nav-link"><HomeIcon /></a></li>
      <li><a href="#projects" class="nav-link">Projects</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#timeline" class="nav-link">Timeline</a></li>
      <li><a href="#certificates" class="nav-link">Certificates</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </nav>

  <nav class="desktop-nav">
    <ul class="nav-items">
      <li>
        <a href="/" class="nav-link"><HomeLogo /></a>
      </li>
      <li><a href="#projects" class="nav-link">Projects</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#timeline" class="nav-link">Timeline</a></li>
      <li><a href="#certificates" class="nav-link">Certificates</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </nav>
</header>
