<script setup>
  import { candy } from '~/utils/data/candy'
  const d3 = useNuxtApp().$d3;
  const types = ["None", "Sugar", "Rating"];
  const selectedType = ref('none')
  const y = ref(0);
  const y2 = ref(0);
  const y3 = ref(0);
  const y4 = ref(0);
  const y5 = ref(0);
  const reesePath = 'M228 11.1c3.8 4 9.9 4 13.7 0l7.8-8.4c3.8-4 9.2-3.6 12.1 1l6 9.5c2.9 4.6 9 5.6 13.5 2.2l9.4-7c4.5-3.4 9.8-2.1 11.8 2.9l4 10.3c1.9 5 7.7 6.9 12.8 4.3l10.6-5.4c5.1-2.6 10.1-.5 11 4.7l1.9 10.8c.9 5.2 6.2 8 11.8 6.3l11.5-3.6c5.5-1.7 10 1.2 9.9 6.4l-.2 10.9c-.1 5.3 4.5 8.9 10.3 8.1l12-1.7c5.8-.8 9.6 2.7 8.4 7.9L404 81c-1.2 5.2 2.7 9.5 8.5 9.6l12.2.3c5.9.1 8.9 4.2 6.7 9.1l-4.5 10.1c-2.2 4.9.7 9.7 6.5 10.8l11.9 2.2c5.8 1.1 7.9 5.6 4.8 10l-6.5 9.2c-3.1 4.4-1.2 9.7 4.2 11.7l11.3 4.1c5.4 2 6.7 6.7 2.7 10.6l-8.2 8.1c-4 3.9-3.1 9.3 1.8 12.2l10.3 5.8c5 2.8 5.2 7.7.5 10.9l-9.7 6.6c-4.7 3.2-4.9 8.7-.6 12.3l9 7.4c4.3 3.6 3.6 8.4-1.6 10.8l-10.9 5c-5.2 2.4-6.6 7.8-3.1 12l7.4 8.7c3.5 4.2 1.9 8.8-3.8 10.4l-11.7 3.2c-5.6 1.5-8 6.6-5.4 11.3l5.5 9.7c2.7 4.7.1 9-5.8 9.6l-12.1 1.2c-5.8.6-9.2 5.2-7.5 10.2l3.5 10.5c1.7 5-1.7 8.9-7.6 8.5l-12.2-.7c-5.9-.3-10.1 3.6-9.5 8.9l1.4 10.8c.7 5.2-3.5 8.5-9.2 7.2l-11.8-2.6c-5.7-1.3-10.7 2-11.1 7.2l-.8 10.9c-.4 5.3-5.1 7.8-10.5 5.6l-11.1-4.5c-5.4-2.2-10.9.2-12.3 5.3l-3 10.6c-1.4 5.1-6.6 6.8-11.4 3.8l-10-6.2c-4.8-3-10.8-1.5-13.2 3.3l-5.1 9.9c-2.4 4.8-7.8 5.7-12 1.9l-8.6-7.7a9.3 9.3 0 0 0-13.7 1.1l-7 9c-3.3 4.3-8.8 4.3-12.2 0l-7-9a9.3 9.3 0 0 0-13.7-1.1l-8.6 7.7c-4.2 3.7-9.6 2.8-12-1.9l-5.1-9.9c-2.4-4.8-8.4-6.2-13.2-3.3l-10 6.2c-4.8 3-10 1.3-11.4-3.8l-3-10.6c-1.4-5.1-7-7.5-12.3-5.3l-11.1 4.5c-5.4 2.2-10.1-.3-10.5-5.6l-.8-10.9c-.4-5.2-5.4-8.5-11.1-7.2L87.2 369c-5.7 1.3-9.8-1.9-9.2-7.2l1.4-10.8c.7-5.2-3.6-9.2-9.5-8.9l-12.2.7c-5.9.3-9.3-3.5-7.6-8.5l3.5-10.5c1.7-5-1.7-9.6-7.5-10.2L34 312.4c-5.8-.6-8.4-4.9-5.8-9.6l5.5-9.7c2.7-4.7.2-9.8-5.4-11.3l-11.7-3.2c-5.6-1.5-7.3-6.2-3.8-10.4l7.4-8.7c3.5-4.2 2.2-9.6-3.1-12l-10.9-5c-5.2-2.4-6-7.3-1.6-10.8l9-7.4c4.3-3.6 4-9.1-.6-12.3l-9.7-6.6c-4.7-3.2-4.4-8.1.5-10.9l10.3-5.8c5-2.8 5.8-8.3 1.8-12.2l-8.2-8.1c-4-3.9-2.7-8.7 2.7-10.6l11.3-4.1c5.4-2 7.4-7.2 4.2-11.7l-6.5-9.2c-3.1-4.4-1-9 4.8-10l12-2.2c5.7-1.1 8.7-5.9 6.5-10.8l-4.5-10.1c-2.2-4.9.8-9 6.7-9.1l12.2-.3c5.9-.1 9.7-4.4 8.5-9.6L63.2 70c-1.2-5.2 2.6-8.7 8.4-7.9l12 1.7c5.8.8 10.4-2.8 10.3-8.1l-.2-10.9c-.1-5.3 4.3-8.1 9.9-6.4l11.5 3.6c5.6 1.7 10.8-1.1 11.8-6.3l1.9-10.8c.9-5.2 5.9-7.3 11-4.7l10.6 5.4c5.1 2.6 10.9.6 12.8-4.3l4-10.3c1.9-5 7.2-6.3 11.8-2.9l9.4 7a9.2 9.2 0 0 0 13.5-2.2l6-9.5c2.9-4.6 8.4-5 12.1-1z'

  const candyList = computed(() => {
    if (selectedType.value === 'none') {
      candy.sort((a,b) => a.label.localeCompare(b.label))
    }
    return candy.sort((a,b) => b[selectedType.value] - a[selectedType.value])
  })

  const showSugar = () => {
    const svg = d3.select('#chart')

    svg.selectAll("rect.sugar")
      .data(candyList.value)
      .enter()
      .append("rect")
      .attr("id", function(d){
        return `${d.id}-id`;
      })
      .attr("clip-path", function(d){
        if (d.label === `Reese's Peanut Butter cup`) {
          return 'url(#reeses-clip)'
        }
        return `url(#${d.id}-choco)`;
      })
      .attr('class', 'sugar')
      .attr("width", 0)
      .attr("height", function(d){
        return d.dimensions[1] - d.wrapOffset;
      })
      .attr("x", 100)
      .attr("y", function(d, i){
        if (i > 0){
          y3.value = y3.value + (candy[i-1].dimensions[1]) + 10
        }
        const curr = y3.value + d.wrapOffset/2
        return curr;
      })
      .attr("fill", "url(#sugar)")
      .transition()
      .delay(1200)
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr("width", function(d){
        return d.sugar * (d.dimensions[0] - (d.offset ? 5 : 200));
      })

    svg.selectAll("text.tooltip")
      .data(candyList.value)
      .enter()
      .append("text")
      .attr("class", "tooltip")
      .attr("text-anchor", "middle")
      .text((d) => d.sugar * 100 + "%")
      .style("opacity",0)
      .attr("x", (d) => {
        const offset = d.offset ? 68 : 0
        return 32 + d.dimensions[0]/2 + offset
      })
      .attr("y", function(d, i){
        if (i > 0){
          y5.value = y5.value + (candy[i-1].dimensions[1]) + 10
        }
        const curr = y5.value + d.dimensions[1]/2 + 32
        return curr;
      })
      .transition()
      .delay(1200)
      .duration(800)
      .ease(d3.easeCubicIn)
      .style("opacity",1)
  }

  const showRatings = () => {
    const svg = d3.select('#chart')

    svg.selectAll("text.tooltip")
      .data(candyList.value)
      .enter()
      .append("text")
      .attr("class", "tooltip")
      .attr("text-anchor", "middle")
      .text((d) => d.rating + "%")
      .style("opacity",0)
      .attr("x", (d) => {
        const offset = d.offset ? 68 : 0
        return 32 + d.dimensions[0]/2 + offset
      })
      .attr("y", function(d, i){
        if (i > 0){
          y2.value = y2.value + (candy[i-1].dimensions[1]) + 10
        }
        const curr = y2.value + d.dimensions[1]/2 + 32
        return curr;
      })
      .transition()
      .delay(400)
      .duration(800)
      .ease(d3.easeCubicIn)
      .style("opacity",1)
  }

  const setTypes = type => {
    selectedType.value = type
  }

  const renderChart = () => {
    const svg = d3.select('#chart')
    const defs = svg.append('svg:defs')

    defs.selectAll("pattern")
      .data(candyList.value)
      .join(
        enter => {
          const patterns = enter
            .append("pattern")
            .attr('id', (i) => i.id)
            .attr('width','1')
            .attr('height','1')
          patterns
            .append("image")
            .attr("width", (i) => i.dimensions[0])
            .attr("height", (i) => i.dimensions[1])
          return patterns;
        }
      )
      .select("image")
      .attr("xlink:href", (i) =>{return `/images/halloween-candy/${i.id}.png`})

    defs.append("pattern")
      .attr('id', 'sugar')
      .attr('width','1')
      .attr('height','1')
      .append("image")
      .attr("xlink:href", '/images/halloween-candy/sugar-background.jpg')
      .attr("width", 966)
      .attr("height", 667);

    svg.selectAll("rect")
      .data(candyList.value)
      .enter()
      .append("rect")
        .attr('class', 'base')
        .attr("width", function(d){
          return d.dimensions[0];
        })
        .attr("height", function(d){
          return d.dimensions[1];
        })
        .attr("x",function(d){
          return -d.dimensions[0]
        })
        .attr("y", function(d, i){
          if (i > 0){
            y.value = y.value + (candy[i-1].dimensions[1]) + 10
          }
          const curr = y.value
          return curr;
        })
        .style("fill", (i) =>{return `url(#${i.id})`})
        .transition()
        .duration(1000)
        .ease(d3.easeCubicOut)
        .attr("x",function(d){
          return d.offset ? 90 : 0;
        })

    defs.selectAll("rect.chocolate")
      .data(candyList.value)
      .enter()
      .append("clipPath")
      .attr('class', 'chocolate')
      .attr("id", function(d){
        return `${d.id}-choco`;
      }) 
      .append("rect")
      .attr("width", function(d){
        return d.dimensions[0] - (d.offset ? 20 : 200);
      })
      .attr("height", function(d){
        return d.dimensions[1] - d.wrapOffset;
      })
      .attr("rx", function(d){
        return d.radius
      })
      .attr("x", 100)
      .attr("y", function(d, i){
        if (i > 0){
          y4.value = y4.value + (candy[i-1].dimensions[1]) + 10
        }
        const curr = y4.value + d.wrapOffset/2
        return curr;
      })

    defs.append("clipPath")
      .attr("id", 'reeses-clip')
      .append("path")
      .attr('d', reesePath)
      .attr('transform', 'translate(100, 778)')
  }
  
  watch(selectedType, () => {
    d3.select('#chart').selectAll('rect').remove()
    d3.select('#chart').select('defs').remove()
    d3.select('#chart').selectAll('text').remove()
    y.value = 0
    y4.value = 0
    y5.value = 0
    renderChart()
    if (selectedType.value === 'sugar'){
      y3.value = 0
      showSugar()
    } else if (selectedType.value === 'rating') {
      y2.value = 0
      showRatings()
    }
  })

  onMounted(() => {
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', () => {
        const selected = radioButton.value.toLowerCase();
        setTypes(selected)
      });
    });

    renderChart()
  });
</script>

<template lang="pug">
  .halloween-chart
    .container
      .halloween-chart__container
        .halloween-chart__row
          h1.halloween-chart__title Halloween Candy Chocolate Bar Graph
          fieldset.halloween-chart__type-container
            .halloween-chart__type-button(v-for='(type,i) in types' :key='`group-type-${i}`')
              input(type='radio' :id='`type-${i}`' :value='type' name='type' :checked='type === "None" ? true : false')
              label(:for='`type-${i}`' v-html='type')
          p Drawing from the #[a(href='https://www.kaggle.com/datasets/fivethirtyeight/the-ultimate-halloween-candy-power-ranking') Ultimate Halloween Candy Power Ranking] dataset, Drawing from the Ultimate Halloween Candy Power Ranking dataset, I designed a horizontal bar graph to showcase a comparison of popular fun-sized chocolate bars. The graph highlights both the sugar content and ratings of these treats, providing a clear and engaging visual representation of how sweetness and popularity align. It's a fun way to explore the data and see what makes these candies stand out.
          h2.halloween-chart__subtitle Sugar
          p According to the dataset, the sugar value represents the percentile of sugar the candy falls under within the data set. I used this value to compare the chocolate bars, sorting by highest to lowests value.<br><br>When you click on the 'Sugar' button, the bars will update and slowly reveal the percentage value relative to the size of the chocolate bar would be without the wrapper.
          h2.halloween-chart__subtitle Rating
          p According to the dataset, the winpercent(rating in my graph) value represents the overall win percentage according to 269,000 matchups. I used this value to compare the chocolate bars, sorting by highest to lowests value.<br><br>When you click on the 'Rating' button, the bars will update and slowly reveal the percentage value as a text component.
        .halloween-chart__row
          .halloween-chart__chart
            svg#chart(viewBox='0 0 760 4900')
</template>

<style lang="sass" src="./index.sass"></style>  
