<template>
  <div id="app">
    <app-navbar />
    <router-view />

    <!-- button to show cart -->
    <div v-if="$route.path !== '/checkout'">
      <button
        @click="drawer = true"
        class="fixed bottom-6 p-4 flex bg-black text-white right-4 rounded-full"
      >
        <svg
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>

      <el-drawer
        title="My Cart"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
        size="35%"
      >
        <Cart />
      </el-drawer>
    </div>
  </div>
</template>

<script>
import Navbar from './components/ui/Navbar';
import Cart from './views/public/Cart.vue';

export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl',
    };
  },
  components: {
    AppNavbar: Navbar,
    Cart,
  },
  mounted() {
    this.$currentRouteName();
  },
  methods: {
    handleClose(done) {
      done();
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap');

html,
body {
  font-family: 'Mulish', sans-serif;
}

#app {
  font-family: 'Mulish', sans-serif;
}

.bg-blue-dark {
  background-color: #1e293b;
}

.border-red {
  border-style: solid;
  border-width: 1px;
  border-color: red;
}

.gray {
  color: #868e96;
}

.el-form--label-top .el-form-item__label {
  padding: 0 !important;
}
</style>
