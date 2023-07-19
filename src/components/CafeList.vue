<script setup>
const props = defineProps({
  cafeList: {
    type: [Object, null],
    required: true,
  },
});
</script>

<template>
  <div class="content">
    <div class="content__container">
      <CafeCard v-for="cafe in cafeList" :key="cafe.id" :cafe="cafe" />
    </div>
  </div>
</template>

<script>
import CafeCard from "@/components/CafeCard.vue";

export default {
  components: { CafeCard },
};
</script>

<style src="../assets/styles/content.scss" lang="scss" scoped></style>
