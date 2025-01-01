<template lang="pug">
  .home-hero
    .container(style='flexDirection: column; alignItems: center')
      h1.home-hero__title Projects
      .home-hero__row
        p.home-hero__title by
        img.home-hero__logo(src='https://priscillahamiter.com/logo.svg' alt='Logo')
</template>
<style scoped lang="sass">
.home-hero
  width: 100%

  h1
    margin-bottom: 0

  p
    margin-top: 0
    font-size: 6vw

  &__title
    &
      line-height: 1
      font-style: italic
      font-size: 10vw
      font-weight: 300
      text-align: center
      margin-top: var(--fluid-26-48)
    

    @media screen and (max-width: 768px)
      font-size: 48px

  &__row
    display: flex
    justify-content: space-evenly
    margin-bottom: var(--fluid-48-64)

  &__logo
    &
      width: auto
      height: 20vw

    @media screen and (max-width: 768px)
      height: 20vw

</style>  
  