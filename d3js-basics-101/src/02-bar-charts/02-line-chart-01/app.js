let w = 450;
let h = 400;

let monthlySales = [
    {month: 10, sales: 120},
    {month: 20, sales: 114},
    {month: 30, sales: 111},
    {month: 40, sales: 120},
    {month: 50, sales: 115},
    {month: 60, sales: 127},
    {month: 70, sales: 19},
    {month: 80, sales: 16},
    {month: 90, sales: 123},
    {month: 100, sales: 17},
    {month: 110, sales: 128},
    {month: 120, sales: 111},
];

var lineFun = d3.line()   //d3.svg.line() -> d3.svg removed
    .x((d) => {
        return d.month * 3;
    })
    .y((d) => {
        return h - d.sales;
    })
    //.interpolate("linear");  -> removed in D3 version 4
    //.curve(d3.curveLinear); // Plain linear
    .curve(d3.curveBasis);   //more relaxed

var svg = d3.select("body").append("svg").attrs({
    width: w,
    height: h
});
// Path draws for us based on data
// need to inject d3-path module in the classpath, this does not work without that

var viz = svg.append("path")
    .attrs({
        d: lineFun(monthlySales),
        "stroke": "purple",
        "stroke-width": 2,
        "fill": "none"
    });


var labels = svg.selectAll("text")
    .data(monthlySales)
    .enter()
    .append("text")
    .text((d, i) => {
        return d.sales
    })
    .attrs({
        x: (d, i) => {
            return d.month * 3 - 25;
        },
        y: (d, i) => {
            return h - d.sales;
        },
        "font-size": "12px",
        "font-family": "sans-serif",
        "fill": "#666666",
        "text-anchor": "start",
        "dy": "0.35em",
        "font-weight": (d, i) => {
            "use strict";
            if (i === 0 || i === monthlySales.length - 1) {
                return "bold";
            } else {
                return "normal";

            }
        }
    });

