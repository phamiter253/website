<script setup>
  const props = defineProps({
    user: { type: Object, default: null }
  })
  const isVisible = ref(false);
  const hobbySentence = ["Loves", "You can find me", "Usually", "I like to", "Always", "I spend a lot of time", "Really into"];
  const image = props.user.name.toLowerCase().replace(" ", "").replace(/é/g, 'e');
  const music = props.user.song.toLowerCase().replace(/[ .']/g, '').replace(/é/g, 'e');

  function toggleClass() {
    isVisible.value = !isVisible.value ? true : false;
  }; 

  function pickRandom (){
    return hobbySentence[Math.floor(Math.random()*hobbySentence.length)];
  };
</script>

<template lang="pug">
  .tinder-card(:class="{ bioVisible: isVisible }")
    .tinder-card__image(:style='{ backgroundImage :"url(/images/animal-crossing/posters/" + image + ".png)"}')
      .tinder-card__profile-title
        .tinder-card__name(v-html='props.user.name')
        img.tinder-card__icon(:src='`/images/animal-crossing/horoscope/${props.user.horoscope}.svg`')
        button.tinder-card__button(@click='toggleClass()')
          img.tinder-card__info-icon(src='/images/animal-crossing/icons/info.png')
    .tinder-card__info
      button.tinder-card__button(@click='toggleClass()')
        img.tinder-card__arrow-icon(src='/images/animal-crossing/icons/down-arrow.svg')
      .tinder-card__profile-title
        .tinder-card__name(v-html='props.user.name')
        img.tinder-card__icon(:src='`/images/animal-crossing/horoscope/${props.user.horoscope}.svg`')
      .tinder-card__text-group
        img.tinder-card__bio-icon(src='/images/animal-crossing/icons/briefcase.svg')
        .tinder-card__bio-title(v-if='props.user.goal' v-html='`Aspiring ${props.user.goal}`')
      .tinder-card__line
      .tinder-card__bio-catchphrase(v-html='props.user.quote')
      .tinder-card__bio-skill(v-if='props.user.skill' v-html='pickRandom() + " " +props.user.skill')
      .tinder-card__row
        .tinder-card__column
          .tinder-card__bio-song(v-html='props.user.song')
          .tinder-card__bio-artist K.K. Slider
        img.tinder-card__bio-album(:src='`/images/animal-crossing/songcovers/${music}.png`')
</template>

<style lang="sass" src="./index.sass"></style>  
