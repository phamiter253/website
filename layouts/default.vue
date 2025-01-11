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
  flex: 1

</style>
