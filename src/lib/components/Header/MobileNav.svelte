<script lang="ts">
  import HomeIcon from "../MobileHeaderIcons/HomeIcon.svelte";
  import ProjectsIcon from "../MobileHeaderIcons/ProjectsIcon.svelte";
  import AboutIcon from "../MobileHeaderIcons/AboutIcon.svelte";
  import TimelineIcon from "../MobileHeaderIcons/TimelineIcon.svelte";
  import CertificateIcon from "../MobileHeaderIcons/CertificateIcon.svelte";
  import { onMount } from "svelte";
  import { fade, scale } from "svelte/transition";

  interface NavItem {
    id: string;
    label: string;
    href: string;
    icon: any;
  }

  const navItems: NavItem[] = [
    { id: "1", label: "Projects", href: "#projects", icon: ProjectsIcon },
    { id: "2", label: "About", href: "#about", icon: AboutIcon },
    { id: "3", label: "Home", href: "/", icon: HomeIcon },
    { id: "4", label: "Timeline", href: "#timeline", icon: TimelineIcon },
    {
      id: "5",
      label: "Certificates",
      href: "#certificates",
      icon: CertificateIcon,
    },
  ];

  let visibleItems: NavItem[] = [];
  let hiddenItems: NavItem[] = [];
  let isModalOpen = false;
  let activeLink: string = ""; // Track active link

  let closeButton: HTMLButtonElement;
  let modalTrigger: HTMLButtonElement;

  const updateNavItems = () => {
    if (window.matchMedia("(max-width: 640px)").matches) {
      visibleItems = navItems.slice(0, 3);
      hiddenItems = navItems.slice(3);
    } else {
      visibleItems = navItems;
      hiddenItems = [];
    }
  };

  const setActiveLink = (href: string) => {
    activeLink = href;
    localStorage.setItem("activeLink", href);
  };

  const toggleModal = () => {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
      closeButton?.focus();
    } else {
      modalTrigger?.focus();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") toggleModal();
  };

  const navigateAndCloseModal = () => {
    isModalOpen = false;
    modalTrigger?.focus(); // Return focus to trigger button after navigation
  };

  onMount(() => {
    const savedLink = localStorage.getItem("activeLink");
    if (savedLink) {
      activeLink = savedLink;
    }

    window.addEventListener("resize", updateNavItems);
    document.addEventListener("keydown", handleEscapeKey); // Global listener for Escape key
    updateNavItems();

    return () => {
      window.removeEventListener("resize", updateNavItems);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  });
</script>

<nav class="mobile-nav">
  <ul class="nav-items">
    {#each visibleItems as item (item.id)}
      <li in:fly={{ x: -50, duration: 300 }}>
        <a
          href={item.href}
          class="nav-link flex flex-col items-center"
          aria-current={activeLink === item.href ? "page" : undefined}
          on:click={() => setActiveLink(item.href)}
        >
          <svelte:component
            this={item.icon}
            fill={activeLink === item.href ? "#1a1a1a" : "none"}
            class={`icon ${activeLink === item.href ? "active-icon" : ""}`}
            on:click={() => setActiveLink(item.href)}
          />
          <span
            class={activeLink === item.href
              ? "text-dark"
              : "text-neutral-light"}
          >
            {item.label}
          </span>
        </a>
      </li>
    {/each}

    <!-- Modal Trigger -->
    {#if hiddenItems.length > 0}
      <li>
        <button
          bind:this={modalTrigger}
          type="button"
          on:click={toggleModal}
          class="nav-link flex flex-col items-center"
        >
          <span>More</span>
        </button>
      </li>
    {/if}
  </ul>
</nav>

<!-- Modal -->
{#if isModalOpen}
  <div
    class="modal-backdrop"
    role="presentation"
    aria-hidden="true"
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 300 }}
  >
    <section
      class="modal"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      data-visible={isModalOpen}
      in:scale={{ duration: 300, start: 0.95 }}
      out:scale={{ duration: 300 }}
    >
      <!-- Close Button -->
      <button
        type="button"
        bind:this={closeButton}
        class="modal-close"
        aria-label="Close modal"
        on:click={toggleModal}
      >
        &times;
      </button>

      <!-- Modal Content -->
      <h2 id="modal-title" class="sr-only">More Navigation Options</h2>
      <p id="modal-description" class="sr-only">
        Use the links below to navigate to additional sections.
      </p>
      <ul class="modal-items">
        {#each hiddenItems as item (item.id)}
          <li class="modal-item flex flex-col items-center">
            <a
              href={item.href}
              class="modal-link flex flex-col items-center"
              aria-current={activeLink === item.href ? "page" : undefined}
              on:click={() => {
                setActiveLink(item.href);
                toggleModal();
              }}
            >
              <svelte:component
                this={item.icon}
                fill={activeLink === item.href ? "#1a1a1a" : "none"}
                class={`icon ${activeLink === item.href ? "active-icon" : ""}`}
                on:click={() => setActiveLink(item.href)}
              />
              <span
                class={activeLink === item.href
                  ? "text-dark"
                  : "text-neutral-light"}
              >
                {item.label}
              </span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  </div>
{/if}

<style>
  .text-dark {
    color: #1a1a1a;
  }
  .modal-backdrop {
    @apply fixed inset-0 flex items-center justify-center bg-black bg-opacity-50;
  }
  .modal {
    @apply relative w-full max-w-sm scale-95 transform rounded-lg bg-primary p-6 opacity-0 shadow-lg transition-transform;
  }
  .modal[data-visible="true"] {
    @apply scale-100 opacity-100;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }
  .modal-close {
    @apply absolute right-2 top-2 text-2xl font-bold text-gray-500 hover:text-black;
    background: none;
    border: none;
    cursor: pointer;
  }
  .modal-items {
    @apply flex flex-col gap-4;
  }
  .modal-item {
    @apply flex flex-col items-center gap-2;
  }
  .modal-link {
    @apply flex flex-col items-center text-neutral-light hover:text-highlight focus:ring-2 focus:ring-accent;
  }
  .modal-link:focus,
  .modal-link:active {
    border-radius: 0.5rem;
    transform: scale(1.05);
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
    @apply scale-105 transform rounded-lg bg-[#f0f4f8] transition-transform;
  }
</style>
