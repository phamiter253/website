<script setup>
  import { cells } from '~/utils/data/cells'

  const { gsap, Flip } = useGsap();
  const catergories = ["All", "Art", "Coding", "Food"];

  const selectedCategory = ref('all')

  const filteredItems = computed(() => {
    if (selectedCategory.value === 'all') {
      return cells
    }
    return cells.filter(cell => cell.category === selectedCategory.value)
  })

  const setCategory = category => {
    selectedCategory.value = category
  }

  const animateUp = () => {
    const targets = gsap.utils.toArray(".cell:not(.hide), .cell-large:not(.hide)");
    gsap.from(targets, {autoAlpha: 0, yPercent: 30, stagger: 0.04});
  }

  onMounted(() => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const smallElements = document.querySelectorAll(".cell");
    const targets = gsap.utils.toArray(".cell, .cell-large");

    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', () => {
        const selectedValue = radioButton.value.toLowerCase();
        setCategory(selectedValue)
      });
    });
    animateUp()

    smallElements.forEach((element) => {
      element.addEventListener("click",()=>{
        const state = Flip.getState(targets);
        element.classList.toggle("active");
        Flip.from(state, {
          duration: .3,
          ease: "power1.in"
        });
        if (element.classList.contains("active")) {
          gsap.to(window, {
            duration: .5, 
            delay: .4,
            scrollTo:{y:"#"+element.id, offsetY:80}
          });
        }
      })
    });
  });
</script>

<template lang="pug">
  .grid
    .container
      fieldset.grid__catergory-container
        .grid__catergory-button(v-for='(catergory,i) in catergories' :key='`group-catergory-${i}`')
          input(type='radio' :id='`catergory-${i}`' :value='catergory' name='catergory' :checked='catergory === "All" ? true : false')
          label(:for='`catergory-${i}`' v-html='catergory')
      .grid__container
        div(v-for='(cell,i) in cells' :class='[cell.type, { "hide": !filteredItems.includes(cell) }]' :id='"cell-"+i')
          .content(v-if='cell.type == "cell"')
            img(v-if='cell.children.length == 0' :src='cell.image' :alt='cell.name')
            CardCarousel(v-else :slidesLength='cell.children.length')
              img.slide(v-for='(image,j) in cell.children' :src='image' :alt='cell.name +"-"+ j')
            h3.cell__caption(v-html='cell.name')
          a.content(v-if='cell.type == "cell-large"' :href='cell.link')
            img.slide(:src='cell.image' :alt='cell.name +"-"+ i')
            h2.cell__title(v-html='cell.name' :style='{ "fontFamily": cell.font}')
</template>

<style lang="sass" src="./index.sass"></style>  
