<script setup>
  import { villagers } from "~/utils/data/villagers";

  const { gsap, Draggable } = useGsap();

  const profileDrawer = ref(true);
  const matchDrawer = ref(false);
  const isLoading = ref(false);
  const newMatch = ref(false);

  const possibleMatches = ref([]);
  const matches = ref([]);

  const zodiacs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
  const personalities = ["Cranky", "Jock", "Lazy", "Normal", "Peppy", "Big Sister", "Smug", "Snooty"];

  let position = 1;
  let currentIndex = 1;
  const indexOne = ref(0);
  const indexTwo = ref(1);
  const decisionVal = 80;
  let cardIndex = 1;

  const user = ref({
    zodiac: "aries",
    personality: "Cranky",
  });

  const list = ref(villagers.sort(() => Math.random() - 0.5));

  const closeDrawers = () => {
    profileDrawer.value = false;
    matchDrawer.value = false;
  };

  const openProfile = () => {
    profileDrawer.value = !profileDrawer.value;
    matchDrawer.value = false;
  };

  const openMatches = () => {
    matchDrawer.value = !matchDrawer.value;
    profileDrawer.value = false;
  };

  const toggleMatch = () => {
    newMatch.value = !newMatch.value;
  };

  const personalityCompat = (personality) => {
    const compatibilityMap = {
      Normal: ["Snooty", "Smug"],
      Lazy: ["Lazy", "Big Sister"],
      Peppy: ["Peppy", "Jock"],
      Jock: ["Peppy", "Jock"],
      Snooty: ["Normal", "Cranky"],
      Cranky: ["Snooty", "Cranky"],
      Smug: ["Normal", "Smug"],
      "Big Sister": ["Lazy", "Big Sister"],
    };

    return compatibilityMap[user.value.personality]?.includes(personality) || false;
  };

  const zodiacGroups = {
    fire: ["aries", "leo", "sagittarius"],
    air: ["libra", "gemini", "aquarius"],
    earth: ["capricorn", "virgo", "taurus"],
    water: ["pisces", "scorpio", "cancer"],
  };

  const zodiacCompat = (zodiac) => {
    const userGroup = Object.values(zodiacGroups).find((group) => group.includes(user.value.zodiac));
    return userGroup?.includes(zodiac) || false;
  };

  const formatImage = (name) => name.toLowerCase().replace(/[ ']/g, "");

  const createAnimalList = () => {
    possibleMatches.value = [];
    isLoading.value = true;

    const selectedRadios = document.querySelectorAll('input[type="radio"]:checked');
    user.value = {
      zodiac: selectedRadios[0]?.value.toLowerCase(),
      personality: selectedRadios[1]?.value,
    };

    possibleMatches.value = list.value.filter(
      (villager) => (zodiacCompat(villager.horoscope) || personalityCompat(villager.personality)) && Math.random() < 0.5
    );

    setTimeout(() => {
      isLoading.value = false;
      closeDrawers();
    }, 1000);
  };

  const moveCard = (direction) => {
    const cards = document.querySelectorAll(".animal-swipe__card");
    const lastCard = cards[cardIndex];

    lastCard.classList.add("inactive", `to-${direction}`);

    if (direction === "right" && possibleMatches.value.includes(list.value[currentIndex])) {
      if (!matches.value.includes(list.value[currentIndex])) {
        matches.value.push(list.value[currentIndex]);
        toggleMatch();
      }
    }

    currentIndex = cardIndex === 1 ? indexOne.value : indexTwo.value;

    setTimeout(() => {
      lastCard.classList.toggle("inactive", false);
      lastCard.classList.add("below");
      lastCard.classList.remove(`to-${direction}`);

      if (cardIndex === 0) {
        indexTwo.value = position;
      } else {
        indexOne.value = position;
      }
    }, 300);

    if (cardIndex === 0) {
      setTimeout(() => {
        cards[1].classList.remove("below");
      }, 300);
    } else {
      cards[0].classList.remove("below");
    }

    cardIndex = cardIndex === 1 ? 0 : 1;
    position++;

    if (position === list.value.length) {
      indexTwo.value = 0;
      position = 1;
      cardIndex = 1;
      currentIndex = 0;
    }
  };

  onMounted(() => {
    possibleMatches.value = list.value.filter(
      (villager) => (zodiacCompat(villager.horoscope) || personalityCompat(villager.personality)) && Math.random() < 0.5
    );

    const swipeCards = document.querySelectorAll(".animal-swipe__card");

    swipeCards.forEach((element) => {
      Draggable.create(element, {
        type: "x",
        lockAxis: true,
        zIndexBoost: false,
        onDrag: () => {
          const distance = gsap.getProperty(element, "x");
          gsap.to(element, { rotation: distance > 1 ? 10 : -10 });
        },
        onRelease: () => {
          const distance = gsap.getProperty(element, "x");
          if (Math.abs(distance) >= decisionVal) {
            moveCard(distance > 0 ? "right" : "left");
          }
          gsap.to(element, { x: 0, rotation: 0 });
        },
      });
    });
  });
</script>

<template lang="pug">
  .animal-swipe
    .container
      .animal-swipe__container
        .animal-swipe__cards(:class="{ 'show-match' : newMatch }")
          .animal-swipe__profile(:class="{ active: profileDrawer }")
            img.animal-swipe__profile-image(src='/images/animal-crossing/posters/villager.png')
            .animal-swipe__name
              h3.animal-swipe__title Villager
              img.animal-swipe__zodiac(:src='`/images/animal-crossing/horoscope/${user.zodiac}.svg`')
            fieldset.animal-swipe__group
              legend.animal-swipe__radio-title Pick your Horoscope
              .animal-swipe__radio-group(v-for='(zodiac,i) in zodiacs' :key='`zodiac-${i}`')
                input(type='radio' :id='`zodiac-${i}`' :value='zodiac' name='zodiac' :checked='zodiac === "Aries" ? true : false')
                label(:for='`zodiac-${i}`' v-html='zodiac')
            fieldset.animal-swipe__group
              legend.animal-swipe__radio-title Pick your Personality Type
              .animal-swipe__radio-group(v-for='(personality,i) in personalities' :key='`personality-${i}`')
                input(type='radio' :id='`personality-${i}`' :value='personality' name='personality' :checked='personality === "Cranky" ? true : false')
                label(:for='`personality-${i}`' v-html='personality')
            button.animal-swipe__start-button(@click='createAnimalList()' :class="{ moving: isLoading }") Start!
          .animal-swipe__controls
            button.animal-swipe__button(@click='openProfile()')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/edit-profile.svg')
            button.animal-swipe__button(@click='closeDrawers()')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/Animal_Crossing_Leaf.svg')
            button.animal-swipe__button(@click='openMatches()')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/matches.svg')
          .animal-swipe__card
            TinderCard(:user='list[indexOne]')
          .animal-swipe__card
            TinderCard(:user='list[indexTwo]')
          .animal-swipe__buttons
            button.animal-swipe__button.reject(@click='moveCard("left")')
              NuxtImg.animal-swipe__icon(src='/images/animal-crossing/icons/x-small.png' format="webp")
            button.animal-swipe__button.like(@click='moveCard("right")')
              NuxtImg.animal-swipe__icon(src='/images/animal-crossing/icons/heart-solid.png' format="webp")
          .animal-swipe__match-drawer(:class="{ active: matchDrawer }")
            .animal-swipe__matches
              .animal-swipe__match(v-for='(match, i) in matches' :key='`key-${i}`')
                img.animal-swipe__match-image(:src='`/images/animal-crossing/posters/${formatImage(match.name)}.png`')
                h3.animal-swipe__match-name(v-html='match.name')
          .animal-swipe__match-screen
            h2.animal-swipe__title It's a Match!
            p.animal-swipe__text(v-html='`You and ${matches[matches.length-1] ? matches[matches.length-1].name : ""} liked each other.`')
            .animal-swipe__match-images
              NuxtImg.animal-swipe__match-screen-image(src='/images/animal-crossing/posters/villager.png' format="webp")
              img.animal-swipe__match-screen-image(:src='`/images/animal-crossing/posters/${matches[matches.length-1] ? formatImage(matches[matches.length-1].name) : "villager"}.png`')
            button.animal-swipe__match-button(@click='toggleMatch()') Continue
        .animal-swipe__content
          h1.animal-swipe__title Animal Crossing Tinder
          p.animal-swipe__text Welcome to Animal Crossing Tinder, the matchmaking app for Animal Crossing villagers! Swipe through unique personalities and hobbies to find your dream neighbors and build the perfect island paradise. Your ideal villager is just a swipe away!
          p.animal-swipe__text The data is from the #[a(href='https://www.kaggle.com/datasets/jessicali9530/animal-crossing-new-horizons-nookplaza-dataset?select=villagers.csv' aria-label='Open Animal Crossing villagers dataset in new tab' target='_blank') Animal Crossing New Horizons Catalog Dataset], however I removed unused data, and added catchphrases, horoscope and image paths. This project utilizes GSAP for animations and draggable actions.
          .animal-swipe__row
            .animal-swipe__column
              h2.animal-swipe__subheading Instructions
              p.animal-swipe__text Before swiping, set your Horoscope and Personality type then click 'Start'. You can always edit your horoscope and personality type by selecting the Edit Profile button.
              p.animal-swipe__text You can either swap the card left or right or click on the Like and Reject buttons. Once you get a match, a message will pop up similar to Tinder's Match notification.
              p.animal-swipe__text If you want to see all the villagers you've matched with, select the See Matches button at the top.
            .animal-swipe__buttons
              .animal-swipe__button-group
                .animal-swipe__button
                  img.animal-swipe__icon(src='/images/animal-crossing/icons/edit-profile.svg')
                .animal-swipe__text-labels Edit Profile
              .animal-swipe__button-group
                .animal-swipe__button
                  img.animal-swipe__icon(src='/images/animal-crossing/icons/Animal_Crossing_Leaf.svg')
                .animal-swipe__text-labels Home Button
              .animal-swipe__button-group
                .animal-swipe__button
                  img.animal-swipe__icon(src='/images/animal-crossing/icons/matches.svg')
                .animal-swipe__text-labels See Matches
              .animal-swipe__button-group
                .animal-swipe__button.reject
                  NuxtImg.animal-swipe__icon(src='/images/animal-crossing/icons/x-small.png' format="webp")
                .animal-swipe__text-labels Reject Button
              .animal-swipe__button-group
                .animal-swipe__button.like
                  NuxtImg.animal-swipe__icon(src='/images/animal-crossing/icons/heart-solid.png' format="webp")
                .animal-swipe__text-labels Like Button
</template>

<style lang="sass" src="./index.sass"></style>
