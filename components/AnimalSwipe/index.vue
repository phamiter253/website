<script setup>
  import { villagers } from '~/utils/data/villagers'

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
  const user = ref({
    zodiac: "aries",
    personality: "Cranky"
  });
  const decisionVal = 80;
  let cardIndex = 1
  const list = ref(villagers.sort(() => Math.random() - 0.5));

  function closeDrawers() {
    profileDrawer.value = false
    matchDrawer.value = false
  };

  function openProfile() {
    profileDrawer.value = profileDrawer.value ? false : true
    matchDrawer.value = false
  };

  function openMatches() {
    matchDrawer.value = matchDrawer.value ? false : true
    profileDrawer.value = false
  };

  function toggleMatch() {
    newMatch.value = newMatch.value ? false : true
  };

  function personalityCompat(personality) {
    if (user.value.personality === 'Normal' && (personality === "Snooty" || personality === "Smug")){
      return true
    } else if (user.value.personality === 'Lazy' && (personality === "Lazy" || personality === "Big Sister")) {
      return true
    } else if (user.value.personality === 'Peppy' && (personality === "Peppy" || personality === "Jock")) {
      return true
    } else if (user.value.personality === 'Jock' && (personality === "Peppy" || personality === "Jock")) {
      return true
    } else if (user.value.personality === 'Snooty' && (personality === "Normal" || personality === "Cranky")){
      return true
    } else if (user.value.personality === 'Cranky' && (personality === "Snooty" || personality === "Cranky")){
      return true
    } else if (user.value.personality === 'Smug' && (personality === "Normal" || personality === "Smug")){
      return true
    } else if (user.value.personality === 'Big Sister' && (personality === "Lazy" || personality === "Big Sister")){
      return true
    }
    return false
  };

  function zodiacCompat(zodiac) {
    if ((user.value.zodiac === 'aries' || user.value.zodiac === 'leo' || user.value.zodiac === 'sagittarius' ) && (zodiac === 'aries' || zodiac === 'leo' || zodiac === 'sagittarius' )){
      return true
    } else if ((user.value.zodiac === 'libra' || user.value.zodiac === 'gemini' || user.value.zodiac === 'aquarius' ) && (zodiac === 'libra' || zodiac === 'gemini' || zodiac === 'aquarius' )){
      return true
    } else if ((user.value.zodiac === 'capricorn' || user.value.zodiac === 'virgo' || user.value.zodiac === 'taurus' ) && (zodiac === 'capricorn' || zodiac === 'virgo' || zodiac === 'taurus' )){
      return true
    } else if ((user.value.zodiac === 'pisces' || user.value.zodiac === 'scorpio' || user.value.zodiac === 'cancer' ) && (zodiac === 'pisces' || zodiac === 'scorpio' || zodiac === 'cancer' )){
      return true
    }
    return false
  }

  function formatImage(name) {
    return name.toLowerCase().replace(/[ ']/g, "")
  }

  function createAnimalList() {
    possibleMatches.value = []
    isLoading.value = true
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    user.value = {
      zodiac: radioButtons[0].value.toLowerCase(),
      personality: radioButtons[1]
    }
    possibleMatches.value = list.value.filter((villager) => (zodiacCompat(villager.horoscope) || personalityCompat(villager.personality)) && Math.random() < 0.5);
    setTimeout(function() {
      isLoading.value = false
      closeDrawers()
    }, 1000);
  };

  function moveCard(direction) {
    const cards = document.querySelectorAll(".animal-swipe__card");
    const lastCard = cards[cardIndex]
    lastCard.classList.add("inactive");
    lastCard.classList.add(`to-${direction}`);
    if (direction === "right" && possibleMatches.value.includes(list.value[currentIndex])){
      if (!matches.value.includes(list.value[currentIndex])){
        matches.value.push(list.value[currentIndex])
        toggleMatch()
      }
    }
    currentIndex = cardIndex === 1 ? indexOne.value : indexTwo.value

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
    if ( position === list.value.length){
      indexTwo.value = 0
      position = 1
      cardIndex = 1
      currentIndex = 0
    }
  };

  onMounted(() => {
    possibleMatches.value = list.value.filter((villager) => (zodiacCompat(villager.horoscope) || personalityCompat(villager.personality)) && Math.random() < 0.5);
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
              img.animal-swipe__icon(src='/images/animal-crossing/icons/x-small.png')
            button.animal-swipe__button.like(@click='moveCard("right")')
              img.animal-swipe__icon(src='/images/animal-crossing/icons/heart-solid.png')
          .animal-swipe__match-drawer(:class="{ active: matchDrawer }")
            .animal-swipe__matches
              .animal-swipe__match(v-for='(match, i) in matches' :key='`key-${i}`')
                img.animal-swipe__match-image(:src='`/images/animal-crossing/posters/${formatImage(match.name)}.png`')
                h3.animal-swipe__match-name(v-html='match.name')
          .animal-swipe__match-screen
            h2.animal-swipe__title It's a Match!
            p.animal-swipe__text(v-html='`You and ${matches[matches.length-1] ? matches[matches.length-1].name : ""} liked each other.`')
            .animal-swipe__match-images
              img.animal-swipe__match-screen-image(src='/images/animal-crossing/posters/villager.png')
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
                  img.animal-swipe__icon(src='/images/animal-crossing/icons/x-small.png')
                .animal-swipe__text-labels Reject Button
              .animal-swipe__button-group
                .animal-swipe__button.like
                  img.animal-swipe__icon(src='/images/animal-crossing/icons/heart-solid.png')
                .animal-swipe__text-labels Like Button
</template>

<style lang="sass" src="./index.sass"></style>
