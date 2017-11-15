let w = 300;
let h = 300;
var padding = 2;
var dataset = [1, 50, 22, 46, 67, 23, 5, 10, 14, 20, 25];

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);

var colorPicker = (v) => {
    "use strict";
    if (v <= 20) {
        return "#666666";
    } else if (v > 20) {
        return "#FF0033";
    }
};

svg.selectAll("rect").data(dataset).enter().append("rect")
    .attrs({
        x: (d, i) => {
            return i * (w / dataset.length);
        },
        y: (d, i) => {
            return h - (d * 4);
        },
        width: w / dataset.length - padding,
        height: (d, i) => {
            return d * 4;
        },
        fill: (d, i) => {
            "use strict";
            return colorPicker(d);
        }
    });

svg.selectAll("text").data(dataset).enter().append("text")
    .text((d) => {
        "use strict";
        return d;
    })
    .attrs({
        "text-anchor": "middle",
        x: (d, i) => {
            //return i * (w / dataset.length) + (w/dataset.length - padding)/2;
            return i * (w / dataset.length) + (w/dataset.length - padding)/2;
        },
        y: (d, i) => {
            return h - (d * 4) + 20;
        },
        "font-family":"sans-serif",
        "font-size":12,
        "fill": "#ffffff"
    });