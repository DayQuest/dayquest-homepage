<template>
  <div class="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
    <div
        class="absolute right-1/2 lg:right-1/3 xl:right-1/4 -translate-y-1/3 flex-col w-72 gap-20 flex pointer-events-none"
        @scroll="handleScroll1"
        :style="{ transform: `rotate(30deg) translateY(${mockupPosition1}px)` }"
    >
        <div class="relative">
          <PhoneMockup imageSrc="./src/assets/screenshots/Screenshot_20250105_155021.png"/>

        </div>
        <div class="relative">
          <PhoneMockup imageSrc="./src/assets/screenshots/Screenshot_20250105_154858.png"/>

        </div>
        <div class="relative">
          <PhoneMockup imageSrc="./src/assets/screenshots/Screenshot_20250105_155308.png"/>
        </div>
    </div>
    <div
        class="absolute top-1/6 right-0 xl:right-20 -translate-y-1/4 flex-col w-72 gap-20 flex pointer-events-none"
        @scroll="handleScroll2"
        :style="{ transform: `rotate(30deg) translateY(${mockupPosition2}px)` }"
    >
      <div class="relative">
        <PhoneMockup imageSrc="./src/assets/screenshots/Screenshot_20250105_155357.png"/>
      </div>
      <div class="relative">
        <PhoneMockup imageSrc="./src/assets/screenshots/Screenshot_20250105_155338.png"/>
      </div>
      <div class="relative">
        <PhoneMockup imageSrc="./src/assets/screenshots/Screenshot_20250105_154858.png"/>
      </div>
    </div>

    <NavbarComponent />

    <div class="max-w-7xl ml-20 md:ml-auto mx-auto px-4 pt-72 pb-32 relative">
      <div class="max-w-2xl">
        <h1 class="text-white text-6xl font-bold leading-tight">
          A new <span class="text-indigo-400">Quest</span>,
          <br />
          every day!
        </h1>
        <p class="text-gray-400 mt-4 text-lg">Soon for Android and iOS</p>
        <div class="flex gap-4 mt-8">
          <button class="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Join the Beta!
          </button>
          <button class="text-white hover:text-gray-300 px-6 py-2">
            Join our Discord!
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PhoneMockup from "@/components/modules/PhoneMockup.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "LandingPage",
  components: {
    PhoneMockup,
    NavbarComponent,
  },
  data() {
    return {
      mockupPosition1: -550,
      mockupPosition2: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll1);
    window.addEventListener("scroll", this.handleScroll2);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll1);
    window.removeEventListener("scroll", this.handleScroll2);
  },
  methods: {
    handleScroll1() {
      const scrollPosition = window.scrollY;
      this.mockupPosition1 = scrollPosition * -0.3 + -550;
    },
    handleScroll2() {
      const scrollPosition = window.scrollY;
      this.mockupPosition2 = scrollPosition * 0.6;
    },
  },
};
</script>
