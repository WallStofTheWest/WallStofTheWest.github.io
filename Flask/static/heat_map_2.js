d3.json("/sector_rank_filter", function(rand_data_10){
  FusionCharts.ready(function() {
  var salesHMChart = new FusionCharts({
      type: 'heatmap',
      renderAt: 'chart-container2',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "Sector Ranking",
          "subcaption": "10 Years data",
          "xAxisName": "Year",
          "yAxisName": "Ranking",
          "showValues": "1",
          "showPlotBorder": "1",
          "mapByCategory": "1",
		  "toolTipColor": "#ffffff",
		  "toolTipBorderThickness": "0",
		  "toolTipBgColor": "#000000",
		  "toolTipBgAlpha": "80",
		  "toolTipBorderRadius": "2",
		  "toolTipPadding": "5",
        },
        "rows": {
          "row": [{
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "11",
              "label": "11"
            }
          ]
        },
        "columns": {
          "column": [{
              "id": "2010",
              "label": "2010"
            },
            {
              "id": "2011",
              "label": "2011"
            },
            {
              "id": "2012",
              "label": "2012"
            },
            {
              "id": "2013",
              "label": "2013"
            },
            {
              "id": "2014",
              "label": "2014"
            },
            {
              "id": "2015",
              "label": "2015"
            },
            {
              "id": "2016",
              "label": "2016"
            },
            {
              "id": "2017",
              "label": "2017"
            },
            {
              "id": "2018",
              "label": "2018"
            },
            {
              "id": "2019",
              "label": "2019"
            }
          ]
        },
        "dataset": [{
          "data": [{
              "rowid": "1",
              "columnid": "2019",
              "displayValue": rand_data_10['1'][0],
              "colorRangeLabel": rand_data_10['1'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2019",
              "displayValue": rand_data_10['2'][0],
              "colorRangeLabel": rand_data_10['2'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2019",
              "displayValue": rand_data_10['3'][0],
              "colorRangeLabel": rand_data_10['3'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2019",
              "displayValue": rand_data_10['4'][0],
              "colorRangeLabel": rand_data_10['4'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2019",
              "displayValue": rand_data_10['5'][0],
              "colorRangeLabel": rand_data_10['5'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2019",
              "displayValue": rand_data_10['6'][0],
              "colorRangeLabel": rand_data_10['6'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2019",
              "displayValue": rand_data_10['7'][0],
              "colorRangeLabel": rand_data_10['7'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2019",
              "displayValue": rand_data_10['8'][0],
              "colorRangeLabel": rand_data_10['8'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2019",
              "displayValue": rand_data_10['9'][0],
              "colorRangeLabel": rand_data_10['9'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 9"
			  
            },
            {
              "rowid": "10",
              "columnid": "2019",
              "displayValue": rand_data_10['10'][0],
              "colorRangeLabel": rand_data_10['10'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2019",
              "displayValue": rand_data_10['11'][0],
              "colorRangeLabel": rand_data_10['11'][0],
			  "tllabel": "Year: 2019",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2018",
              "displayValue": rand_data_10['1'][1],
              "colorRangeLabel": rand_data_10['1'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2018",
              "displayValue": rand_data_10['2'][1],
              "colorRangeLabel": rand_data_10['2'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2018",
              "displayValue": rand_data_10['3'][1],
              "colorRangeLabel": rand_data_10['3'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2018",
              "displayValue": rand_data_10['4'][1],
              "colorRangeLabel": rand_data_10['4'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2018",
              "displayValue": rand_data_10['5'][1],
              "colorRangeLabel": rand_data_10['5'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2018",
              "displayValue": rand_data_10['6'][1],
              "colorRangeLabel": rand_data_10['6'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2018",
              "displayValue": rand_data_10['7'][1],
              "colorRangeLabel": rand_data_10['7'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2018",
              "displayValue": rand_data_10['8'][1],
              "colorRangeLabel": rand_data_10['8'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2018",
              "displayValue": rand_data_10['9'][1],
              "colorRangeLabel": rand_data_10['9'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 9"
			  
            },
            {
              "rowid": "10",
              "columnid": "2018",
              "displayValue": rand_data_10['10'][1],
              "colorRangeLabel": rand_data_10['10'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2018",
              "displayValue": rand_data_10['11'][1],
              "colorRangeLabel": rand_data_10['11'][1],
			  "tllabel": "Year: 2018",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2017",
              "displayValue": rand_data_10['1'][2],
              "colorRangeLabel": rand_data_10['1'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2017",
              "displayValue": rand_data_10['2'][2],
              "colorRangeLabel": rand_data_10['2'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2017",
              "displayValue": rand_data_10['3'][2],
              "colorRangeLabel": rand_data_10['3'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2017",
              "displayValue": rand_data_10['4'][2],
              "colorRangeLabel": rand_data_10['4'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2017",
              "displayValue": rand_data_10['5'][2],
              "colorRangeLabel": rand_data_10['5'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2017",
              "displayValue": rand_data_10['6'][2],
              "colorRangeLabel": rand_data_10['6'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2017",
              "displayValue": rand_data_10['7'][2],
              "colorRangeLabel": rand_data_10['7'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2017",
              "displayValue": rand_data_10['8'][2],
              "colorRangeLabel": rand_data_10['8'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2017",
              "displayValue": rand_data_10['9'][2],
              "colorRangeLabel": rand_data_10['9'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2017",
              "displayValue": rand_data_10['10'][2],
              "colorRangeLabel": rand_data_10['10'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2017",
              "displayValue": rand_data_10['11'][2],
              "colorRangeLabel": rand_data_10['11'][2],
			  "tllabel": "Year: 2017",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2016",
              "displayValue": rand_data_10['1'][3],
              "colorRangeLabel": rand_data_10['1'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2016",
              "displayValue": rand_data_10['2'][3],
              "colorRangeLabel": rand_data_10['2'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2016",
              "displayValue": rand_data_10['3'][3],
              "colorRangeLabel": rand_data_10['3'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2016",
              "displayValue": rand_data_10['4'][3],
              "colorRangeLabel": rand_data_10['4'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2016",
              "displayValue": rand_data_10['5'][3],
              "colorRangeLabel": rand_data_10['5'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2016",
              "displayValue": rand_data_10['6'][3],
              "colorRangeLabel": rand_data_10['6'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2016",
              "displayValue": rand_data_10['7'][3],
              "colorRangeLabel": rand_data_10['7'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2016",
              "displayValue": rand_data_10['8'][3],
              "colorRangeLabel": rand_data_10['8'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2016",
              "displayValue": rand_data_10['9'][3],
              "colorRangeLabel": rand_data_10['9'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2016",
              "displayValue": rand_data_10['10'][3],
              "colorRangeLabel": rand_data_10['10'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2016",
              "displayValue": rand_data_10['11'][3],
              "colorRangeLabel": rand_data_10['11'][3],
			  "tllabel": "Year: 2016",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2015",
              "displayValue": rand_data_10['1'][4],
              "colorRangeLabel": rand_data_10['1'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2015",
              "displayValue": rand_data_10['2'][4],
              "colorRangeLabel": rand_data_10['2'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2015",
              "displayValue": rand_data_10['3'][4],
              "colorRangeLabel": rand_data_10['3'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2015",
              "displayValue": rand_data_10['4'][4],
              "colorRangeLabel": rand_data_10['4'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2015",
              "displayValue": rand_data_10['5'][4],
              "colorRangeLabel": rand_data_10['5'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2015",
              "displayValue": rand_data_10['6'][4],
              "colorRangeLabel": rand_data_10['6'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2015",
              "displayValue": rand_data_10['7'][4],
              "colorRangeLabel": rand_data_10['7'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2015",
              "displayValue": rand_data_10['8'][4],
              "colorRangeLabel": rand_data_10['8'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2015",
              "displayValue": rand_data_10['9'][4],
              "colorRangeLabel": rand_data_10['9'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2015",
              "displayValue": rand_data_10['10'][4],
              "colorRangeLabel": rand_data_10['10'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2015",
              "displayValue": rand_data_10['11'][4],
              "colorRangeLabel": rand_data_10['11'][4],
			  "tllabel": "Year: 2015",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2014",
              "displayValue": rand_data_10['1'][5],
              "colorRangeLabel": rand_data_10['1'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2014",
              "displayValue": rand_data_10['2'][5],
              "colorRangeLabel": rand_data_10['2'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2014",
              "displayValue": rand_data_10['3'][5],
              "colorRangeLabel": rand_data_10['3'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2014",
              "displayValue": rand_data_10['4'][5],
              "colorRangeLabel": rand_data_10['4'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2014",
              "displayValue": rand_data_10['5'][5],
              "colorRangeLabel": rand_data_10['5'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2014",
              "displayValue": rand_data_10['6'][5],
              "colorRangeLabel": rand_data_10['6'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2014",
              "displayValue": rand_data_10['7'][5],
              "colorRangeLabel": rand_data_10['7'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2014",
              "displayValue": rand_data_10['8'][5],
              "colorRangeLabel": rand_data_10['8'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2014",
              "displayValue": rand_data_10['9'][5],
              "colorRangeLabel": rand_data_10['9'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2014",
              "displayValue": rand_data_10['10'][5],
              "colorRangeLabel": rand_data_10['10'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2014",
              "displayValue": rand_data_10['11'][5],
              "colorRangeLabel": rand_data_10['11'][5],
			  "tllabel": "Year: 2014",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2013",
              "displayValue": rand_data_10['1'][6],
              "colorRangeLabel": rand_data_10['1'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2013",
              "displayValue": rand_data_10['2'][6],
              "colorRangeLabel": rand_data_10['2'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2013",
              "displayValue": rand_data_10['3'][6],
              "colorRangeLabel": rand_data_10['3'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2013",
              "displayValue": rand_data_10['4'][6],
              "colorRangeLabel": rand_data_10['4'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2013",
              "displayValue": rand_data_10['5'][6],
              "colorRangeLabel": rand_data_10['5'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2013",
              "displayValue": rand_data_10['6'][6],
              "colorRangeLabel": rand_data_10['6'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2013",
              "displayValue": rand_data_10['7'][6],
              "colorRangeLabel": rand_data_10['7'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2013",
              "displayValue": rand_data_10['8'][6],
              "colorRangeLabel": rand_data_10['8'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2013",
              "displayValue": rand_data_10['9'][6],
              "colorRangeLabel": rand_data_10['9'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2013",
              "displayValue": rand_data_10['10'][6],
              "colorRangeLabel": rand_data_10['10'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2013",
              "displayValue": rand_data_10['11'][6],
              "colorRangeLabel": rand_data_10['11'][6],
			  "tllabel": "Year: 2013",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2012",
              "displayValue": rand_data_10['1'][7],
              "colorRangeLabel": rand_data_10['1'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2012",
              "displayValue": rand_data_10['2'][7],
              "colorRangeLabel": rand_data_10['2'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2012",
              "displayValue": rand_data_10['3'][7],
              "colorRangeLabel": rand_data_10['3'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2012",
              "displayValue": rand_data_10['4'][7],
              "colorRangeLabel": rand_data_10['4'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2012",
              "displayValue": rand_data_10['5'][7],
              "colorRangeLabel": rand_data_10['5'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2012",
              "displayValue": rand_data_10['6'][7],
              "colorRangeLabel": rand_data_10['6'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2012",
              "displayValue": rand_data_10['7'][7],
              "colorRangeLabel": rand_data_10['7'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2012",
              "displayValue": rand_data_10['8'][7],
              "colorRangeLabel": rand_data_10['8'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2012",
              "displayValue": rand_data_10['9'][7],
              "colorRangeLabel": rand_data_10['9'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2012",
              "displayValue": rand_data_10['10'][7],
              "colorRangeLabel": rand_data_10['10'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2012",
              "displayValue": rand_data_10['11'][7],
              "colorRangeLabel": rand_data_10['11'][7],
			  "tllabel": "Year: 2012",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2011",
              "displayValue": rand_data_10['1'][8],
              "colorRangeLabel": rand_data_10['1'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2011",
              "displayValue": rand_data_10['2'][8],
              "colorRangeLabel": rand_data_10['2'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2011",
              "displayValue": rand_data_10['3'][8],
              "colorRangeLabel": rand_data_10['3'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2011",
              "displayValue": rand_data_10['4'][8],
              "colorRangeLabel": rand_data_10['4'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2011",
              "displayValue": rand_data_10['5'][8],
              "colorRangeLabel": rand_data_10['5'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2011",
              "displayValue": rand_data_10['6'][8],
              "colorRangeLabel": rand_data_10['6'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2011",
              "displayValue": rand_data_10['7'][8],
              "colorRangeLabel": rand_data_10['7'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2011",
              "displayValue": rand_data_10['8'][8],
              "colorRangeLabel": rand_data_10['8'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2011",
              "displayValue": rand_data_10['9'][8],
              "colorRangeLabel": rand_data_10['9'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2011",
              "displayValue": rand_data_10['10'][8],
              "colorRangeLabel": rand_data_10['10'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2011",
              "displayValue": rand_data_10['11'][8],
              "colorRangeLabel": rand_data_10['11'][8],
			  "tllabel": "Year: 2011",
			  "trlabel": "Ranking: 11"
            },
			{
              "rowid": "1",
              "columnid": "2010",
              "displayValue": rand_data_10['1'][9],
              "colorRangeLabel": rand_data_10['1'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 1"
            },
            {
              "rowid": "2",
              "columnid": "2010",
              "displayValue": rand_data_10['2'][9],
              "colorRangeLabel": rand_data_10['2'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 2"
            },
            {
              "rowid": "3",
              "columnid": "2010",
              "displayValue": rand_data_10['3'][9],
              "colorRangeLabel": rand_data_10['3'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 3"
            }
			,
            {
              "rowid": "4",
              "columnid": "2010",
              "displayValue": rand_data_10['4'][9],
              "colorRangeLabel": rand_data_10['4'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 4"
            },
            {
              "rowid": "5",
              "columnid": "2010",
              "displayValue": rand_data_10['5'][9],
              "colorRangeLabel": rand_data_10['5'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 5"
            },
            {
              "rowid": "6",
              "columnid": "2010",
              "displayValue": rand_data_10['6'][9],
              "colorRangeLabel": rand_data_10['6'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 6"
            },
            {
              "rowid": "7",
              "columnid": "2010",
              "displayValue": rand_data_10['7'][9],
              "colorRangeLabel": rand_data_10['7'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 7"
            },
            {
              "rowid": "8",
              "columnid": "2010",
              "displayValue": rand_data_10['8'][9],
              "colorRangeLabel": rand_data_10['8'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 8"
            },
            {
              "rowid": "9",
              "columnid": "2010",
              "displayValue": rand_data_10['9'][9],
              "colorRangeLabel": rand_data_10['9'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 9"
            },
            {
              "rowid": "10",
              "columnid": "2010",
              "displayValue": rand_data_10['10'][9],
              "colorRangeLabel": rand_data_10['10'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 10"
            },
            {
              "rowid": "11",
              "columnid": "2010",
              "displayValue": rand_data_10['11'][9],
              "colorRangeLabel": rand_data_10['11'][9],
			  "tllabel": "Year: 2010",
			  "trlabel": "Ranking: 11"
            }
          ]
        }],
        "colorRange": {
          "gradient": "0",
          "color": [{
              "code": "#f58231",
              "label": "ENRS"
            },
            {
              "code": "#ffe119",
              "label": "MATR"
            },
            {
              "code": "#bfef45",
              "label": "UTIL"
            },
            {
              "code": "#3cb44b",
              "label": "INFT"
            },
            {
              "code": "#42d4f4",
              "label": "CONS"
            },
            {
              "code": "#e6beff",
              "label": "INDU"
            },
            {
              "code": "#469990",
              "label": "TELS"
            },
            {
              "code": "#fffac8",
              "label": "HLTH"
            },
            {
              "code": "#a9a9a9",
              "label": "S&P"
            },
            {
              "code": "#fabebe",
              "label": "COND"
            },
			{
              "code": "#aaffc3",
              "label": "FINL"
            }
          ]
        }
      }
    })
    .render();
});
})
