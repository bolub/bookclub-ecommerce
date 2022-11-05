<template>
  <div class="home relative">
    <div class="w-full">
      <!-- Contains filters -->
    
      <Loader v-if="loading" loadingText="Getting Products..." />

      <!-- contains content -->
      <div v-else class="px-10 pt-10 pb-40">
         <div class="my-8 md:w-7/12 w-full mx-auto ">
            <input type="search" v-model="search" placeholder="search for product by name" class="rounded-sm py-3 px-6 text-medium focus:outline-none focus:border-sky-blue border border-gray w-full">
          </div>
        <div class="grid grid-cols-3 gap-4">
          <SingleProduct
            v-for="product in productList"
            :key="product.name"
            :product="product"
          />
        </div>
        <div v-show="productList.length === 0">
          No Product Found.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SingleProduct from './SingleProduct.vue';
import Loader from '../../../components/ui/Loader.vue';
export default {
  data() {
    return {
      loading: false,
      search:'',
      post: null,
      error: null,
      categories: [
        'Electronics',
        'Joggers',
        'Sneakers',
        'Jewelries',
        'Computer',
      ],
      trends: ['Electronics', 'Joggers', 'Sneakers', 'Jewelries', 'Computer'],
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
  computed:{
    productList() {
      if (this.search) {
        return this.products.filter((item) => {
          if(item.product_name.toLowerCase().includes(this.search.toLowerCase())) return item;
        })
      } else {
        return this.products;
      }
    }
  },
  methods: {
    async fetchData() {
      this.loading = true;
      const response = await axios.get(
        'https://bookclubwithlove.herokuapp.com/api/products'
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
