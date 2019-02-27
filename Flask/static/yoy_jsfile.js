d3.json("/yoy_route", function(data){
  // define the trace function.
  function makeTrace() {
    return {
      x: data.columns,
      y: data.data[i],
      mode: "lines+markers",
    type: "scatter",
    name: data.data[i][0],
    marker: {
  //    color: "#2077b4",
      symbol: "hexagram"
    }
    }
  }

  // Create empty data array for the plot
  var plot_data = []
  // Create the Traces for each plot
  for (i=0; i<data.data.length; i++) {
  var trace = makeTrace(i)
  plot_data.push(trace)
  }

  // Define the plot layout
  var layout = {
    title: "Year on Year Sector returns over a 20 year period",
    xaxis: { title: "Year" },
    yaxis: { title: "Year on Year Return (%)" }
  };

  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", plot_data, layout);
})
