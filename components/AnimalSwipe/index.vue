<script setup>
  import { villagers } from '~/utils/data/villagers'
  const { gsap, Draggable } = useGsap();

  let startX;
  const sortedData = villagers.sort(() => Math.random() - 0.5);
  const decisionVal = 80;

  onMounted(() => {
    const smallElements = document.querySelectorAll(".animal-swipe__card");

    smallElements.forEach((element) => {
      Draggable.create(element, {
        type: "x",
        lockAxis: true,
        onPress: (e) => {
          startX = e.pageX;
        },
        onDrag: (e) => {
          const distance = e.x - startX
          
          if (distance > 1) {
            gsap.to(element, {
              rotation: 10
            })
          } else {
            gsap.to(element, {
              rotation: -10
            })
          }
        },
        onRelease: (e) => {
          const distance = e.x - startX
          
          if (distance <= -decisionVal) {
            element.classList.add("inactive");
            element.classList.add("to-left");
          }else if (distance >= decisionVal) {
            element.classList.add("inactive");
            element.classList.add("to-right");
          }else{
            gsap.to(element, {
              x: 0,
              rotation: 0
            })
          }
        }
      });
    });
  });

</script>

<template lang="pug">
  .animal-swipe
    .container
      .animal-swipe__container
        .animal-swipe__cards
          .animal-swipe__card(v-for='villager in sortedData')
            TinderCard(:user='villager')
        .animal-swipe__content
          h1.animal-swipe__title Animal Crossing Tinder
          p More Coming Soon!
</template>

<style lang="sass" src="./index.sass"></style>
