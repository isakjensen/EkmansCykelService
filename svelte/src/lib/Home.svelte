<script lang="ts">
    import { Link } from "svelte-navigator";

    import ServiceItem from './utils/ServiceItem.svelte'
</script>

<div class="flex flex-col flex-grow text-sm md:text-md px-2 md:px-8 lg:px-24 xl:px-64 2xl:px-96 p-12 pb-24">
    <!-- Välkommen -->
    <div class="container flex flex-col items-center px-5 py-8 mx-auto">
        <div class="flex flex-col w-full mb-12 text-left md:text-center">
          <div class="inline-flex items-center justify-center flex-shrink-0 text-4xl mx-auto mb-8 text-gray-700 bg-blueGray-100 rounded-full">
            <i class="invisible md:visible fad fa-car-bus"></i>
          </div>
          <h1 class="md:mx-auto mb-8 text-2xl md:text-4xl font-semibold leading-none tracking-normal text-black lg:w-1/2 title-font">Välkommen till <span class="text-sky-600">Ekmans Cykel</span></h1>
          <p class="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-4/6">Vi bedriver en cykelverkstad på <span class="font-bold">Norra Fäladen</span> där vi reparerar och säljer cyklar. När du köper en cykel så får du gratis reperation framöver. Vi har <span class="font-bold">20 års erfarenhet</span> och vi lovar dig all hjälp med din cykel.</p>
          <Link class="md:mx-auto mt-8 text-xl text-sky-600 hover:text-sky-500 cursor-pointer" to="/hitta-hit" >Hitta oss!</Link>
        </div>
    </div>
    <!-- Tjänster -->
    <div class="container flex flex-col items-center md:py-8 lg:py-16 mx-auto" id="tjanster">
        <div class="container items-center px-4 mx-auto">
            <div class="flex flex-wrap justify-center">
                <ServiceItem title={"Vad vi erbjuder"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid ab nobis mollitia iure quod provident beatae, ut ullam exercitationem adipisci quis sint, impedit a."}/>

                <ServiceItem title={"Vi är snabbast i stan"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid ab nobis mollitia iure quod provident beatae, ut ullam exercitationem adipisci quis sint, impedit a."}/>

                <ServiceItem title={"Vår historia"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid ab nobis mollitia iure quod provident beatae, ut ullam exercitationem adipisci quis sint, impedit a."}/>
            </div>
        </div>
    </div>
</div>