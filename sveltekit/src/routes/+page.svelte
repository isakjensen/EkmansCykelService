<script lang="ts">
    import ServiceItem from '../lib/components/utils/ServiceItem.svelte'
</script>

<svelte:head>
    <title>Ekmans Cykel - Hem</title>
    <meta name="description" content="Välkommen till Ekmans Cykel i Lund, vi erbjuder cyklar och reperation tills nästa dag. Sväng förbi oss på Skarpskyttevägen 2G, Lund" />
</svelte:head>

<div class="flex flex-col gap-12 flex-grow text-sm md:text-md px-2 md:px-8 lg:px-16 xl:px-36 2xl:px-52 py-28 lg:py-24">
    <!-- Välkommen -->
    <div class="container flex flex-col items-center px-8 mx-auto">
        <div class="flex flex-col w-full mb-12 lg:text-center">
          <div class="inline-flex items-center justify-center flex-shrink-0 text-4xl mx-auto mb-8 text-gray-700 bg-blueGray-100 rounded-full">
            <i class="invisible md:visible fad fa-car-bus"></i>
          </div>
          <h1 class="md:mx-auto mb-8 text-3xl md:text-4xl font-semibold leading-none tracking-normal text-black lg:w-1/2 title-font">Välkommen till <span class="text-purple-800">Ekmans Cykel & Service</span></h1>
          <p class="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-4/6">Vi bedriver en cykelverkstad på <span class="font-bold">Norra Fäladen, Lund</span> där vi reparerar och säljer cyklar. När du köper en cykel så får du gratis reperation framöver. Vi har <span class="font-bold">30 års erfarenhet</span> och arbetar dagligen i Sveriges cykelvänligaste stad med reparation och försäljning av cyklar. Vi har öppet <span class="font-bold">Måndag till Fredag</span>, <span class="font-bold">08.00 till 18.00</span>!</p>
          <a class="md:mx-auto mt-8 text-2xl text-purple-800 hover:text-theme-purple cursor-pointer" href="/hitta-hit">Hitta oss!</a>
        </div>
    </div>
    <!-- Tjänster -->
    <div class="container flex flex-col items-center lg:py-16 mx-auto" id="tjanster">
        <div class="container items-center mx-auto">
            <div class="flex flex-wrap justify-center">
                <ServiceItem title={"Vad vi erbjuder"} body={"Vi erbjuder reparation och försäljning av cyklar i norra Lund inom ett par dagar. Kom och lämna din cykel för reparation så tar vi hand om den och ser till att den är redo för användning dagen efter!"}/>

                <ServiceItem title={"Våran expertis"} body={"Under 30 år har vi bedrivit reparation och försäljning av cyklar i norra Lund, till dem bästa priserna och den kortaste leveranstiden. Lämna in din cykel idag och få tillbaka den samma eller dagen därpå!"}/>

                <ServiceItem title={"Studentrabatt"} body={"Är du student i Lund och behöver reparation på din cykel? Då erbjuder vi 10% rabatt på alla reparationer över 200kr - så glöm inte ditt studentleg!"}/>
            </div>
        </div>
    </div>
</div>