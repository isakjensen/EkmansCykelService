<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";

  import Navbar from './lib/Navbar.svelte'
  import Footer from './lib/Footer.svelte'
  import Home from './lib/Home.svelte'
  import Find from './lib/Find.svelte'
  import Contact from './lib/Contact.svelte'
</script>

<Router>
  <main>

    <!-- Nav -->
    <Navbar />

    <!-- Search Page -->
    <Route path="/">
      <Home />
    </Route>

    <!-- Hitta hit -->
    <Route path="/hitta-hit">
      <Find />
    </Route>

    <!-- Hitta hit -->
    <Route path="/kontakt">
      <Contact />
    </Route>

    <!-- Footer -->
    <Footer />
  </main>
</Router>