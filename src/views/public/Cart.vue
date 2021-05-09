<template>
  <div class="px-6">
    <div v-for="product in cartInfo" :key="product.name" class="flex">
      <img :src="product.cover_image_url" class="w-20 h-20 my-auto" />

      <span class="my-auto ml-4">{{ product.product_name }}</span>
    </div>
    <!-- 
    {{ cartInfo }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartInfo: this.$store.state.cart.products || [],
    };
  },
};
</script>

<style></style>
