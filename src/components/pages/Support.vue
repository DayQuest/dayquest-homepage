<template>
  <div class="min-h-screen bg-[#0A0A0A] text-white p-8 relative overflow-hidden">
    <!-- Linke mockup-phone Gruppe -->
    <div
      class="absolute right-1/2 lg:right-1/3 xl:right-1/4 -translate-y-1/3 flex-col w-72 gap-20 flex pointer-events-none"
      @scroll="handleScroll1"
      :style="{ transform: `rotate(30deg) translateY(${mockupPosition1}px)` }"
    >
      <div class="relative">
        <div class="z-20 right-0 top-0 overflow-hidden">
          <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
              <img
                src="@/assets/screenshots/Screenshot_20250105_155021.webp"
                alt=""
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="z-20 right-0 top-0 overflow-hidden">
          <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
              <img
                src="@/assets/screenshots/Screenshot_20250105_154858.webp"
                alt=""
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="z-20 right-0 top-0 overflow-hidden">
          <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
              <img
                src="@/assets/screenshots/Screenshot_20250105_155308.webp"
                alt=""
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Rechte mockup-phone Gruppe -->
    <div
      class="absolute top-1/6 right-0 xl:right-20 -translate-y-1/4 flex-col w-72 gap-20 flex pointer-events-none"
      @scroll="handleScroll2"
      :style="{ transform: `rotate(30deg) translateY(${mockupPosition2}px)` }"
    >
      <div class="relative">
        <div class="z-20 right-0 top-0 overflow-hidden">
          <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
              <img
                src="@/assets/screenshots/Screenshot_20250105_155357.webp"
                alt=""
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="z-20 right-0 top-0 overflow-hidden">
          <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
              <img
                src="@/assets/screenshots/Screenshot_20250105_155338.webp"
                alt=""
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="z-20 right-0 top-0 overflow-hidden">
          <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
              <img
                src="@/assets/screenshots/Screenshot_20250105_154858.webp"
                alt=""
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="max-w-7xl sm:ml-20 xl:ml-auto mx-auto px-4 pt-72 pb-32 relative">
      <div class="max-w-2xl">
        <h1 class="text-white text-6xl font-bold leading-tight">Support</h1>
        <p class="text-gray-400 mt-4 text-lg">
          If you need help, please let us know and write us using this ContactForm.
        </p>
      </div>
      <div class="flex gap-4 mt-8">
        <button @click="showDiscord = true; showContactForm = false" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Discord Support
        </button>
        <button @click="showContactForm = true; showDiscord = false" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
      <div v-if="showDiscord" class="mt-8">
        <iframe src="https://e.widgetbot.io/channels/1091370403794014258/1091370550833709239" allow="clipboard-write; fullscreen" height="500" width="1350"></iframe>
      </div>
      <div v-if="showContactForm" class="mt-8">
        <ContactForm />
      </div>
    </div>
    <FooterComponent class="mt-auto" />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "Support",
  components: {
    ContactForm,
    FooterComponent,
  },
  data() {
    return {
      mockupPosition1: -550,
      mockupPosition2: 0,
      showDiscord: false,
      showContactForm: false,
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
