<template lang="pug">
  .hero-home
    .container(style='flexDirection: column; alignItems: center')
      .hero-home__background
        .hero-home__oval(style="background-image: url('/images/projects/project-9.jpg')")
          svg.hero-home__desktop-icon(viewBox="0 0 250 250")
            defs
              filter#textShadow
                feDropShadow(dx="2" dy="2" stdDeviation="3" flood-color="black" flood-opacity="0.5")
              path#outwardPath(d="M 50,150 A 100,145 0 0,0 250,150" fill="transparent")
            text(fill="black" font-size="32" font-family="Amiri" text-anchor="middle")
              textPath(xlink:href="#outwardPath" startOffset="70%")
                | art
          svg.hero-home__mobile-icon(viewBox="0 0 60 330")
            defs
              filter#textShadowMobile
                feDropShadow(dx="2" dy="2" stdDeviation="3" flood-color="black" flood-opacity="0.5")
              path#outwardPathMobile(d="M 50,150 A 100,145 0 0,0 250,150" fill="transparent")
            text(fill="black" font-size="42" font-family="Amiri" text-anchor="middle")
              textPath(xlink:href="#outwardPathMobile" startOffset="70%")
                | art
        .hero-home__oval(style="background-image: url('/images/projects/project-24.jpg')")
          svg.hero-home__desktop-icon(viewBox="0 0 250 250")
            text(fill="black" font-size="32" font-family="Amiri" text-anchor="middle")
              textPath(xlink:href="#outwardPath" startOffset="65%")
                | baking
          svg.hero-home__mobile-icon(viewBox="0 0 60 330")
            text(fill="black" font-size="42" font-family="Amiri" text-anchor="middle")
              textPath(xlink:href="#outwardPathMobile" startOffset="70%")
                | baking
        .hero-home__oval(style="background-image: url('/images/animal-crossing/animal-crossing-preview.jpg')")
          svg.hero-home__desktop-icon(viewBox="0 0 250 250")
            text(fill="black" font-size="32" font-family="Amiri" text-anchor="middle")
              textPath(xlink:href="#outwardPath" startOffset="70%")
                | code
          svg.hero-home__mobile-icon(viewBox="0 0 60 330")
            text(fill="black" font-size="42" font-family="Amiri" text-anchor="middle")
              textPath(xlink:href="#outwardPathMobile" startOffset="70%")
                | code
      h1.hero-home__title Projects by Priscilla Hamiter
      .hero-home__row
        img.hero-home__logo(src='/logo.svg' alt='Priscilla Hamiter Logo')
</template>

<style lang="sass" src="./index.sass"></style> 
