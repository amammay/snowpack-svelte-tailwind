<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script lang="ts">
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
</script>

<div class="bg-gradient-to-br from-white to-gray-300">


  <!--  left circle-->
  <div class="absolute top-0 left-0 transform translate-x-4 translate-y-4">
    <div class="absolute bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full opacity-50"></div>
    <div
      class="absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full opacity-50"></div>
    <div class="absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full opacity-50"></div>
  </div>

  <!--  right circle-->

  <div class="hidden lg:block absolute top-0 right-0 mr-48 transform -translate-x-64 translate-y-64">
    <div class="absolute bg-gradient-to-br from-teal-100 to-teal-200 w-64 h-64 rounded-full opacity-50"></div>
    <div
      class="absolute ml-10 mt-10 bg-gradient-to-br from-purple-100 to-purple-200 w-64 h-64 rounded-full opacity-50"></div>
    <div class="absolute ml-24 bg-gradient-to-br from-red-100 to-red-200 w-64 h-64 rounded-full opacity-50"></div>
  </div>


  <div class="relative">
    <Header />
    <Hero />
  </div>
</div>
