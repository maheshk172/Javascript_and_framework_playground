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
};


function showTotal(ds) {
    var table = d3.selectAll("body").append("table");

    let salesTotal = 0.0;
    let salesAverage = 0.0;
    let matrices = [];


    for(let i=0; i< ds.length; i++) {
        salesTotal += ds[i]['sales']*1;
    }

    salesAverage = salesTotal/ds.length;

    matrices.push("Sales Total : " + salesTotal);
    matrices.push("Sales Average: " + salesAverage.toFixed(2));


    // Only one row data
    /*table.selectAll('tr')
        .data([1])
        .enter()
        .append('tr')
        .append('td')
        .text("Sales Total:
         " + salesTotal);*/

    table.selectAll('tr')
        .data(matrices)
        .enter()
        .append("tr")
        .append("td")
        .text((d) => {
        return d;
        });





}




d3.csv("MonthlySales.csv", (error, data) => {
    let ds = data;

    if(error) {
        console.error(error);
    } else {
        ds = data;
        console.log(ds);
    }

    buildLine(ds);
    showTotal(ds);

});


