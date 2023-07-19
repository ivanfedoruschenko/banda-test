<script setup>
const props = defineProps(["getCafeList"]);
</script>

<template>
  <div class="header">
    <div class="header__container">
      <h1 class="header__title">Где поесть?</h1>
      <div class="header__button-container">
        <button @click="getCafeList" type="button" class="header__button">
          Все Кафе
        </button>
        <button @click="getRandomId" type="button" class="header__button">
          Случайное кафе
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getRandomId() {
      const id = Math.floor(Math.random() * 23) + 1;
      if (typeof id === "number") {
        this.$emit("getRandomId", id);
      }
    },
  },
};
</script>

<style src="../assets/styles/header.scss" lang="scss" scoped></style>
