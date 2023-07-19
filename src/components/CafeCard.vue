<script setup>
const props = defineProps({
  cafe: {
    type: [Object, null],
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <img
      v-if="cafe?.photo"
      class="card__img"
      :src="`${cafe.photo}`"
      alt="Фото ресторана"
    />
    <img
      v-else
      src="../assets/icons/card__icon-no-photo.png"
      class="card__img"
      alt="Фото нет"
    />
    <ul class="card__list">
      <li class="card__element">
        <img
          class="card__icon"
          src="../assets/icons/card__icon-cafe.png"
          alt="Иконка"
        />
        <p class="card__paragraph">
          <span>Name:</span
          >{{ cafe.name ? cafe.name : "Информация отсутствует" }}
        </p>
      </li>
      <li class="card__element">
        <img
          class="card__icon"
          src="../assets/icons/card__icon-address.png"
          alt="Иконка"
        />
        <p class="card__paragraph">
          <span>Address:</span
          >{{ cafe.address ? cafe.address : "Информация отсутствует" }}
        </p>
      </li>
      <li class="card__element">
        <img
          class="card__icon"
          src="../assets/icons/card__icon-address.png"
          alt="Иконка"
        />
        <p class="card__paragraph">
          <span>Ориентир:</span
          >{{ cafe.landmark ? cafe.landmark : "Информация отсутствует" }}
        </p>
      </li>
      <li class="card__element">
        <img
          class="card__icon"
          src="../assets/icons/card__icon-kitchen.png"
          alt="Иконка"
        />
        <p class="card__paragraph">
          <span>Kitchen:</span
          >{{ cafe.cuisine ? cafe.cuisine : "Информация отсутствует" }}
        </p>
      </li>
      <li v-if="cafe?.business_lunch" class="card__element">
        <img
          class="card__icon"
          src="../assets/icons/card__icon-buisness-lunch.png"
          alt="Иконка"
        />
        <p class="card__paragraph">
          <span>Business lunch:</span>{{ cafe.business_lunch ? "Да" : "Нет" }}
        </p>
      </li>
      <li class="card__element">
        <img
          class="card__icon"
          src="../assets/icons/card__icon-price.png"
          alt="Иконка"
        />
        <p class="card__paragraph">
          <span>Price:</span
          >{{ cafe.price ? cafe.price : "Информация отсутствует" }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style src="../assets/styles/card.scss" lang="scss" scoped></style>
