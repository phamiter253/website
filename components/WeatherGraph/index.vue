<script setup>
  import { weather } from '~/utils/data/weather'
  
  const d3 = useNuxtApp().$d3;
  const squareSize = 64
  const spacing = -1;
  const colors = ['#00876c', '#419b73', '#68af7a', '#8dc282', '#b2d58c', '#fffaa8', '#fcdd89', '#f8bf70', '#f3a15e', '#ec8253', '#e26150', '#d43d51'];
  const zScale = d3.scaleQuantile(weather.map((d) => d.avgTemperature),colors)

  const renderChart = (data) => {
    const columns = window.innerWidth <= 768 ? 7 : 21
    const rows = Math.ceil(data.length / columns) + 1.5
    const width = columns * (squareSize + spacing)
    const height = rows * (squareSize + spacing)

    const gridData = Array.from({ length: data.length }, (_, i) => ({
      row: Math.floor(i / columns),
      col: i % columns
    }));
    d3.select('.weather-chart').selectAll('rect').remove()
    d3.select('.weather-chart').select('svg').remove()
    d3.select('.weather-chart').select('div').remove()

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
          .attr("stroke", "#000")
          .attr("stroke-width", "10")
          .attr("height", "54")
          .attr("width", "54")
          .style("transform", "translate(5px, 5px)")
      })
      .on("mousemove", function (event) {
        const tooltipWidth = tooltip.node().getBoundingClientRect().width;
        const tooltipHeight = tooltip.node().getBoundingClientRect().height;
        const padding = 16;

        const svg = d3.select("svg").node();
        const svgRect = svg.getBoundingClientRect();

        // Convert pageX/Y to SVG-relative
        let xPos = event.pageX - svgRect.left - (tooltipWidth/4);
        let yPos = event.pageY - svgRect.top - tooltipHeight + padding;

        // Clamp to right edge
        if (xPos + tooltipWidth > svgRect.width) {
          xPos = event.pageX - svgRect.left - tooltipWidth;
        }

        // Clamp to left edge
        if (xPos < 0) {
          xPos = 0 + (tooltipWidth/2);
        }

        // Clamp to top edge
        if (yPos < 0) {
          yPos = 0;
        }

        tooltip
          .style("left", `${xPos}px`)
          .style("top", `${event.pageY - tooltipHeight + padding}px`);
      })

      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");
        d3.select(this)
          .attr("height", "64")
          .attr("width", "64")
          .style("transform", "translate(0, 0)")
          .attr("stroke", "none")
      })
      .attr("opacity", 0)
      .transition()
      .duration(300)
      .delay((d, i) => i * 50)
      .attr("opacity", 1)
  }
  onMounted (async () => {
    const response = await fetch("https://tuwu420iv8.execute-api.us-west-1.amazonaws.com/temperatures");
    const data = await response.json();
    renderChart(data)
    window.addEventListener("resize", renderChart(data));
  })

  onBeforeUnmount(() => {
    const data = {}
    window.removeEventListener("resize", renderChart(data));
  });
</script>

<template lang="pug">
  .weather-graph
    .container
      .weather-graph__row
        h1.weather-graph__title San Francisco Weather Graph
        p Inspired by heatmaps and temperature blankets, this graph visualizes San Francisco's daily average temperatures starting from January 27, 2025 to yesterday. Each square represents a day of the year, color-coded to reflect the temperature range—from darker greens for colder days to warmer reds for hotter days. This visualization provides a clear overview of the city's mild climate and temperature trends throughout the year, offering insights into seasonal patterns at a glance. 
        p The daily average temperature is provided by #[a(href='https://www.weatherapi.com/' target='_blank' aria-label='Weather API website') Weather API]. It is retrieved daily using an AWS Lambda function and an EventBridge scheduler, stored in a MongoDB collection, and served through AWS API Gateway.
        p For more information, hover over the individual squares to see the exact average temperature and date.
        .weather-chart
</template>

<style lang="sass" src="./index.sass"></style> 
