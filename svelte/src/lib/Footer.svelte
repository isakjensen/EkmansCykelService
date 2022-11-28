<script>
    import LogoWhite from '/images/LogoWhite.png'
</script>

<div class="w-full flex justify-between px-12 2xl:px-56 bg-theme-purple">
    <section class="gap-8 my-auto hidden xl:flex">
        <img src={LogoWhite} alt="" class="justify-start hidden lg:block w-24">
        <h2 class="my-auto text-4xl font-medium text-purple-300">Ekmans Cykel & Service</h2>
    </section>
    <section class="w-full xl:w-auto">
        <div class="grid grid-flow-row py-6 mt-auto sm:grid-cols-2 md:grid-cols-3 gap-0 md:gap-4 lg:gap-12">
            <div class="flex flex-col flex-grow gap-6 py-8 2xl:mx-auto">
                <div class="text-xl text-white font-medium">Kontakt</div>
                <div class="text-lg text-purple-300">
                    <ul class="list-none">
                        <li>Skarpskyttevägen 2G</li>
                        <li class="pb-3">226 42 Lund</li>
                        <li>046-13 67 11</li>
                        <li>info@ekmanscykel.se</li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col flex-grow gap-6 py-8 2xl:mx-auto">
                <div class="text-xl text-white font-medium">Följ oss</div>
                <div class="text-lg text-purple-300">
                    <ul class="list-none md:list-disc li-color-gray list-inside text-purple-300 font-medium">
                        <li class="pb-2 hover:text-sky-500"><a href="">Facebook</a></li>
                        <li class="pb-2 hover:text-sky-500"><a href="">Instagram</a></li>
                        <li class="pb-2 hover:text-sky-500"><a href="">Twitter</a></li>
                        <li class="pb-2 hover:text-sky-500"><a href="">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col flex-grow gap-6 py-8 2xl:mx-auto">
                <div class="text-xl text-white font-medium">Öppettider</div>
                <div class="text-lg text-purple-300">
                    <ul class="list-none md:list-disc li-color-gray list-inside font-medium">
                        <li class="pb-2">Måndag till Fredag</li>
                        <li class="pb-2">09:00 till 18:00</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</div>