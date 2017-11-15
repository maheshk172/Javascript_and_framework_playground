function drawRectangle() {
    d3.select("body")
        .append("svg")
        .append("rect")
        .attr("width", "100")
        .attr("height", "100")
        .style("fill", "red");
}

function drawCircle() {
    "use strict";

    d3.select("body")
        .append("svg")
        .attr("width", "200")   //SVG Canvas Width
        .attr("height", "200")  //SVG Canvas Height
        .style("border", "1px solid black;") //This did not worked, no border drawn
        .append("circle")
        .attr("cx", "100") // X Axis Location on page/canvas
        .attr("cy", "100")  // y axis location on page/canvas
        .attr("r", "25")
        .style("fill", "purple");
}

function drawText() {
    "use strict";
    d3.select("body")
        .append("svg")
        .attr("width", "200")   //SVG Canvas Width
        .attr("height", "200")  //SVG Canvas Height
        .append("text")
        .text("Easy Peasy")
        .attr("x",0)
        .attr("y", 25)
        .style("fill","blue");



}