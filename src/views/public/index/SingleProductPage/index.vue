<template>
  <div class="flex overflow-hidden w-full" style="height:88vh">
    <!-- Loader -->
    <Loader v-if="loading" loadingText="Getting Product Information..." />

    <!-- Shows pRODUCT iMAGE -->
    <div class="flex w-full" v-else>
      <div
        class="overflow-y-auto w-2/5 h-full p-10 flex flex-col"
        style="background:#f2f2f2;"
      >
        <h1 class="font-bold" style="font-size:20px">
          {{ product.product_name }}
        </h1>
        <p>₦{{ product.price }}</p>

        <img class="m-auto" :src="product.cover_image_url" />
      </div>

      <!-- shOWS PRODUCT description and other shit -->
      <div class="overflow-y-auto w-3/5 h-full p-10">
        <ColorChooser v-if="product.color" :colors="colors.split(',')" />
        <SizeChooser v-if="product.size" :sizes="sizes.split(',')" />

        <div>
          {{ product.description }}
        </div>

        <button
          :disabled="activateButton"
          @click="addToCartHandler(product)"
          class="bg-black text-white mt-8 px-8 py-4 rounded-md"
        >
          Add to cart
        </button>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ColorChooser from "./ColorChooser.vue";
import SizeChooser from "./SizeChooser.vue";
import Loader from "../../../../components/ui/Loader.vue";
import { createNamespacedHelpers } from "vuex";

const { mapMutations, mapGetters } = createNamespacedHelpers("cart");

export default {
  data() {
    return {
      loading: false,
      product: {},
      cart: [],
      localStorageCart: [],
      colors: "",
      sizes: "",
      // colorChosen: null,
      // sizeChosen: null,
    };
  },

  components: {
    ColorChooser,
    SizeChooser,
    Loader,
  },

  computed: {
    ...mapGetters(["getCart", "getColorChosen", "getSizeChosen"]),
    activateButton() {
      // if(response) return;
      return (
        (this.colors.split(",").length > 0 && !this.getColorChosen) ||
        (this.sizes.split(",").length > 0 && !this.getSizeChosen)
      );
    },
  },

  mounted() {
    this.fetchData();
    this.cart = this.$store.state.cart.products;
    this.localStorageCart = JSON.parse(localStorage.getItem("products")) || [];
  },

  methods: {
    ...mapMutations(["updateCart"]),

    async fetchData() {
      this.loading = true;
      const response = await axios.get(
        `https://sandbox.bookclubwithlove.org/api/product/${this.$route.params.id}`
      );
      this.loading = false;
      this.product = response.product;
      this.colors = response.product.color;
      this.sizes = response.product.size;
    },

    addToCartHandler(product) {
      const productAlreadyInCart = this.localStorageCart.filter((sc) => {
        sc.id === product.id;
      });

      let productData = {
        ...product,
        colorChosen: this.getColorChosen,
        sizeChosen: this.getSizeChosen,
        quantity: 1,
      };
      let cartDataToUse = this.localStorageCart;

      if (productAlreadyInCart.length > 0) {
        productData = {
          ...product,
          colorChosen: this.getColorChosen,
          sizeChosen: this.getSizeChosen,
          quantity: productAlreadyInCart[0].quantity + 1,
        };

        cartDataToUse = this.localStorageCart.filter((sc) => {
          sc.id !== product.id;
        });
      }

      const allProducts = [...cartDataToUse, productData];
      localStorage.setItem("products", JSON.stringify(allProducts));
      this.$message({
        message: "Added to Cart",
        type: "success",
      });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  },
};
</script>

<style>
button:disabled {
  opacity: 0.4;
}
</style>
