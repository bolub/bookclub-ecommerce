<template>
  <div class="home relative">
    <div class="w-full flex">
      <!-- Contains filters -->
    
      <Loader v-if="loading" loadingText="Getting Products..." />

      <!-- contains content -->
      <div v-else class="px-10 pt-10 pb-40">
        <div class="grid grid-cols-3 gap-4">
          <!-- Image component -->
          <SingleProduct
            v-for="product in products"
            :key="product.name"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleProduct from "./SingleProduct.vue";
import Loader from "../../../components/ui/Loader.vue";
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      categories: [
        "Electronics",
        "Joggers",
        "Sneakers",
        "Jewelries",
        "Computer",
      ],
      trends: ["Electronics", "Joggers", "Sneakers", "Jewelries", "Computer"],
      products: [],
    };
  },

  components: {
    SingleProduct,
    Loader,
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.loading = true;
      const response = await axios.get(
        "https://sandbox.bookclubwithlove.org/api/products"
      );
      this.loading = false;
      this.products = response.products.data;
    },
  },
};
</script>

<style scoped>
.border-gray {
  border-right: 1px solid #f2f2f2;
}

.font-14 {
  font-size: 14px;
}
</style>
