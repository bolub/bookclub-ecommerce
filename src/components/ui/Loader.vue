<template>
  <div class="flex text-center w-full py-30 border">
    <span class="mx-auto my-auto">
      {{ loadingText }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    loadingText: String,
  },
};
</script>

<style></style>
