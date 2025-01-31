<script setup>
  import { weather } from '~/utils/data/weather'

  const d3 = useNuxtApp().$d3;
  const squareSize = 64
  const columns = 28
  const spacing = 0;
  const colors = ['#00876c', '#419b73', '#68af7a', '#8dc282', '#b2d58c', '#fffaa8', '#fcdd89', '#f8bf70', '#f3a15e', '#ec8253', '#e26150', '#d43d51'];
  const zScale = d3.scaleQuantile(weather.map((d) => d.avgTemperature),colors)

  const renderChart = (data) => {
    const rows = data.length / columns + 1
    const width = columns * (squareSize + spacing)
    const height = rows * (squareSize + spacing)

    const gridData = Array.from({ length: data.length }, (_, i) => ({
      row: Math.floor(i / columns),
      col: i % columns
    }));

    const svg = d3.select('.weather-chart')
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")

      const tooltip = d3
        .select(".weather-chart")
        .append("div")
        .attr("class", "details")
        .style("position", "absolute")
        .style("background-color", "white")
        .style("padding", "10px 8px")
        .style("border-radius", "5px")
        .style("visibility", "hidden")
        .style("font-size", "16px");

    svg.selectAll("rect")
      .data(data)
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
          .html(`<span>${d.avgTemperature}°F</span><br>${d.date}`);
        d3.select(this)
          .style("opacity", ".3")
          .attr("stroke", "#000")
          .attr("stroke-width", "3")
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", event.pageY + 10 + "px")
          .style("left", event.pageX + 10 + "px");
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke", "none")
          .style("opacity", "1")
      });
  }
  onMounted (async () => {
    const response = await fetch("https://tuwu420iv8.execute-api.us-west-1.amazonaws.com/temperatures");
    const data = await response.json();
    renderChart(data)
  })
</script>

<template lang="pug">
  .weather-graph
    .container
      .weather-graph__row
        h1.weather-graph__title San Francisco Weather Graph
        p Inspired by heatmaps and temperature blankets, this graph visualizes San Francisco's daily average temperatures starting from January 27, 2025. Each square represents a day of the year, color-coded to reflect the temperature range—from darker greens for colder days to warmer reds for hotter days. This visualization provides a clear overview of the city's mild climate and temperature trends throughout the year, offering insights into seasonal patterns at a glance. 
        p The daily average temperature is provided by #[a(href='https://www.weatherapi.com/' target='_blank' aria-label='Weather API website') Weather API]. It is retrieved daily using an AWS Lambda function and an EventBridge scheduler, stored in a MongoDB collection, and served through AWS API Gateway.
        p For more information, hover over the individual squares to see the exact average temperature and date. Best seen on desktop!
        .weather-chart
</template>

<style lang="sass" src="./index.sass"></style> 
