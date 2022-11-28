<script lang="ts">
    import MapImage from '/images/Map.png'
    import MapMobileImage from '/images/MapMobile.png'
</script>

<div class="flex flex-col flex-grow text-sm md:text-md px-2 md:px-8 lg:px-24 xl:px-64 2xl:px-96 lg:py-24">
    <!-- Välkommen -->
    <div class="container flex flex-col items-center px-5 mx-auto">
        <div class="flex flex-col w-full mb-12 text-left md:text-center">
          <div class="inline-flex items-center justify-center flex-shrink-0 text-4xl mx-auto mb-8 text-gray-700 bg-blueGray-100 rounded-full">
            <i class="invisible md:visible fad fa-car-bus"></i>
          </div>
          <h1 class="md:mx-auto mb-8 text-2xl md:text-4xl font-semibold leading-none tracking-normal text-black lg:w-1/2 title-font">Så här hittar du <span class="text-purple-800">till våran verkstad!</span></h1>
          <p class="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-4/6">Vi är stationerade på <span class="font-bold">Norra Fäladen</span> i norra Lund. I en stor och praktisk källare där vi enkelt kan erbjuda våra kunder Lunds <span class="font-bold">bästa priser</span> och <span class="font-bold">kortaste leveranstider</span>. Adressen lyder <span class="font-bold">Skarpskyttevägen 2G</span> och du tar dig hit lättast <span class="font-bold">genom bostadsområdet</span> från Skarpskyttevägen eller från Svenshögsvägen vid utegymmet, som ligger ovanför oss.</p>
    </div>
    </div>
    <!-- Tjänster -->
    <div class="container flex flex-col items-center px-4 mx-auto" id="tjanster">
        <!-- <img src={MapImage} alt="" class="w-full rounded hidden xl:block">
        <img src={MapMobileImage} alt="" class="w-full rounded block xl:hidden"> -->
        <div class="mapouter"><div class="gmap_canvas"><iframe width="1080" height="676" id="gmap_canvas" src="https://maps.google.com/maps?q=Ekmans%20Cykel&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:676px;width:1080px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:676px;width:1080px;}</style></div></div>
    </div>
</div>