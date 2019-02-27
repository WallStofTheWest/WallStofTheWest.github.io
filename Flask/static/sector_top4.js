function duration_selected_top(x) {
	y = parseFloat(x) +1
	//call the plot function
	plot_top(y)
}
// define plot function
function plot_top(duration) {
    d3.json("/sector_yoy_top4", function(data){
// define the trace function
	function makeTrace() {
	  return {
		x: data.columns.slice(0,duration),
		y: data.data[i],
		mode: "lines+markers",
		type: "scatter",
		name: data.data[i][0],
		marker: {
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
	  title: `Year on Year Top 4 Sectors returns over a ${duration-1} year period`,
	  titlefont:{family: 'Arial, sans-serif',
				 size: 18,
				 color: '#2C3E50'},
	  xaxis: {title: "Year",
			  titlefont:{family: 'Arial, sans-serif',
						 size: 15,
						 color: '#2C3E50'},
			  autotick: false,
			  ticks: 'outside',
			  //tick0: 1998,
			  dtick: 1,
			  ticklen: 5,
			  tickwidth: 5,
			  tickcolor: '#2C3E50'
			},
	  yaxis: {title: "Year on Year Return (%)",
			  titlefont:{family: 'Arial, sans-serif',
						 size: 15,
						 color: '#2C3E50'},}
	};

	// Plot the chart to a div tag with id "plot"
	Plotly.newPlot("plot_top4", plot_data, layout,{responsive: true});
})
}
plot_top(23)