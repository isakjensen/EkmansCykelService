<script lang="ts">
    import { Link } from "svelte-navigator";

    
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

    const updatePath = function(link: NavbarLink) {
        path = link.url
    }
</script>

<nav class="flex flex-row justify-between text-sm md:text-2xl px-2 md:px-8 lg:px-24 xl:px-64 2xl:px-96 p-12">
    <div class="flex justify-start">
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="13" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="17" cy="13" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 11L14.75 5.75H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 13H12.25M12.25 13L8.75 7.74997H10.5H7M12.25 13H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.75 18.25H19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    <div class="flex flex-row gap-0 md:gap-4 lg:gap-8 my-auto text-gray-600 font-medium">
        {#each paths as p}
            <Link class="nav-link {path === p.url ? 'activeLink' : ''}" to={p.url} on:click={() => updatePath(p)}>{p.title}</Link>
        {/each}
    </div>
</nav>