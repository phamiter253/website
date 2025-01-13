<script setup>

  const props = defineProps({
    user: { type: Object, default: null }
  })

  const image = props.user.name.toLowerCase().replace(" ", "")
</script>

<template lang="pug">
  .tinder-card
    .tinder-card__image(:style='{ backgroundImage :"url(/images/animal-crossing/posters/" + image + ".png)"}')
      .tinder-card__profile-title
        .tinder-card__name(v-html='props.user.name')
        img.tinder-card__icon(:src='`/images/animal-crossing/horoscope/${props.user.horoscope}.svg`')
</template>

<style lang="sass" src="./index.sass"></style>  
