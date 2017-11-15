let w = 200;
let h = 100;
let padding = 2;
var dataset = [5, 10, 15, 20, 25];

let svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

/*
svg.selectAll("rect")
    .data(dataset)
    .enter()  // Create rectangles if they dont exist
    .append("rect")
    .attr("x", (d, i) => {
        return i * (w / dataset.length)
    }) //elements created at 21, 42, 63 etc
    .attr("y", (d) => {
        return h - (d * 4)
    })
    .attr("width", w / dataset.length - padding)
    .attr("height", (d) => {
        return d * 4;
    });
*/

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x",(d, i) => {
        "use strict";
        let _x = i *  (w / dataset.length);
        console.log(`Value of x: ${_x} when d = ${d} and i = ${i}`);
        return _x;
    })
    .attr("y", (d, i) => {
        "use strict";
        let _y = h - (d * 4)
        console.log(`Value of y: ${_y} when d = ${d} and i = ${i}`);
        return _y;
    })
    .attr("width", (...args) => {
        return w / dataset.length - padding;
    })
    .attr("height",(d) => {
        "use strict";
        return d * 4;
    });

