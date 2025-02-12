<template lang="pug">
  .about-section
    .container
      .about-section__container
        .about-section__row
          NuxtImg.about-section__circle(src='/images/profile.jpg' format="webp" alt='Profile picture of Priscilla')
        .about-section__row
          h1.about-section__title Priscilla Hamiter
          h2.about-section__subtitle Frontend Developer
          p.about-section__subtext Based in San Francisco, California
          p.about-section__subtext Interested in baking, most art mediums, and data visualizations.
          p
          .about-section__column--spaced
            a.about-section__button(href='/2025PriscillaHamiterCV.pdf' rel='noopener noreferrer' target='_blank' aria-label='Opens resume in new window') Resume
            .about-section__group
              a.about-section__icon(href='https://github.com/phamiter253' target='_blank' aria-label='Opens Github account in new window')
                img(src='/images/github.svg' alt='Github logo')
              a.about-section__icon(href='https://www.linkedin.com/in/priscilla-hamiter-668293124' target='_blank' aria-label='Opens LinkedIn account in new window')
                img(src='/images/linkedin.svg' alt='Linkedin logo')
</template>

<style lang="sass" src="./index.sass"></style>
