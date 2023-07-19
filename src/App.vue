<script setup>
import Header from "./components/Header.vue";
import CafeList from "@/components/CafeList.vue";
import { getCafeById, getAllCafe } from "@/api";
import { onMounted, onUpdated, ref } from "vue";

let cafeList = ref(null);

const getCafeList = () => {
  getAllCafe().then((res) => {
    cafeList.value = res.data;
  });
};

const getRandomId = (id) => {
  getCafeById(id).then((res) => {
    cafeList.value = res;
  });
};

onMounted(getCafeList);
</script>

<template>
  <Header :getCafeList="getCafeList" v-on:getRandomId="getRandomId" />
  <CafeList :cafeList="cafeList" />
</template>

<style lang="scss" scoped></style>
