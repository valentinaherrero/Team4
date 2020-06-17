d3.json("http://pridetrip.herokuapp.com/pridedata_avg").then(payment=>{
    var test = payment.results
    console.log(test)
    var location = test.map(x => x.dozone);
    console.log(location)

    var avgTip = test.map(x => x.avg_tip_amount)
    console.log(avgTip)

    // Build a Bubble Chart
    var bubbleLayout = {
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      margin: { t: 100}
    };
    var bubbleData = [
      {
        x: location,
        y: avgTip,
         text: location,
        mode: "markers",
        marker: {
          size: avgTip,
        //  color: otu_ids,
          colorscale: "Earth"
        }
      }
    ];

    Plotly.newPlot("svg-area", bubbleData, bubbleLayout);

  })




// // Dataset we will be using to set the height of our rectangles.
// console.log(avgTip);

// // Setting the dimensions for the SVG container
// var svgHeight = 1000;
// var svgWidth = 1000;

// var svg = d3
//   .select("#svg-area")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // svgGroup now refers to the `g` (group) element appended.
// // The SVG group would normally be aligned to the top left edge of the chart.
// // Now it is offset to the right and down using the transform attribute
// var svgGroup = svg.append("g")
//   .attr("transform", "translate(50, 100)");

// // Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
// svgGroup.selectAll("rect")
//   .data(avgTip)
//   .enter()
//   .append("rect")
//   .attr("width", 5)
//   .attr("height", function(data) {
//     return data * 100;
//   })
//   .attr("x", function(data, index) {
//     return index * 6;
//   })
//   .attr("y", function(data) {
//     return 600 - data * 100;
//   })
//   .attr("class", "bar");
  


