<template lang="pug">
.grid
  .container
    .grid__container
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-24.jpg")' :class="{ 'cell--active': currIndex === 1 }" @click='setCurrent(1)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-21.jpg")' :class="{ 'cell--active': currIndex === 2 }" @click='setCurrent(2)')
      .cell-large
        h2.cell__title Upcoming Project
      .cell-large
        h2.cell__title Upcoming Project
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-22.jpg")' :class="{ 'cell--active': currIndex === 3 }" @click='setCurrent(3)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-23.jpg")' :class="{ 'cell--active': currIndex === 4 }" @click='setCurrent(4)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-20.jpg")' :class="{ 'cell--active': currIndex === 5 }" @click='setCurrent(5)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-19.jpg")' :class="{ 'cell--active': currIndex === 6 }" @click='setCurrent(6)')
      .cell-large
        h2.cell__title Upcoming Project
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-18.jpg")' :class="{ 'cell--active': currIndex === 7 }" @click='setCurrent(7)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-17.jpg")' :class="{ 'cell--active': currIndex === 8 }" @click='setCurrent(8)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-16.jpg")' :class="{ 'cell--active': currIndex === 9 }" @click='setCurrent(9)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-15.jpg")' :class="{ 'cell--active': currIndex === 10 }" @click='setCurrent(10)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-14.jpg")' :class="{ 'cell--active': currIndex === 11 }" @click='setCurrent(11)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-13.jpg")' :class="{ 'cell--active': currIndex === 12 }" @click='setCurrent(12)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-12.jpg")' :class="{ 'cell--active': currIndex === 13 }" @click='setCurrent(13)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-11.jpg")' :class="{ 'cell--active': currIndex === 14 }" @click='setCurrent(14)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-10.jpg")' :class="{ 'cell--active': currIndex === 15 }" @click='setCurrent(15)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-9.jpg")' :class="{ 'cell--active': currIndex === 16 }" @click='setCurrent(16)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-8.jpg")' :class="{ 'cell--active': currIndex === 17 }" @click='setCurrent(17)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-7.jpg")' :class="{ 'cell--active': currIndex === 18 }" @click='setCurrent(18)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-6.jpg")' :class="{ 'cell--active': currIndex === 19 }" @click='setCurrent(19)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-5.jpg")' :class="{ 'cell--active': currIndex === 20 }" @click='setCurrent(20)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-4.jpg")' :class="{ 'cell--active': currIndex === 21 }" @click='setCurrent(21)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-3.jpg")' :class="{ 'cell--active': currIndex === 22 }" @click='setCurrent(22)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-2.jpg")' :class="{ 'cell--active': currIndex === 23 }" @click='setCurrent(23)')
      .cell(style='background-image: url("https://priscillahamiter.com/images/home-projects-1.jpg")' :class="{ 'cell--active': currIndex === 24 }" @click='setCurrent(24)')
</template>

<script setup>
const currIndex = ref(0);

function setCurrent(i) {
  currIndex.value = currIndex.value === i ? 0 : i;
}
</script>

<style src="./index.sass" lang="sass"></style>  
