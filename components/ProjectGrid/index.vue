<script setup>
  const { gsap, Flip } = useGsap();

  onMounted(() => {
    const smallElements = document.querySelectorAll(".cell");
    const targets = gsap.utils.toArray(".cell, .cell-large");

    smallElements.forEach((element) => {
      element.addEventListener("click",()=>{
        const state = Flip.getState(targets);
        element.classList.toggle("active");
        Flip.from(state, {
          duration: .3,
          ease: "power1.in"
        });
        gsap.to(window, {
          duration: .5, 
          delay: .4,
          scrollTo:{y:"#"+element.id, offsetY:80}
        });
      })
    });
  });
</script>

<template lang="pug">
.grid
  .container
    .grid__container
      .cell(id='cell-1')
        img(src='/images/home-projects-24.jpg' alt='Turkey Shaped Pretzels')
        h3.cell__caption Turkey Shaped<br>Pretzels
      .cell(id='cell-2')
        CardCarousel(:slidesLength='4')
          img.slide(src='/images/home-projects-21.jpg' alt='Spongebob Birthday Cake')
          img.slide(src='/images/home-projects-21b.jpg' alt='Spongebob Birthday Cake')
          img.slide(src='/images/home-projects-21c.jpg' alt='Spongebob Birthday Cake')
          img.slide(src='/images/home-projects-21d.jpg' alt='Spongebob Birthday Cake')
        h3.cell__caption Spongebob<br>Birthday Cake
      .cell-large
        h2.cell__title Upcoming Project
      .cell-large
        h2.cell__title Upcoming Project
      .cell(id='cell-3')
        CardCarousel(:slidesLength='2')
          img.slide(src='/images/home-projects-22.jpg' alt='Halloween Charcuterie')
          img.slide(src='/images/home-projects-22b.jpg' alt='Halloween Charcuterie')
        h3.cell__caption Halloween Charcuterie
      .cell(id='cell-4')
        img(src='/images/home-projects-23.jpg' alt='Western Themed Birthday Cake')
        h3.cell__caption Western Themed<br>Birthday Cake
      .cell(id='cell-5')
        img(src='/images/home-projects-20.jpg' alt='Charcuterie Picnic Board')
        h3.cell__caption Charcuterie<br>Picnic Board
      .cell(id='cell-6')
        img(src='/images/home-projects-19.jpg' alt='Cardboard Summer Cover')
        h3.cell__caption Cardboard<br>Summer Cover
      .cell-large
        h2.cell__title Upcoming Project
      .cell(id='cell-7')
        img(src='/images/home-projects-18.jpg' alt='Black Coco Birthday Cake ')
        h3.cell__caption Black Coco<br>Birthday Cake 
      .cell(id='cell-8')
        img(src='/images/home-projects-17.jpg' alt='White Elephant Gift Wrapping')
        h3.cell__caption White Elephant<br>Gift Wrapping
      .cell(id='cell-9')
        img(src='/images/home-projects-16.jpg' alt='Starbucks Skeleton Jack-o-Lantern')
        h3.cell__caption Starbucks Skeleton<br>Jack-o-Lantern
      .cell(id='cell-10')
        img(src='/images/home-projects-15.jpg' alt='My Hero Academia Cupcakes')
        h3.cell__caption My Hero Academia Cupcakes
      .cell(id='cell-11')
        img(src='/images/home-projects-14.jpg' alt='Crepe Flowers Bouquet')
        h3.cell__caption Crepe Flowers Bouquet
      .cell(id='cell-12')
        img(src='/images/home-projects-13.jpg' alt='California Poppies Crepe Flowers')
        h3.cell__caption California Poppies Crepe Flowers
      .cell(id='cell-13')
        img(src='/images/home-projects-12.jpg' alt='Origami Dollar Bill Pug')
        h3.cell__caption Origami Dollar Bill Pug
      .cell(id='cell-14')
        img(src='/images/home-projects-11.jpg' alt='Cardboard Bookcase')
        h3.cell__caption Cardboard Bookcase
      .cell(id='cell-15')
        img(src='/images/home-projects-10.jpg' alt='Origami Dragon Gift Wrapping')
        h3.cell__caption Origami Dragon<br>Gift Wrapping
      .cell(id='cell-16')
        img(src='/images/home-projects-9.jpg' alt='Birch Trees Painting')
        h3.cell__caption Birch Trees Painting
      .cell(id='cell-17')
        img(src='/images/home-projects-8.jpg' alt='Skeleton Painting')
        h3.cell__caption Skeleton Painting
      .cell(id='cell-18')
        img(src='/images/home-projects-7.jpg' alt='Maze Painting')
        h3.cell__caption Maze Painting
      .cell(id='cell-19')
        img(src='/images/home-projects-6.jpg' alt='Illusion Painting')
        h3.cell__caption Illusion Painting
      .cell(id='cell-20')
        img(src='/images/home-projects-5.jpg' alt='Crochet Taco Pillow')
        h3.cell__caption Crochet Taco Pillow
      .cell(id='cell-21')
        CardCarousel(:slidesLength='2')
          img.slide(src='/images/home-projects-4.jpg' alt='Hersheys Bar Gift Wrapping')
          img.slide(src='/images/home-projects-4b.jpg' alt='Hersheys Bar Gift Wrapping')
        h3.cell__caption Hershey's Bar<br>Gift Wrapping
      .cell(id='cell-22')
        img(src='/images/home-projects-3.jpg' alt='Hamburger Gift Wrapping')
        h3.cell__caption Hamburger Gift Wrapping
      .cell(id='cell-23')
        CardCarousel(:slidesLength='3')
          img.slide(src='/images/home-projects-2.jpg' alt='Cardboard Toilet Giftbox')
          img.slide(src='/images/home-projects-2b.jpg' alt='Cardboard Toilet Giftbox')
          img.slide(src='/images/home-projects-2c.jpg' alt='Cardboard Toilet Giftbox')
        h3.cell__caption Cardboard Toilet Giftbox
      .cell(id='cell-24')
        CardCarousel(:slidesLength='2')
          img.slide(src='/images/home-projects-1.jpg' alt='Cardboard Guitar Giftbox')
          img.slide(src='/images/home-projects-1b.jpg' alt='Cardboard Guitar Giftbox')
        h3.cell__caption Cardboard Guitar Giftbox
</template>

<style lang="sass" src="./index.sass"></style>  
