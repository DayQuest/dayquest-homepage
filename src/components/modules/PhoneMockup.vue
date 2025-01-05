<template>
  <div class="z-20 right-0 top-0 overflow-hidden">
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <img
            :src="imageSrc"
            alt=""
            class="object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneMockup",
  props: {
    imageSrc: {
      type: String,
      required: true,
    }
  },
};
</script>


