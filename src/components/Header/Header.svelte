<script lang="ts" module>
  import logo from "../../lib/assets/S-3_logo.svg";
  // Show header with mobile nav.
  // If if md screen size, then show header with mboile nav and hide desktop nav
  // When width >1024px, then remove sticky class, remove z-10, remove bottom-0. Add lg:z-0.
  const screenWidth = window.innerWidth;
  const headerId = document.getElementById('header');
  const headerElement = document.querySelector('header');

  screenWidth.addEventListener('resize', () => {
    const isResized = !isResized;
    updatedStyles();
  })

  
  
  // header needs to be sticky



    function updatedStyles() {
        throw new Error("Function not implemented.");
    }
</script>

<header id="header" class="bg-primary z-10 sticky bottom-0 w-full flex lg:z-0">
  <a href="/"><img src={logo} alt="A logo" class="max-w-16 md:max-w-22 lg:max-w-32"/></a>
  <nav id="desktop" class="hidden lg:block">Desktop Nav</nav>
  <nav id="mobile" class="lg:hidden">Mobile Nav</nav>
</header>
