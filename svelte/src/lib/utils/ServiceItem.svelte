<script lang="ts">
  export let title: string;
  export let body: string;
</script>

<div class="w-full lg:w-1/3">
  <div class="py-8 p-8 2xl:text-center">
    <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">{title}</h1>
    <p class="mx-auto text-lg font-medium leading-relaxed text-gray-700">{body}</p>
    <!-- <a href="#" class="inline-flex items-center text-lg mt-4 font-medium text-purple-800 hover:text-sky-500 cursor-pointer lg:mb-0" title="read more">Läs mer</a> -->
  </div>
</div>