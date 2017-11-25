let w = 400;
let h = 100;


function buildLine(ds) {

    if (!ds) {
    } else {

        var lineFun = d3.line()
            .x((d) => {
                //console.log('X: ', d);
                return ((d.month - 20130101) / 3.25)
            })
            .y((d) => {
                //console.log('Y: ', d);
                return h - d.sales
            })
            .curve(d3.curveBasis);


        var svg = d3.select("body").append("svg")
            .attrs({
                width: w,
                height: h
            });

        var viz = svg.append("path").attrs({
            d: lineFun(ds),
            "stroke": "purple",
            "stroke-width": 2,
            "fill": "none"
        });

        var labels = svg.selectAll("text")
            .data(ds)
            .enter()
            .append("text")
            .text((d, i) => {
                return d.sales;
            })
            .attrs({
                x: (d, i) => {
                    return (d.month - 20130101) / 3.25 - 25;
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
                    if (i === 0 || i === ds.length - 1) {
                        return "bold";
                    } else {
                        return "normal";

                    }
                }
            });
    }
}


var ds;

d3.csv("MonthlySales.csv", (error, data) => {

    if(error) {
        console.error(error);
    } else {
        ds = data;
        console.log(ds);
    }

    buildLine(ds);
});


