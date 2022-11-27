<script lang="ts">
    import { Link } from "svelte-navigator";
    
    interface NavbarLink {
        url: string,
        title: string,
    }
    
    let path: string = window.location.pathname
    let menuOpen: boolean = false
    
    let paths: NavbarLink[] = [
        { url: "/", title: "Hem" },
        { url: "/hitta-hit", title: "Hitta hit" },
        { url: "/kontakt", title: "Kontakta oss" },
    ]

    const updatePath = function(link: NavbarLink) {
        path = link.url
        menuOpen = false
    }

    const toggleMenu = function() {
        menuOpen = !menuOpen
    }
</script>

<nav>
    <!-- Desktop -->
    <section class="flex flex-row justify-between px-8 sm:px-12 md:px-20 lg:px-24 xl:px-64 2xl:px-96 p-12">
        <div class="justify-start">
            <svg class="hidden lg:block" width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="13" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="17" cy="13" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 11L14.75 5.75H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.5 13H12.25M12.25 13L8.75 7.74997H10.5H7M12.25 13H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.75 18.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="flex lg:hidden" width="46" height="46" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75H19.25"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 18.25H19.25"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12H19.25"/>
            </svg>
        </div>
        <div class="flex-row gap-4 md:gap-4 lg:gap-8 my-auto text-gray-600 font-medium text-lg md:text-2xl mx-auto md:mx-0 hidden lg:flex">
            {#each paths as p}
                <Link class="nav-link {path === p.url ? 'activeLink' : ''}" to={p.url} on:click={() => updatePath(p)}>{p.title}</Link>
            {/each}
        </div>
    </section>

    <!-- Mobile -->
    <section class="flex flex-col lg:hidden w-full h-full fixed top-0">
        <div class="flex flex-row gap-8 px-6 p-8 bg-sky-600">
            <svg class="text-blue-900" width="36" height="36" fill="none" viewBox="0 0 24 24" on:click={() => toggleMenu()} on:keydown={() => toggleMenu()}>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 5.75H19.25"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 18.25H19.25"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12H19.25"/>
            </svg>
            <h1 class="text-sky-200 text-2xl my-auto">Ekmans Cykel & Service</h1>
        </div>
        <div class="bg-white flex flex-grow flex-col pt-6 {menuOpen ? 'flex' : 'hidden'}">
            {#each paths as p}
                <Link class="nav-link-mobile {path === p.url ? 'activeLink' : ''}" to={p.url} on:click={() => updatePath(p)}>{p.title}</Link>
            {/each}
        </div>
    </section>
</nav>