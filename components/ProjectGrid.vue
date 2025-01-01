<template lang="pug">
.grid
  .container
    .grid__container
      .cell(id='cell-1')
        img(src='/images/home-projects-24.jpg')
        p.cell__caption Turkey Shaped<br>Pretzels
      .cell(id='cell-2')
        img(src='/images/home-projects-21.jpg')
        p.cell__caption Spongebob<br>Birthday Cake
      .cell-large
        h2.cell__title Upcoming Project
      .cell-large
        h2.cell__title Upcoming Project
      .cell(id='cell-3')
        img(src='/images/home-projects-22.jpg')
        p.cell__caption Halloween Charcuterie
      .cell(id='cell-4')
        img(src='/images/home-projects-23.jpg')
        p.cell__caption Western Themed<br>Birthday Cake
      .cell(id='cell-5')
        img(src='/images/home-projects-20.jpg')
        p.cell__caption Charcuterie<br>Picnic Board
      .cell(id='cell-6')
        img(src='/images/home-projects-19.jpg')
        p.cell__caption Cardboard<br>Summer Cover
      .cell-large
        h2.cell__title Upcoming Project
      .cell(id='cell-7')
        img(src='/images/home-projects-18.jpg')
        p.cell__caption Black Coco<br>Birthday Cake 
      .cell(id='cell-8')
        img(src='/images/home-projects-17.jpg')
        p.cell__caption White Elephant<br>Gift Wrapping
      .cell(id='cell-9')
        img(src='/images/home-projects-16.jpg')
        p.cell__caption Starbucks Skeleton<br>Jack-o-Lantern
      .cell(id='cell-10')
        img(src='/images/home-projects-15.jpg')
        p.cell__caption My Hero Academia Cupcakes
      .cell(id='cell-11')
        img(src='/images/home-projects-14.jpg')
        p.cell__caption Crepe Flowers Bouquet
      .cell(id='cell-12')
        img(src='/images/home-projects-13.jpg')
        p.cell__caption California Poppies Crepe Flowers
      .cell(id='cell-13')
        img(src='/images/home-projects-12.jpg')
        p.cell__caption Origami Dollar Bill Pug
      .cell(id='cell-14')
        img(src='/images/home-projects-11.jpg')
        p.cell__caption Cardboard Bookcase
      .cell(id='cell-15')
        img(src='/images/home-projects-10.jpg')
        p.cell__caption Origami Dragon<br>Gift Wrapping
      .cell(id='cell-16')
        img(src='/images/home-projects-9.jpg')
        p.cell__caption Birch Trees Painting
      .cell(id='cell-17')
        img(src='/images/home-projects-8.jpg')
        p.cell__caption Skeleton Painting
      .cell(id='cell-18')
        img(src='/images/home-projects-7.jpg')
        p.cell__caption Maze Painting
      .cell(id='cell-19')
        img(src='/images/home-projects-6.jpg')
        p.cell__caption Illusion Painting
      .cell(id='cell-20')
        img(src='/images/home-projects-5.jpg')
        p.cell__caption Crochet Taco Pillow
      .cell(id='cell-21')
        img(src='/images/home-projects-4.jpg')
        p.cell__caption Hershey's Bar<br>Gift Wrapping
      .cell(id='cell-22')
        img(src='/images/home-projects-3.jpg')
        p.cell__caption Hamburger Gift Wrapping
      .cell(id='cell-23')
        img(src='/images/home-projects-2.jpg')
        p.cell__caption Cardboard Toilet Giftbox
      .cell(id='cell-24')
        img(src='/images/home-projects-1.jpg')
        p.cell__caption Cardboard Guitar Giftbox
</template>

<script setup>
import { Flip } from "gsap/Flip";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap";

onMounted(() => {
  gsap.registerPlugin(Flip, ScrollToPlugin);
  const smallElements = document.querySelectorAll(".cell");
  const targets = gsap.utils.toArray(".cell, .cell-large");

  smallElements.forEach((element) => {
    element.addEventListener("click",()=>{
      const state = Flip.getState(targets);
      element.classList.toggle("active");
      Flip.from(state, {
        duration: .3,
        ease: "power1.in",
        absolute: true
      });
      gsap.to(window, {
        duration: 1, 
        delay: .2,
        scrollTo:{y:"#"+element.id, offsetY:80}
      });
    })
  });
});

</script>

<style scoped lang="sass">
.grid
  width: 100%

  &__container
    & 
      display: grid
      grid-template-columns: repeat(4, 1fr)
      grid-auto-flow: dense
      justify-content: flex-start
      gap: 1rem
      padding: .5rem 0
      width: 100%
      transition: 2s
    
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr 1fr

.cell
  display: flex
  justify-content: center
  position: relative
  border-radius: 15%
  box-shadow: .0625rem .0625rem .4375rem rgba(0,0,0,.15)
  aspect-ratio: 1
  width: 100%
  height: auto
  overflow: hidden
  background-position: center
  background-size: contain

  &::after
    transition: background-color .2s ease
    width: 100%
    height: 100%
    background-color: transparent
    content: ''

  &:hover
    cursor: pointer

    &.active
      .cell__caption
        transition: font-size .5s .2s ease 
        font-size: 3rem

      &::after
        transition: background-color .2s ease
        background-color: transparent 

    .cell__caption
      opacity: 1

    &::after
      position: absolute
      transition: background-color .2s ease
      background-color: rgba(#333, .4)

  &.active
    grid-column-end: span 2
    grid-row-end: span 2

    .cell__caption
      opacity: 0 !important
    //   transition: font-size .5s .2s ease 
    //   font-size: 3rem

  &__title
    position: absolute
    bottom: 0
    font-family: 'Alpaca', sans-serif
    text-transform: uppercase
    font-weight: 300
    color: #fff
    width: fit-content

  &__caption
    transition: opacity .2s ease font-size .5s .2s ease 
    font-size: 1.5rem
    position: absolute
    margin: 0 auto
    text-align: center
    bottom: 40%
    z-index: 2
    opacity: 0
    font-weight: 300
    color: #fff
    width: 80%

.cell-large
  &
    transition: border-radius .2s ease
    display: flex
    justify-content: center
    position: relative
    background-color: #F24C4C
    border-radius: 8% / 15%
    box-shadow: .0625rem .0625rem .4375rem rgba(0,0,0,.15)
    grid-column-end: span 2
    overflow: hidden
    background-position: center
    background-size: contain
    aspect-ratio: 2 / 1

    &::after
      width: 100%
      height: 100%
      background-color: transparent
      content: ''

  // &:hover
  //   transition: border-radius .2s ease
  //   border-radius: 25% / 50%

    // &::after
    //   transition: background-color .2s ease
    //   background-color: rgba(#FAB12F, .6)
</style>  
