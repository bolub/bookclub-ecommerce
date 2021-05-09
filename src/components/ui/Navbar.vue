<template>
  <div>
    <nav
      class=" lg:px-20 md:px-20 text-body-2 w-full px-6 py-1 flex justify-between items-center"
      :class="{
        'fixed shadow top-0 w-full z-50 bg-white': height > 35,
        'bg-blue-dark z-50 text-white': height < 35,
      }"
    >
      <div class="flex items-center lg:w-8/12 md:w-4/12">
        <div class="font mt-3 w-2/12">
          <a href="/" class="flex items-center pb-1">
            <img
              src="@/assets/logo.png"
              alt="logo"
              class="object-fit"
              width="80px"
            />
          </a>
        </div>
        <ul class="lg:flex hidden font flex-3 items-center ">
          <li class="">
            <a href="/shelves">Book shelves</a>
          </li>
          <li class="ml-5 relative parent">
            <p class="flex items-center cursor-pointer">
              Get Involved
              <i class="ri-arrow-down-s-line ml-2"></i>
            </p>

            <main
              class="absolute top-0 mt-5 p-4 -ml-20 bg-white text-dark shadow-md z-50 rounded-md dropdown"
            >
              <div class=" ml-3 mb-4">
                <p class="text-body-2 hover:text-warning">
                  <a href="/interactive-sessions">
                    Interactive sessions
                  </a>
                </p>
              </div>
              <div class="mb-4" style="width:210px">
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/services">
                        Become a Volunteer
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div style="width:210px">
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/contact">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </li>
          <li class="ml-5 relative parent">
            <p class="flex items-center cursor-pointer">
              About us
              <i class="ri-arrow-down-s-line ml-2"></i>
            </p>
            <main
              class="absolute top-0 mt-5 p-4 -ml-20 bg-white text-dark shadow-md z-50 rounded-md dropdown"
            >
              <div class="mb-4" style="width:210px">
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/about#who-we-are">
                        Who we are
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-4" style="width:210px">
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/about#what-we-do">
                        What we do
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-4" style="width:210px">
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/about#vision">
                        Our Mission
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-4" style="width:210px">
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/about#vision">
                        Our vision
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </li>
          <li class="ml-5 relative parent">
            <p class="flex items-center cursor-pointer">
              Services
              <i class="ri-arrow-down-s-line ml-2"></i>
            </p>

            <main
              class="absolute top-0 mt-5 p-4 -ml-20 bg-white text-dark shadow-md z-50 rounded-md dropdown"
            >
              <div class="mr-6" style="width:210px">
                <div class="flex items-start mb-4">
                  <div class=" ml-3 hover:text-warning">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/services#library">
                        Library services
                      </a>
                    </p>
                  </div>
                </div>
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/services#bibliophile">
                        Bibliotherapy
                      </a>
                    </p>
                  </div>
                </div>
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/services#session">
                        Bookclub sessions
                      </a>
                    </p>
                  </div>
                </div>

                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/shop">
                        Merchandize
                      </a>
                    </p>
                  </div>
                </div>
                <div class="flex items-start mb-4">
                  <div class=" ml-3">
                    <p class="text-body-2 hover:text-warning">
                      <a href="/supporters">
                        Our Supporters
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </li>
          <li class="ml-5 ">
            <a href="/donation">Donation</a>
          </li>
        </ul>
      </div>
      <ul class="lg:flex md:flex hidden font flex-3 items-center">
        <li class="lg:ml-10 ml-3">
          <a
            href="/register"
            class="bg-gray-300 py-3 w-32 flex items-center justify-center  rounded"
            >Get started</a
          >
        </li>
        <li class="ml-8">
          <a
            href="/live-stream"
            class="text-red-dark flex items-center border border-red py-2 px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Live stream
          </a>
        </li>
      </ul>
      <div class="lg:hidden md:hidden flex relative">
        <p class="cursor-pointer" @click="showNav = !showNav">
          <i class="ri-menu-line ri-2x" v-show="!showNav"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            v-show="showNav"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </p>

        <div
          :class="{ 'bg-white z-50': height < 35 }"
          class="bg-white rounded text-dark fixed right-0 top-0 w-64 mx-auto flex flex-col mt-12 py-10"
          style="height: 100vh"
          v-show="showNav"
        >
          <p class="hover:opacity-40">
            <a class="cursor-pointer py-3 block pl-16" href="/">Home</a>
          </p>
          <p class="hover:opacity-40">
            <a class="cursor-pointer py-3 block pl-16" href="/shelves"
              >Book shelves</a
            >
          </p>
          <p class="hover:opacity-40">
            <a
              class="cursor-pointer py-3 block pl-16"
              href="/interactive-sessions"
              >Get Involved</a
            >
          </p>
          <p class="hover:opacity-40">
            <a class="cursor-pointer py-3 block pl-16" href="/shop"
              >Merchandise</a
            >
          </p>
          <!-- <p class="hover:opacity-40"><a class="cursor-pointer py-3 block pl-16"  href="/records">Record</a></p> -->
          <p class="hover:opacity-40">
            <a class="cursor-pointer py-3 block pl-16" href="/about"
              >About Us</a
            >
          </p>
          <p class="hover:opacity-40">
            <a class="cursor-pointer py-3 block pl-16" href="/services"
              >Services</a
            >
          </p>
          <p class="hover:opacity-40">
            <a class="cursor-pointer py-3 block pl-16" href="/donation"
              >Donation</a
            >
          </p>
          <p class="hover:opacity-40 ml-16 my-3">
            <a
              href="/register"
              class="bg-gray-300 py-3 px-5 text-medium rounded"
              >Get started</a
            >
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import MarqueeText from 'vue-marquee-text-component'
export default {
  data() {
    return {
      height: "",
      showWhatWeDo: false,
      showInvolve: false,
      showAbout: false,
      showNav: false,
    };
  },
  components: {},
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.height = window.scrollY;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.dropdown {
  visibility: hidden;
  opacity: 0;
}
.parent:hover > .dropdown {
  visibility: visible;
  opacity: 1;
}
</style>
