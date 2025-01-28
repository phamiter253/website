<script setup>
// const { data, error } = await useFetch('/api/mongodb');

// if (error.value) {
//   console.error('Failed to fetch data:', error.value);
// }
  import { weather } from '~/utils/data/weather'
  const d3 = useNuxtApp().$d3;
  const squareSize = 128
  const columns = 7
  const spacing = 0;
  const rows = 53
  const width = columns * (squareSize + spacing)
  const height = rows * (squareSize + spacing)

  const colors = ['#00876c', '#419b73', '#68af7a', '#8dc282', '#b2d58c', '#fffaa8', '#fcdd89', '#f8bf70', '#f3a15e', '#ec8253', '#e26150', '#d43d51'];
  const zScale = d3.scaleQuantile(weather.map((d) => d.avgTemperature),colors)

  const gridData = Array.from({ length: rows * columns }, (_, i) => ({
    row: Math.floor(i / columns),
    col: i % columns
  }));

  const renderChart = () => {
    const svg = d3.select('.weather-chart')
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")

      const tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "details")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("border", "1px solid black")
        .style("padding", "5px")
        .style("border-radius", "5px")
        .style("visibility", "hidden")
        .style("font-size", "16px");

    svg.selectAll("rect")
      .data(weather)
      .enter()
      .append("rect")
      .attr("x", (_,i) => gridData[i].col * (squareSize + spacing))
      .attr("y", (_,i) => gridData[i].row * (squareSize + spacing))
      .attr("width", squareSize)
      .attr("height", squareSize)
      .attr("fill", function(d){
        return zScale(d.avgTemperature)
      })
      .on("mouseover", function (event, d) {
        tooltip
          .style("visibility", "visible")
          .html(`${d.date}<br>Temp: ${d.avgTemperature}°F`); // Tooltip content
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", ".3")
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", event.pageY + 10 + "px")
          .style("left", event.pageX + 10 + "px"); // Position tooltip near cursor
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden"); // Hide tooltip
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", "1")
      });

  }

  onMounted(() => {
    renderChart()
  });
</script>

<template lang="pug">
  .weather-graph
    .container
      .weather-graph__row
        h1.weather-graph__title San Francisco Weather Graph
        p More Information Coming Soon
        .weather-chart
        //pre {{weather}}
</template>

<style lang="sass" src="./index.sass"></style> 
