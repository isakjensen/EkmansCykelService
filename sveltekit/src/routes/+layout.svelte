<script>
    import "../app.css";
    
    export const prerender = false;

    import Navbar from "../lib/components/Navbar.svelte";
    import Footer from "../lib/components/Footer.svelte";
</script>

<main>
    <Navbar />

    <slot />

    <Footer />
</main>
