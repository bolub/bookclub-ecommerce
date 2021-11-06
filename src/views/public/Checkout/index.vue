<template>
  <div class="flex min-h-full w-full" style="min-height:100vh">
    <div class="flex w-full ">
      <div class="w-4/5 h-full py-10 px-20 flex flex-col">
        <h1 class="font-black" style="font-size:28px">
          Checkout
        </h1>

        <!-- Contact Information -->

        <h2 class="font-bold mt-12 gray mb-2" style="font-size:18px">
          Contact Information
        </h2>

        <div>
          <!-- firstName and lastName -->
          <div class="grid md:grid-cols-2 gap-4">
            <div class="font-bold mb-5">
              <p class="mb-2" style="font-size:14px">
                FirstName
              </p>
              <el-input
                v-model="contactInformation.firstName"
                placeholder="Abimbola"
              ></el-input>
            </div>

            <div class="font-bold mb-5">
              <p class="mb-2" style="font-size:14px">
                LastName
              </p>
              <el-input
                v-model="contactInformation.lastName"
                placeholder="Mobolaji"
              ></el-input>
            </div>
          </div>

          <!-- email -->
          <div class="font-bold mb-5">
            <p class="mb-2" style="font-size:14px">Email</p>
            <el-input
              v-model="contactInformation.email"
              placeholder="abimbola@email.com"
              prop="Email"
              type="email"
            ></el-input>
          </div>

          <!-- phone number -->
          <div class="font-bold">
            <p class="mb-2" style="font-size:14px">Phone Number</p>
            <el-input
              type="tel"
              v-model="contactInformation.phoneNumber"
              placeholder=""
              prop="Phone Number"
            ></el-input>
          </div>

          <!-- Billing Address -->
          <h2 class="font-bold mt-12 gray mb-2" style="font-size:18px">
            Billing Address
          </h2>

          <!-- fullname -->
          <div class="font-bold mb-5">
            <p class="mb-2" style="font-size:14px">Fullname</p>
            <el-input
              :disabled="true"
              :value="
                `${contactInformation.firstName} ${contactInformation.lastName}`
              "
              placeholder="Abimbola Mobolaji"
            ></el-input>
          </div>

          <!-- Phone number -->
          <div class="font-bold mb-5">
            <p class="mb-2" style="font-size:14px">Address</p>
            <el-input
              type="textarea"
              :rows="5"
              v-model="contactInformation.address"
              placeholder=""
              prop="Address"
            ></el-input>
          </div>

          <div>
            <!-- <el-button @click="submitForm('contactInformation')">
              Pay Now
            </el-button> -->
            <paystack
              :amount="amount * 100"
              :email="contactInformation.email"
              paystackkey="pk_test_ab0534b44821751a9825caa5e978948a8ef67f1f"
              :reference="reference"
              :callback="processPayment"
              :close="close"
              class="bg-black text-white mt-4 px-8 py-4 rounded-md w-full"
            >
              Pay Now
            </paystack>
          </div>
        </div>
      </div>

      <!-- shOWS PRODUCT description and other shit -->
      <div class="w-3/5 h-full px-16 py-10" style="background:#f2f2f2;">
        <!-- Products display -->
        <div v-for="product in cartInfo" :key="product.name" class="flex mb-6">
          <el-badge class="w-20 h-20" :value="product.quantity">
            <img
              class="w-full h-full my-auto rounded border"
              :src="product.cover_image_url"
              style="object-fit: cover"
            />
          </el-badge>

          <div class="my-auto ml-6 w-full">
            <div class="flex w-full">
              <div class="my-auto">
                <span class="font-bold">{{ product.product_name }}</span>

                <div class="flex" style="font-size:14px">
                  <span class="my-auto">Size {{ product.sizeChosen }}</span>
                  <span class="my-auto mx-2">&bull;</span>
                  <span class="my-auto">{{ product.colorChosen }} color</span>
                </div>
              </div>

              <p class=" ml-auto">₦{{ product.quantity * product.price }}</p>
            </div>
          </div>
        </div>

        <!-- Subtotal -->
        <div
          class=" mt-5 border py-4"
          style="border-top:1px solid #c4c4c4; border-bottom: 1px solid #c4c4c4; font-size:14px"
        >
          <div class="flex mb-2">
            <p class="my-auto">Subtotal</p>
            <p class="my-auto ml-auto">Free</p>
          </div>

          <div class="flex">
            <p class="my-auto">Delivery</p>
            <p class="my-auto ml-auto">₦{{ delivery }}</p>
          </div>
        </div>

        <!-- Total -->
        <div class="flex mt-2">
          <p class="my-auto font-bold">Total</p>
          <p class="my-auto ml-auto" style="font-size:24px">
            ₦{{ amount + delivery }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paystack from 'vue-paystack';

export default {
  components: {
    paystack,
  },

  data() {
    return {
      cartInfo: [],
      amount: 0,
      delivery: 1000,
      contactInformation: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
      },
    };
  },

  computed: {
    reference() {
      let text = '';

      let possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
  },

  computed: {},

  mounted() {
    this.cartInfo = JSON.parse(localStorage.getItem('products'));
    this.processTotal();
  },

  methods: {
    processPayment: () => {
      window.alert('Payment recieved');
    },
    disableForm() {
      if (
        !this.contactInformation.email ||
        !this.contactInformation.firstName
      ) {
        return false;
      }

      return true;
    },
    close: () => {
      console.log('You closed checkout page');
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    processTotal() {
      let total = 0;

      this.cartInfo.forEach((product) => {
        let productPrice = product.quantity * product.price;
        total = total + productPrice;
      });

      this.amount = total;
    },
  },
};
</script>

<style></style>
