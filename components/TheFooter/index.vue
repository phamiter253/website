<script setup>
  import { router } from '~/utils/router'
</script>

<template lang="pug">
  footer.footer
    .container
      .footer__container
        nav(aria-label="Footer navigation")
          ul.footer__links
            li.footer__link-item(v-for='(page, i) in router', :key='`link-${i}`')
              NuxtLink.footer__link(:to='page.path') {{ page.name }}
        p.footer__copyright © {{ new Date().getFullYear() }} Priscilla Hamiter
</template>

<style lang="sass" src="./index.sass"></style> 
