<template>
  <div class="px-6 ">
    <!-- if cart is empty -->
    <div
      v-if="cartInfo.length === 0"
      class="text-center  flex flex-col"
      style="height:80vh"
    >
      <p class="m-auto">Cart is currently empty</p>
    </div>

    <div class="overflow-y-auto flex flex-col" style="height:88vh" v-else>
      <div v-for="product in cartInfo" :key="product.name" class="flex mb-4">
        <img
          :src="product.cover_image_url"
          style="object-fit: cover"
          class="w-20 h-20 my-auto rounded"
        />

        <div class="my-auto ml-6 w-full">
          <div class="flex w-full">
            <span class="my-auto  font-bold">{{ product.product_name }}</span>

            <p class=" ml-auto">₦{{ product.quantity * product.price }}</p>
          </div>

          <div class="flex mt-2">
            <!-- increment and decrement -->
            <div class="flex">
              <button
                @click="decreaseProductQuantity(product)"
                class="my-auto"
                style="font-size:18px"
              >
                -
              </button>
              <span class="bg-black text-white px-2 mx-3 my-auto">
                {{ product.quantity }}
              </span>
              <button
                @click="increaseProductQuantity(product)"
                class="my-auto"
                style="font-size:18px"
              >
                +
              </button>
            </div>

            <!-- remove -->
            <button class="ml-auto" @click="removeProduct(product)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button
        class="bg-black mt-auto mb-5 w-full text-white mt-5 px-8 py-4 rounded-md"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartInfo: [],
    };
  },

  mounted() {
    this.cartInfo = JSON.parse(localStorage.getItem("products"));
  },

  methods: {
    increaseProductQuantity(product) {
      // copy cart
      let copyCartInfo = [...this.cartInfo];

      // remove selected product
      let filteredCartInfo = copyCartInfo.filter((cp) => {
        return cp.id !== product.id;
      });

      // increase quantity
      let newProduct = {
        ...product,
        quantity: product.quantity + 1,
      };

      // add new product to list
      const newProductList = [newProduct, ...filteredCartInfo];

      this.cartInfo = newProductList;
      localStorage.setItem("products", JSON.stringify(newProductList));
    },

    decreaseProductQuantity(product) {
      // copy cart
      let copyCartInfo = [...this.cartInfo];

      // remove selected product
      let filteredCartInfo = copyCartInfo.filter((cp) => {
        return cp.id !== product.id;
      });

      // increase quantity
      let newProduct = {
        ...product,
        quantity: product.quantity - 1,
      };

      // add new product to list
      const newProductList = [newProduct, ...filteredCartInfo];

      localStorage.setItem("products", JSON.stringify(newProductList));
      this.cartInfo = newProductList;
    },

    removeProduct(product) {
      // copy cart
      let copyCartInfo = [...this.cartInfo];

      // remove selected product
      let filteredCartInfo = copyCartInfo.filter((cp) => {
        return cp.id !== product.id;
      });

      localStorage.setItem("products", JSON.stringify(filteredCartInfo));
      this.cartInfo = filteredCartInfo;
    },
  },
};
</script>

<style></style>
