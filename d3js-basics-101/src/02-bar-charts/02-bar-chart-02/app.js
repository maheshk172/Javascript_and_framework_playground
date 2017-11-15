let w = 300;
let h = 300;
var padding = 2;
var dataset = [5, 10, 14, 20, 25];

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);


/*
svg.selectAll("rect").data(dataset).enter().append("rect")
    .attr("x", (d, i) => {
        return i * (w / dataset.length);
    })
    .attr("y", (d, i) => {
        return h - (d * 4);
    })
    .attr("width", w / dataset.length - padding)   // divide total width into number of items in array
    //.attr("fill", "blue")    // Static colors
    .attr("height", (d, i) => {
        return d * 4;
    })
    .attr("fill", (d, i) => {
        "use strict";
        //return "blue";
        //return `rgb(${d*10}, 0,0)`;     //This gives flavors of Red
        //return `rgb(0,${d*10} ,0)`;     //This gives flavors of Red
        return `rgb(0, 0, ${d * 10})`;     //This gives flavors of Red
    });
*/

// Converted into MultiValue Map
// Add d3-selection-multi to add support for .attrs, recent change in d3 4.11+



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
            //return "blue";
            //return `rgb(${d*10}, 0,0)`;     //This gives flavors of Red
            //return `rgb(0,${d * 10} ,0)`;     //This gives flavors of Red
            //return `rgb(0, 0, ${d * 10})`;     //This gives flavors of Red
            return colorPicker(d);
        }
    });
