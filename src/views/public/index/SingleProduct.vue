<template>
  <router-link
    :to="'/' + product.slug"
    style="background:#f2f2f2; height:300px"
    class="pt-6 pb-4 px-4 font-14 flex flex-col cursor-pointer"
  >
    <!-- Image area -->
    <div class="flex">
      <img
        class="m-auto"
        style="max-height:200px"
        :src="product.cover_image_url"
      />
    </div>

    <!-- content area -->
    <div class="mt-auto flex">
      <h2>{{ product.product_name }}</h2>
      <p class="font-bold mb-0 ml-auto">₦{{ product.price }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style></style>
