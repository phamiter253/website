<script setup>
  import { villagers } from '~/utils/data/villagers'

  const { gsap, Draggable } = useGsap();
  const profileDrawer = ref(true);
  const zodiacs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const personalities = ["Cranky", "Jock", "Lazy", "Normal", "Peppy", "Big Sister", "Smug", "Snooty"];
  let position = 1;
  // let currentIndex = 1;
  const indexOne = ref(0);
  const indexTwo = ref(1);
  const user = ref({
    zodiac: "aries",
    personality: "cranky"
  });
  const decisionVal = 80;
  let cardIndex = 1
  villagers.sort(() => Math.random() - 0.5);


  function handleDrawer() {
    profileDrawer.value = profileDrawer.value ? false : true
  }; 

  function moveCard(direction) {
    const cards = document.querySelectorAll(".animal-swipe__card");
    const lastCard = cards[cardIndex]
    lastCard.classList.add("inactive");
    lastCard.classList.add(`to-${direction}`);
    // if (direction === "right"){
    //   console.log(villagers[currentIndex])
    // }
    // currentIndex = cardIndex === 1 ? indexOne.value : indexTwo.value

    setTimeout(function() {
      lastCard.classList.remove("inactive")
      lastCard.classList.add("below")
      lastCard.classList.remove(`to-${direction}`)
      if (cardIndex === 0) {
        indexTwo.value = position;
      }else{
        indexOne.value = position;
      }
    }, 300);
    
    if (cardIndex === 0) {
      setTimeout(function() {
        cards[1].classList.remove("below");
      }, 300);
    }else {
      cards[0].classList.remove("below");
    }
    cardIndex = cardIndex === 1 ? 0 : 1;
    position++;
  };

  onMounted(() => {
    const smallElements = document.querySelectorAll(".animal-swipe__card");

    smallElements.forEach((element) => {
      Draggable.create(element, {
        type: "x",
        lockAxis: true,
        zIndexBoost: false,
        onDrag: () => {
          const distance = gsap.getProperty(element, "x")
          const rotation = distance > 1 ? 10 : -10
          gsap.to(element, {
            rotation: rotation
          })
        },
        onRelease: () => {
          const distance = gsap.getProperty(element, "x")
          if (distance <= -decisionVal || distance >= decisionVal) {
            const direction = distance <= -decisionVal ? "left" : "right"
            moveCard(direction)
          }
          gsap.to(element, {
            x: 0,
            rotation: 0
          })
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
          .animal-swipe__profile(:class="{ active: profileDrawer }")
            button.animal-swipe__back(@click='handleDrawer()')
              img.animal-swipe__back-icon(src='/images/animal-crossing/icons/arrow.svg')
            img.animal-swipe__profile-image(src='/images/animal-crossing/posters/villager.png')
            .animal-swipe__name
              h3.animal-swipe__title Villager
              img.animal-swipe__zodiac(:src='`/images/animal-crossing/horoscope/${user.zodiac}.svg`')
            fieldset.animal-swipe__group
              legend.animal-swipe__radio-title Pick your Zodiac Sign
              .animal-swipe__radio-group(v-for='(zodiac,i) in zodiacs' :key='`zodiac-${i}`')
                input(type='radio' :id='`zodiac-${i}`' :value='zodiac' name='zodiac' :checked='zodiac === "Aries" ? true : false')
                label(:for='`zodiac-${i}`' v-html='zodiac')
            fieldset.animal-swipe__group
              legend.animal-swipe__radio-title Pick your Personality Type
              .animal-swipe__radio-group(v-for='(personality,i) in personalities' :key='`personality-${i}`')
                input(type='radio' :id='`personality-${i}`' :value='personality' name='personality' :checked='personality === "Cranky" ? true : false')
                label(:for='`personality-${i}`' v-html='personality')
          .animal-swipe__controls
            button.animal-swipe__button(@click='handleDrawer()')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/edit-profile.svg')
            .animal-swipe__button
              img.animal-swipe__icon(src='/images/animal-crossing/icons/Animal_Crossing_Leaf.svg')
            button.animal-swipe__button
              img.animal-swipe__icon(src='/images/animal-crossing/icons/matches.svg')
          .animal-swipe__card
            TinderCard(:user='villagers[indexOne]')
          .animal-swipe__card
            TinderCard(:user='villagers[indexTwo]')
          .animal-swipe__buttons
            button.animal-swipe__button.reject(@click='moveCard("left")')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/x-small.png')
            button.animal-swipe__button.like(@click='moveCard("right")')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/heart-solid.png')
        .animal-swipe__content
          h1.animal-swipe__title Animal Crossing Tinder
          p.animal-swipe__text Welcome to Animal Crossing Tinder, the matchmaking app for Animal Crossing villagers! Swipe through unique personalities and hobbies to find your dream neighbors and build the perfect island paradise. Your ideal villager is just a swipe away!
          h2.animal-swipe__subheading Instructions
          p.animal-swipe__text More Coming Soon!
</template>

<style lang="sass" src="./index.sass"></style>
