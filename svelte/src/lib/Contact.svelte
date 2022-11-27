<script lang="ts">
    import ContactItem from './utils/ContactItem.svelte'
</script>

<div class="flex flex-col flex-grow text-sm md:text-md px-2 md:px-8 lg:px-24 xl:px-64 2xl:px-96 pb-24">
    <!-- Välkommen -->
    <div class="container flex flex-col items-center px-5 mx-auto">
        <div class="flex flex-col w-full mb-12 text-left md:text-center">
          <div class="inline-flex items-center justify-center flex-shrink-0 text-4xl mx-auto mb-8 text-gray-700 bg-blueGray-100 rounded-full">
            <i class="invisible md:visible fad fa-car-bus"></i>
          </div>
          <h1 class="md:mx-auto mb-8 text-2xl md:text-4xl font-semibold leading-none tracking-normal text-black lg:w-1/2 title-font">Har du frågor? Kontakta oss så <span class="text-sky-600">hjälper vi dig!</span></h1>
          <p class="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-4/6">Har du frågor gällande reparation, köp eller service av cykel? Kontakta oss, här är våra kontaktuppgifter!</p>
          
        </div>
    </div>
    <!-- Tjänster -->
    <div class="container flex flex-col items-center md:py-8 lg:py-16 mx-auto" id="tjanster">
        <div class="container items-center px-4 mx-auto">
            <div class="flex flex-wrap justify-center">
                <ContactItem title={"Via telefon"} data={"046-13 67 11"} body={"Ring oss på detta nummer, vi svarar direkt under våra öppettider!"}/>
                <ContactItem title={"Via e-mail"} data={"info@ekmanscykel.se"} body={"Skicka iväg ett e-mail till oss, så återkommer vi till dig dagen därpå!"}/>
            </div>
        </div>
    </div>
</div>