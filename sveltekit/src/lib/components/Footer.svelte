<script>
    import LogoWhite from '$lib/images/LogoWhite.png'
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
                        <li class="pb-2 hover:text-white"><a href={"tel:+46136711"}>046-13 67 11</a></li>
                        <li class="pb-2 hover:text-white"><a href={"mailto:info@ekmanscykel.se"}>info@ekmanscykel.se</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col flex-grow gap-6 py-8 2xl:mx-auto">
                <div class="text-xl text-white font-medium">Följ oss</div>
                <div class="text-lg text-purple-300">
                    <ul class="list-none md:list-disc li-color-gray list-inside text-purple-300 font-medium">
                        <li class="pb-2 hover:text-white"><a href="https://www.facebook.com/profile.php?id=100057412151965" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li class="pb-2 hover:text-white"><a href="https://www.eniro.se/ekmans+cykel+%26+service+lund/13183954/firma" target="_blank" rel="noreferrer">Eniro</a></li>
                        <li class="pb-2 hover:text-white"><a href="https://www.google.com/search?q=ekmans+cykel+google&rlz=1C1BYYL_svSE981SE981&sxsrf=ALiCzsZrKVZsS0p6YWDlcUO9CH02UkxadQ%3A1669718947107&ei=o-OFY8uQBqiJxc8P4rmUuAQ&ved=0ahUKEwiL7t3lm9P7AhWoRPEDHeIcBUcQ4dUDCA8&uact=5&oq=ekmans+cykel+google&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAE6CAgAEKIEELADOgYIABAWEB46BQgAEIYDOgQIIRAVOgcIIRCgARAKSgQIQRgBSgQIRhgAUOcFWIIKYMUKaAJwAHgAgAFjiAG8A5IBATaYAQCgAQHIAQLAAQE&sclient=gws-wiz-serp#lrd=0x465396320f7b976d:0x998f1fcf29b2e65d,1,,," target="_blank" rel="noreferrer">Recensioner</a></li>
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