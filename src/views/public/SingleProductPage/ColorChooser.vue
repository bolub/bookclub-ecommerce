<template>
  <div class="mb-5">
    <p class="uppercase mb-2" style="font-size:14px">Color</p>

    <div class="flex">
      <!-- All colors -->
      <div
        class="w-12 h-12 rounded-full mr-2 text-white flex cursor-pointer"
        v-for="color in colors"
        :key="color"
        :style="'background-color:' + color"
        @click="updateColor(color)"
      >
        <svg
          v-if="colorChosen === color"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 m-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("cart");

export default {
  props: {
    colors: { type: Array, default: [] },
  },

  data() {
    return {
      colorChosen: "",
    };
  },

  methods: {
    ...mapMutations(["updateColorChosen"]),

    updateColor(value) {
      this.colorChosen = value;
      this.updateColorChosen(value);
    },
  },
};
</script>

<style></style>
