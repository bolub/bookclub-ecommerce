<template>
  <div class="home relative">
    <div class="w-full flex">
      <!-- Contains filters -->
      <div class="w-1/5 p-10 sticky top-0" style="height:89vh">
        <!-- category area -->
        <div>
          <h2 class="font-bold mb-4">Category</h2>

          <!-- display list of all categories -->
          <div
            v-for="category in categories"
            :key="category"
            class="mb-4 font-14"
          >
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="ml-2" style="color:#868e96">{{
              category
            }}</label>
          </div>
        </div>

        <!-- trends area -->
        <div class="mt-8">
          <h2 class="font-bold mb-4">Trends</h2>

          <!-- display list of all trends -->
          <div v-for="trend in trends" :key="trend" class="mb-4 font-14">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="ml-2" style="color:#868e96">{{
              trend
            }}</label>
          </div>
        </div>
      </div>

      <Loader v-if="loading" loadingText="Getting Products..." />

      <!-- contains content -->
      <div v-else class="w-4/5 px-10 pt-10 pb-40">
        <div class="grid grid-cols-3 gap-4">
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
        "http://sandbox.bookclubwithlove.org/api/products"
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
