<script setup>
import { ref, onMounted } from 'vue';
import HeroHeaderComponent from './components/pages/home/HeroHeader.vue';
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting;
      },
      { threshold: 0.5 }
  );

  const target = document.querySelector('#cumming-soon');
  if (target) {
    observer.observe(target);
  }
});
</script>

<template>
  <div class="h-[200vh]">
    <NavbarComponent />
    <HeroHeaderComponent />

    <div
        id="cumming-soon"
        :class="{'animate-fadeIn': isVisible}"
        class="mt-20 text-center text-xl font-bold opacity-0 transition-opacity duration-1000"
    >
      Coming Soon
    </div>

  </div>
<FooterComponent/>
</template>

<style scoped>
.animate-fadeIn {
  opacity: 1;
}
</style>
