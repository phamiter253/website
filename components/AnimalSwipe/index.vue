<script setup>
  import { villagers } from '~/utils/data/villagers'
  const { gsap, Draggable } = useGsap();

  let startX;
  const profileDrawer = ref(false);
  const zodiac = 'aries';
  const decisionVal = 80;

  villagers.sort(() => Math.random() - 0.5);

  function moveCard(direction) {
    const cards = document.querySelectorAll(".animal-swipe__card:not(.inactive)");
    const lastCard = cards[cards.length -1]
    lastCard.classList.add("inactive");
    if (direction === "right") {
      lastCard.classList.add("to-right");
      console.log(lastCard.getAttribute("data-name"))
    } else {
      lastCard.classList.add("to-left");
    }
  };

  onMounted(() => {
    profileDrawer.value = document.querySelector(".animal-swipe__profile");
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
          const rotation = distance > 1 ? 10 : -10

          gsap.to(element, {
            rotation: rotation
          })
        },
        onRelease: (e) => {
          const distance = e.x - startX
          
          if (distance <= -decisionVal || distance >= decisionVal) {
            const direction = distance <= -decisionVal ? "left" : "right"
            moveCard(direction)
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
          //- .animal-swipe__profile
          //-   img.animal-swipe__profile-image(src='/images/animal-crossing/posters/villager.png')
          //-   .animal-swipe__name
          //-     h3.animal-swipe__title Villager
          //-     img.animal-swipe__zodiac(:src='`/images/animal-crossing/horoscope/${zodiac}.svg`')
          .animal-swipe__controls
            button.animal-swipe__button
              img.animal-swipe__icon(src='/images/animal-crossing/icons/edit-profile.svg')
            .animal-swipe__button
              img.animal-swipe__icon(src='/images/animal-crossing/icons/Animal_Crossing_Leaf.svg')
            button.animal-swipe__button
              img.animal-swipe__icon(src='/images/animal-crossing/icons/matches.svg')
          .animal-swipe__card(v-for='(villager, i) in villagers' :key='`villager-${i}`' :data-name='villager.name')
            TinderCard(:user='villager')
          .animal-swipe__buttons
            button.animal-swipe__button.reject(@click='moveCard("left")')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/x-small.png')
            button.animal-swipe__button.like(@click='moveCard("right")')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/heart-solid.png')
        .animal-swipe__content
          h1.animal-swipe__title CritterConnect
          p.animal-swipe__text Welcome to CritterConnect, the matchmaking app for Animal Crossing villagers! Swipe through unique personalities and hobbies to find your dream neighbors and build the perfect island paradise. Your ideal villager is just a swipe away!
          h2.animal-swipe__subheading Instructions
          p.animal-swipe__text More Coming Soon!
</template>

<style lang="sass" src="./index.sass"></style>
