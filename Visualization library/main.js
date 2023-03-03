// Create the SVG canvas
var svg = d3.select("#chart")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

// Create the circle
svg.append("circle")
  .attr("cx", 250)
  .attr("cy", 250)
  .attr("r", 50)
  .attr("fill", "blue");
