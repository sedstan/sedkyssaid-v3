<script lang="ts" module>
  import logo from "../../lib/assets/S-3_logo.svg";
  // If screen size greater than 768px, then show header and desktop nav
</script>

<header id="header" class="">
  <img src={logo} alt="A logo" class="h-auto sm:max-w-16 md:max-w-28 lg:max-w-36 xl:max-w-36" />
  <nav id="desktop" class="hidden">Desktop Nav</nav>
</header>
<nav id="mobile">Mobile Nav</nav>
