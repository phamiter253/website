<template lang="pug">
.grid
  .container
    .grid__container
      .cell(style='background-image: url("/images/home-projects-24.jpg")')
      .cell(style='background-image: url("/images/home-projects-21.jpg")' :class="{ 'cell--active': currIndex === 2 }" @click='setCurrent(2)')
      .cell-large
        h2.cell__title Upcoming Project
      .cell-large
        h2.cell__title Upcoming Project
      .cell(style='background-image: url("/images/home-projects-22.jpg")')
      .cell(style='background-image: url("/images/home-projects-23.jpg")')
      .cell(style='background-image: url("/images/home-projects-20.jpg")')
      .cell(style='background-image: url("/images/home-projects-19.jpg")')
      .cell-large
        h2.cell__title Upcoming Project
      .cell(style='background-image: url("/images/home-projects-18.jpg")')
      .cell(style='background-image: url("/images/home-projects-17.jpg")')
      .cell(style='background-image: url("/images/home-projects-16.jpg")')
      .cell(style='background-image: url("/images/home-projects-15.jpg")')
      .cell(style='background-image: url("/images/home-projects-14.jpg")')
      .cell(style='background-image: url("/images/home-projects-13.jpg")')
      .cell(style='background-image: url("/images/home-projects-12.jpg")')
      .cell(style='background-image: url("/images/home-projects-11.jpg")')
      .cell(style='background-image: url("/images/home-projects-10.jpg")')
      .cell(style='background-image: url("/images/home-projects-9.jpg")')
      .cell(style='background-image: url("/images/home-projects-8.jpg")')
      .cell(style='background-image: url("/images/home-projects-7.jpg")')
      .cell(style='background-image: url("/images/home-projects-6.jpg")')
      .cell(style='background-image: url("/images/home-projects-5.jpg")')
      .cell(style='background-image: url("/images/home-projects-4.jpg")')
      .cell(style='background-image: url("/images/home-projects-3.jpg")')
      .cell(style='background-image: url("/images/home-projects-2.jpg")')
      .cell(style='background-image: url("/images/home-projects-1.jpg")')
</template>

<script setup>
import { Flip } from "gsap/Flip";
import { gsap } from "gsap";

onMounted(() => {
  gsap.registerPlugin(Flip);
  const smallElements = document.querySelectorAll(".cell");
  let targets = gsap.utils.toArray(".cell");

  // if (useFlipState().value) {
  //   Flip.from(useFlipState().value, {
  //     targets: cell.value,
  //   });
  //   gsap.set(cell.value, { visibility: "visible" });
  // }
  smallElements.forEach((element) => {
  element.addEventListener("click",()=>{
    let state = Flip.getState(targets);
    element.classList.toggle("cell--active");
    Flip.from(state, {
      duration: .5,
      ease: "power4.in",
      scale: true
    });
  })
});
});

</script>

<style src="./index.sass" lang="sass"></style>  
