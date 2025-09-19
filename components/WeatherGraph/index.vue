<script setup>
  import { weather } from '~/utils/data/weather'
  
  const d3 = useNuxtApp().$d3;
  const isExpanded = ref(true);
  const isDragging = ref(false);
  const widgetPosition = ref({ 
    top: '50vh', 
    left: '50vw',
    transform: 'translate(-50%, -50%)'
  });
  const dragOffset = ref({ x: 0, y: 0 });
  const currentTemp = ref(null);
  const currentDate = ref(null);
  const squareSize = 64
  const spacing = -1;
  const colors = ['#00876c', '#419b73', '#68af7a', '#8dc282', '#b2d58c', '#fffaa8', '#fcdd89', '#f8bf70', '#f3a15e', '#ec8253', '#e26150', '#d43d51'];
  const zScale = d3.scaleQuantile(weather.map((d) => d.avgTemperature),colors)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleWeatherWidget = () => {
    if (!isDragging.value) {
      isExpanded.value = !isExpanded.value;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const startDrag = (event) => {
    isDragging.value = true;
    const clientX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
    const clientY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
    
    // Get current position in pixels
    const currentTop = parseFloat(widgetPosition.value.top) * window.innerHeight / 100;
    const currentLeft = parseFloat(widgetPosition.value.left) * window.innerWidth / 100;
    
    dragOffset.value.x = clientX - currentLeft;
    dragOffset.value.y = clientY - currentTop;
    
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('touchend', endDrag);
    event.preventDefault();
  };

  const onDrag = (event) => {
    if (!isDragging.value) return;
    
    const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
    const clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
    
    const newLeft = clientX - dragOffset.value.x;
    const newTop = clientY - dragOffset.value.y;
    
    // Get widget element to calculate its dimensions
    const widget = document.querySelector('.weather-graph__widget');
    const widgetRect = widget ? widget.getBoundingClientRect() : { width: 300, height: 200 };
    
    // Calculate bounds considering widget size (widget center should stay within viewport)
    const halfWidth = widgetRect.width / 2;
    const halfHeight = widgetRect.height / 2;
    
    const minLeft = halfWidth;
    const maxLeft = window.innerWidth - halfWidth;
    const minTop = halfHeight;
    const maxTop = window.innerHeight - halfHeight;
    
    // Constrain position to keep widget fully within viewport
    const constrainedLeft = Math.max(minLeft, Math.min(maxLeft, newLeft));
    const constrainedTop = Math.max(minTop, Math.min(maxTop, newTop));
    
    // Convert to viewport units
    const leftVw = (constrainedLeft / window.innerWidth) * 100;
    const topVh = (constrainedTop / window.innerHeight) * 100;
    
    widgetPosition.value.left = leftVw + 'vw';
    widgetPosition.value.top = topVh + 'vh';
    
    event.preventDefault();
  };

  const endDrag = () => {
    setTimeout(() => {
      isDragging.value = false;
    }, 100); // Small delay to prevent toggle on drag end
    
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('touchend', endDrag);
  };

  const renderChart = (data) => {
    const columns = window.innerWidth <= 768 ? 10 : 30
    const rows = Math.ceil(data.length / columns)
    const width = columns * (squareSize + spacing)
    const height = rows * (squareSize + spacing)

    const gridData = Array.from({ length: data.length }, (_, i) => ({
      row: Math.floor(i / columns),
      col: i % columns
    }));
    d3.select('.weather-graph__chart').selectAll('rect').remove()
    d3.select('.weather-graph__chart').select('svg').remove()

    const svg = d3.select('.weather-graph__chart')
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")

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
      .on("click", function (_event, d) {
        // Update widget content with clicked square data
        currentTemp.value = d.avgTemperature;
        currentDate.value = d.date;
        
        d3.selectAll("rect").attr("stroke", "none")
          .attr("stroke-width", "0")
          .style("transform", "translate(0, 0)")
          .attr("height", "64")
          .attr("width", "64")
        d3.select(this)
          .attr("stroke", "#000")
          .attr("stroke-width", "10")
          .attr("height", "54")
          .attr("width", "54")
          .style("transform", "translate(5px, 5px)")
      })
      .attr("opacity", 0)
      .transition()
      .duration(500)
      .delay((d, i) => i * 15)
      .attr("opacity", 1)
  }
  onMounted (async () => {
    const response = await fetch("https://tuwu420iv8.execute-api.us-west-1.amazonaws.com/temperatures");
    const data = await response.json();
    
    // Set initial widget data to most recent temperature
    if (data && data.length > 0) {
      const mostRecent = data[data.length - 1];
      currentTemp.value = mostRecent.avgTemperature;
      currentDate.value = mostRecent.date;
    }
    
    renderChart(data)
    window.addEventListener("resize", renderChart(data));
  })

  onBeforeUnmount(() => {
    const data = {}
    window.removeEventListener("resize", renderChart(data));
    
    // Clean up any remaining drag listeners
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchmove', onDrag);
    document.removeEventListener('touchend', endDrag);
  });
</script>

<template lang="pug">
  .weather-graph
    .weather-graph__chart
      .weather-graph__widget(
        :class="{ expanded: isExpanded, dragging: isDragging }"
        :style="widgetPosition"
        @mousedown="startDrag"
        @touchstart="startDrag"
      )
        .weather-graph__widget-header
          button.weather-graph__widget-toggle(
            @click="toggleWeatherWidget"
            @mousedown.stop
            @touchstart.stop
            :aria-expanded="isExpanded"
            :aria-label="isExpanded ? 'Minimize weather info' : 'Expand weather info'"
          )
            .weather-graph__widget-toggle-icon
              img.weather-graph__widget-icon.weather-graph__widget-icon--expand(
                v-if="!isExpanded"
                src="~/assets/icons/expand.svg"
                alt="Expand"
                width="12"
                height="12"
              )
              img.weather-graph__widget-icon.weather-graph__widget-icon--collapse(
                v-else
                src="~/assets/icons/collapse.svg"
                alt="Collapse"
                width="12"
                height="12"
              )
          
          .weather-graph__widget-collapsed(v-if="!isExpanded")
            .weather-graph__widget-temp {{ currentTemp ? currentTemp + '°F' : '--°F' }}
            .weather-graph__widget-date {{ currentDate || 'Click a square' }}
        
        .weather-graph__widget-content(v-if="isExpanded")
          .weather-graph__widget-text
            h1.weather-graph__title San Francisco Weather Graph
            p Inspired by heatmaps and temperature blankets, this graph visualizes San Francisco's daily average temperatures starting from January 27, 2025 to yesterday.
            p Each square represents a day of the year, color-coded to reflect the temperature range—from darker greens for colder days to warmer reds for hotter days.
            p The daily average temperature is provided by #[a(href='https://www.weatherapi.com/' target='_blank') Weather API].
            p For more information, hover over the individual squares to see the exact average temperature and date.
</template>

<style lang="sass" src="./index.sass"></style> 
