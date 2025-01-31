<script setup>
import { cells } from '~/utils/data/cells';
const { gsap, Flip } = useGsap();

// Categories
const categories = ["All", "Art", "Coding", "Food"];
const selectedCategory = ref("all");

// Filtered items based on selected category
const filteredItems = computed(() =>
  selectedCategory.value === "all"
    ? cells
    : cells.filter((cell) => cell.category.toLowerCase() === selectedCategory.value)
);

// Set selected category
const setCategory = (category) => {
  selectedCategory.value = category.toLowerCase();
};

// Animation on items appearing
const animateUp = () => {
  const targets = gsap.utils.toArray(".cell:not(.hide), .cell-large:not(.hide)");
  gsap.from(targets, { autoAlpha: 0, yPercent: 30, stagger: 0.04 });
}

// Event delegation for cell clicks
const handleCellClick = (event) => {
  event.preventDefault();
  const target = event.target.closest(".cell");
  if (!target) return;

  const allTargets = gsap.utils.toArray(".cell, .cell-large");
  const state = Flip.getState(allTargets);

  target.classList.toggle("active");

  Flip.from(state, {
    duration: 0.3,
    ease: "power1.in",
  });

  if (target.classList.contains("active")) {
    gsap.to(window, {
      duration: 0.5,
      delay: 0.4,
      scrollTo: { y: "#" + target.id, offsetY: 80 },
    });
  }
};

function selectRadio(inputId) {
  const radioInput = document.getElementById(inputId);

  if (radioInput) {
    radioInput.checked = true;
    radioInput.focus();
    setCategory(radioInput.value)
  }
}

onMounted(() => {
  const gridContainer = document.querySelector(".grid__container");
  gridContainer.style.pointerEvents = 'none';

  animateUp();

  setTimeout(() => {
    gridContainer.style.pointerEvents = 'auto';
  }, cells.length * 40);

  const categoryContainer = document.querySelector(".grid__catergory-container");
  categoryContainer.addEventListener("change", (event) => {
    setCategory(event.target.value);
  });
});
</script>

<template lang="pug">
.grid
  .container
    fieldset.grid__catergory-container
      .grid__catergory-button(v-for='(category, i) in categories' :key='`group-category-${i}`' )
        input(type='radio' :id='`category-${i}`' :value='category' name='category' :checked='category === "All"')
        label(:for='`category-${i}`' v-html='category' tabindex='0' @keyup.enter="selectRadio(`category-${i}`)")
    .grid__container
      template(v-for='(cell, i) in cells' :key='"cell-"+i')
        .cell(v-if='cell.type == "cell"' 
          :class='{ "hide": !filteredItems.includes(cell) }' 
          tabindex="0"
          :id='"cell-"+i'
          @click="(e) => handleCellClick(e)"
          @keyup.enter="(e) => handleCellClick(e)"
        )
          img(v-if='cell.children.length === 0' :src='cell.image' :alt='cell.name')
          CardCarousel(v-else :slidesLength='cell.children.length')
            img.slide(v-for='(image, j) in cell.children' :src='image' :alt='`${cell.name}-${j}`')
          h3.cell__caption(v-html='cell.name')

        a.cell-large(v-if='cell.type == "cell-large"'
          :href='cell.link'
          :class='{ "hide": !filteredItems.includes(cell) }'
          tabindex="0"
          :id='"cell-"+i'
        )
          img.slide(:src='cell.image' :alt='`${cell.name}-${i}`')
          h2.cell__title(v-html='cell.name' :style='{ fontFamily: cell.font }')

</template>

<style lang="sass" src="./index.sass"></style>
