<template>
  <div class="mb-5">
    <p class="uppercase mb-2" style="font-size:14px">Size</p>

    <div class="flex">
      <!-- All colors -->

      <div
        class="w-12 h-12 rounded-full mr-2  flex cursor-pointer"
        :style="
          sizeChosen === size
            ? 'border: 2px solid black'
            : 'border: 2px solid #f2f2f2'
        "
        v-for="size in sizes"
        :key="size"
        @click="updateSize(size)"
      >
        <span class="m-auto">
          {{ size }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("cart");

export default {
  props: {
    sizes: { type: Array, default: [] },
  },

  data() {
    return {
      sizeChosen: "",
    };
  },

  methods: {
    ...mapMutations(["updateSizeChosen"]),

    updateSize(value) {
      this.sizeChosen = value;
      this.updateSizeChosen(value);
    },
  },
};
</script>

<style></style>
