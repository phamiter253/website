<template lang="pug">
  .default#page-wrapper(tabindex='-1')
    TheNavigation
    main#main-content
      NuxtPage
    TheFooter
</template>
<style lang="sass">
main:focus
  outline: none

#page-wrapper:focus 
  outline: none

#page-wrapper
  display: flex
  flex-direction: column
  min-height: 100vh

#main-content
  display: flex
  flex: 1
  justify-content: center
  overflow-x: hidden
  margin-top: 101px

  @media screen and (max-width: 768px)
    margin-top: 76px

.pages-home,.pages-contact, .pages-about, .pages-projects, .pages-thank-you
  display: flex
  align-items: center
  justify-content: center
  flex: 1
  width: 100%

.pages-projects__game
  display: flex
  align-items: center
  justify-content: center
  flex: 1
  width: 100%
  flex-direction: column

  .container
    max-width: 1080px !important

.pages-projects__grid
  width: 100%

.pages-about
  .container
    max-width: 1080px !important
    column-gap: 4rem

.pages-thank-you
  text-align: center

  h1
    margin: 0

  .container
    &
      max-width: 800px !important

  .circle-image
    margin: 2rem auto 1rem
    border-radius: 50%
    width: 250px

.button
  transition: background-color .3s ease
  margin-top: 2rem
  font-family: 'Amiri'
  font-size: 1.25rem
  padding: .5rem 1.5rem
  background-color: #1e1d1d
  color: #fff
  border-radius: 30px
  border: 3px solid #1e1d1d
  width: fit-content
  margin: 0 auto

  &:hover
    transition: background-color .3s ease
    background-color: transparent
    color: #1e1d1d

</style>
