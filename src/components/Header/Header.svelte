<script lang="ts" module>
  import logo from "../../lib/assets/S-3_logo.svg";
  // Show header with mobile nav.
  // If if md screen size, then show header with mboile nav and hide desktop nav
  
  // header needs to be sticky

</script>

<header id="header" class="bg-primary z-10 sticky bottom-0 w-full flex lg:z-0">
  <a href="/"><img src={logo} alt="A logo" class="max-w-16 md:max-w-22 lg:max-w-32"/></a>
  <nav id="desktop" class="hidden lg:block">Desktop Nav</nav>
  <nav id="mobile" class="lg:hidden">Mobile Nav</nav>
</header>
