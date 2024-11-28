<script lang="ts">
  import DesktopHeader from "./lib/components/Headers/DesktopHeader.svelte";
  import MobileHeader from "./lib/components/Headers/MobileHeader.svelte";
</script>

<main>
  {#if window.innerWidth > 1024}
    <MobileHeader />
  {:else}
    <DesktopHeader />
  {/if}
  <section class="section">
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
  </section>
  <section class="section">
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
  </section>
  <section class="section">
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
    <p>This is a pragraph</p>
  </section>
  <section class="section">
    <footer>&copy; 2024</footer>
  </section>
</main>

<style>
</style>
