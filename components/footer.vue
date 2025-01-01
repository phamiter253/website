<template lang="pug">
footer.footer
  .container
    .footer__container
      p.footer__copyright © {{ new Date().getFullYear() }} Priscilla Hamiter
</template>

<style scoped lang="sass">
.footer
  width: 100%

  &__container
    display: flex
    flex-direction: column
    justify-content: flex-start
    padding: .5rem 0
    width: 100%

    &::before
      display: block
      background: #333
      width: 40%
      height: 1px
      content: ''

  &__copyright
    font-family: 'Amiri', sans-serif
    font-style: italic
    font-size: 18px
</style>  
