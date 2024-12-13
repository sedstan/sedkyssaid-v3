<script lang="ts">
  import HomeIcon from "../MobileHeaderIcons/HomeIcon.svelte";
  import HomeLogo from "./HomeLogo.svelte";
  import ProjectsIcon from "../MobileHeaderIcons/ProjectsIcon.svelte";
  import AboutIcon from "../MobileHeaderIcons/AboutIcon.svelte";
  import TimelineIcon from "../MobileHeaderIcons/TimelineIcon.svelte";
  import CertificateIcon from "../MobileHeaderIcons/CertificateIcon.svelte";
</script>

<header>
  <nav class="mobile-nav">
    <ul class="nav-items">
      <li>
        <a href="#projects" class="nav-link flex flex-col items-center"
          ><ProjectsIcon label="Projects" /></a
        >
      </li>
      <li>
        <a href="#about" class="nav-link flex flex-col items-center"
          ><AboutIcon label="About" /></a
        >
      </li>
      <li>
        <a href="/" class="nav-link flex flex-col items-center"
          ><HomeIcon label="Home" /></a
        >
      </li>
      <li>
        <a href="#timeline" class="nav-link  flex flex-col items-center"
          ><TimelineIcon label="Timeline" /></a
        >
      </li>
      <li>
        <a href="#certificates" class="nav-link  flex flex-col items-center"
          ><CertificateIcon label="Certificates" /></a
        >
      </li>
      <!-- <li><a href="#contact" class="nav-link">Contact</a></li> -->
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
      <!-- <li><a href="#contact" class="nav-link">Contact</a></li> -->
    </ul>
  </nav>
</header>
