<script lang="ts">
    import { Link } from "svelte-navigator";
    import { menuOpen } from '../stores';

    import LogoWhite from '/images/LogoWhite.png'
    
    interface NavbarLink {
        url: string,
        title: string,
    }
    
    let path: string = window.location.pathname
    
    let paths: NavbarLink[] = [
        { url: "/", title: "Hem" },
        { url: "/hitta-hit", title: "Hitta hit" },
        { url: "/kontakt", title: "Kontakta oss" },
    ]

    export const updatePath = function(url: string) {
        path = url
        $menuOpen = false
        window.scrollTo(0, 0)
    }

    const toggleMenu = function() {
        $menuOpen = !$menuOpen
    }
</script>

<nav>
    <!-- Desktop -->
    <section class="flex-row justify-between px-8 sm:px-12 md:px-20 lg:px-24 xl:px-64 2xl:px-96 p-14 bg-theme-purple hidden lg:flex">
        <img src={LogoWhite} alt="" class="justify-start hidden lg:block w-24">
        <div class="flex-row gap-4 md:gap-4 lg:gap-8 my-auto text-white font-medium text-lg md:text-2xl mx-auto md:mx-0 hidden lg:flex">
            {#each paths as p}
                <Link class="nav-link {path === p.url ? 'activeLink' : ''}" to={p.url} on:click={() => updatePath(p.url)}>{p.title}</Link>
            {/each}
        </div>
    </section>

    <!-- Mobile -->
    <section class="flex flex-col lg:hidden w-full fixed top-0 {$menuOpen ? 'h-full' : ''}">
        <div class="flex flex-row gap-8 px-6 p-8 bg-theme-purple">
            <button on:click={() => toggleMenu()}>
                <svg class="text-purple-300" width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75H19.25"/>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 18.25H19.25"/>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12H19.25"/>
                </svg>
            </button>
            <h1 class="text-white text-2xl my-auto">Ekmans Cykel & Service</h1>
        </div>
        <div class="bg-white flex flex-grow flex-col pt-6 {$menuOpen ? 'right-full' : 'hidden'}">
            {#each paths as p}
                <Link class="nav-link-mobile {path === p.url ? 'activeLinkMobile' : ''}" to={p.url} on:click={() => updatePath(p.url)}>{p.title}</Link>
            {/each}
        </div>
    </section>
</nav>