<script lang="ts">
  import src from "../../assets/certificate-icon.svg";

  let { label } = $props();
</script>

<img {src} alt="icon" class="h-6 w-6 text-neutral-light pb-1" />
{label}
