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
  <div class="h-[105vh]">
    <NavbarComponent />
    <router-view></router-view>
  </div>
  <FooterComponent />
</template>

<style scoped>
.animate-fadeIn {
  opacity: 1;
}
</style>
