<script setup>
  import { cells } from '~/utils/data/cells'
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
        div(v-for='(cell,i) in cells' :class='cell.type' :id='"cell-"+i')
          .content(v-if='cell.type == "cell"')
            img(v-if='cell.children.length == 0' :src='cell.image' :alt='cell.name')
            CardCarousel(v-else :slidesLength='cell.children.length')
              img.slide(v-for='(image,j) in cell.children' :src='image' :alt='cell.name +"-"+ j')
            h3.cell__caption(v-html='cell.name')
          a.content(v-if='cell.type == "cell-large"' :href='cell.link')
            img.slide(:src='cell.image' :alt='cell.name +"-"+ j')
            h2.cell__title(v-html='cell.name' :style='{ "fontFamily": cell.font}')
</template>

<style lang="sass" src="./index.sass"></style>  
