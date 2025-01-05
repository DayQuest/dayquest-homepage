<template>
  <nav class="max-w-7xl mx-auto px-4 absolute py-6 flex justify-between items-center top-0 left-0 right-0 z-10">
    <div class="text-white text-2xl font-bold">
      <img src="@/assets/logo.svg" class="h-10" alt="Logo">
    </div>
    <div class="flex gap-8">
      <a href="#" class="text-white hover:text-gray-300">Home</a>
      <a href="#" class="text-white hover:text-gray-300">About</a>
      <a href="#" class="text-white hover:text-gray-300">Support</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>