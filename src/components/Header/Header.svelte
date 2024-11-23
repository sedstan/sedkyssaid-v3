<script lang="ts" module>
  import logo from "../../lib/assets/S-3_logo.svg";
  // Show header with mobile nav.
  // If if md screen size, then show header with mboile nav and hide desktop nav
  // The image needs to render large logo. 
  
  // header needs to be sticky

</script>

<header id="header" class="sticky bottom-0 lg:flex">
  <img src={logo} alt="A logo" class="h-auto max-w-16 md:max-w-22 lg:max-w-32" />
  <nav id="desktop" class="hidden">Desktop Nav</nav>
  <nav id="mobile">Mobile Nav</nav>
</header>
