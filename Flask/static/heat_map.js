d3.json("/sector_rank_all", function(rank_data_all){
  FusionCharts.ready(function() {
    var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'chart-container',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
          "chart": {
            "theme": "fusion",
            "caption": "Sector Ranking",
            "subcaption": "22 Years data",
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
              },
              {
                "id": "12",
                "label": "12"
              },
              {
                "id": "13",
                "label": "13"
              }
            ]
          },
          "columns": {
            "column": [{
                "id": "1998",
                "label": "1998"
              },
              {
                "id": "1999",
                "label": "1999"
              },
              {
                "id": "2000",
                "label": "2000"
              },
              {
                "id": "2001",
                "label": "2001"
              },
              {
                "id": "2002",
                "label": "2002"
              }
        ,
              {
                "id": "2003",
                "label": "2003"
              }
        ,
              {
                "id": "2004",
                "label": "2004"
              }
        ,
              {
                "id": "2005",
                "label": "2005"
              }
        ,
              {
                "id": "2006",
                "label": "2006"
              },
              {
                "id": "2007",
                "label": "2007"
              }
        ,
              {
                "id": "2008",
                "label": "2008"
              },
              {
                "id": "2009",
                "label": "2009"
              },
              {
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
                "displayValue": rank_data_all['1'][0],
                "colorRangeLabel": rank_data_all['1'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2019",
                "displayValue": rank_data_all['2'][0],
                "colorRangeLabel": rank_data_all['2'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2019",
                "displayValue": rank_data_all['3'][0],
                "colorRangeLabel": rank_data_all['3'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2019",
                "displayValue": rank_data_all['4'][0],
                "colorRangeLabel": rank_data_all['4'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2019",
                "displayValue": rank_data_all['5'][0],
                "colorRangeLabel": rank_data_all['5'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2019",
                "displayValue": rank_data_all['6'][0],
                "colorRangeLabel": rank_data_all['6'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2019",
                "displayValue": rank_data_all['7'][0],
                "colorRangeLabel": rank_data_all['7'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2019",
                "displayValue": rank_data_all['8'][0],
                "colorRangeLabel": rank_data_all['8'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2019",
                "displayValue": rank_data_all['9'][0],
                "colorRangeLabel": rank_data_all['9'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 9"
          
              },
              {
                "rowid": "10",
                "columnid": "2019",
                "displayValue": rank_data_all['10'][0],
                "colorRangeLabel": rank_data_all['10'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2019",
                "displayValue": rank_data_all['11'][0],
                "colorRangeLabel": rank_data_all['11'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2019",
                "displayValue": rank_data_all['12'][0],
                "colorRangeLabel": rank_data_all['12'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2019",
                "displayValue": rank_data_all['13'][0],
                "colorRangeLabel": rank_data_all['13'][0],
          "tllabel": "Year: 2019",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2018",
                "displayValue": rank_data_all['1'][1],
                "colorRangeLabel": rank_data_all['1'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2018",
                "displayValue": rank_data_all['2'][1],
                "colorRangeLabel": rank_data_all['2'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2018",
                "displayValue": rank_data_all['3'][1],
                "colorRangeLabel": rank_data_all['3'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2018",
                "displayValue": rank_data_all['4'][1],
                "colorRangeLabel": rank_data_all['4'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2018",
                "displayValue": rank_data_all['5'][1],
                "colorRangeLabel": rank_data_all['5'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2018",
                "displayValue": rank_data_all['6'][1],
                "colorRangeLabel": rank_data_all['6'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2018",
                "displayValue": rank_data_all['7'][1],
                "colorRangeLabel": rank_data_all['7'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2018",
                "displayValue": rank_data_all['8'][1],
                "colorRangeLabel": rank_data_all['8'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2018",
                "displayValue": rank_data_all['9'][1],
                "colorRangeLabel": rank_data_all['9'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 9"
          
              },
              {
                "rowid": "10",
                "columnid": "2018",
                "displayValue": rank_data_all['10'][1],
                "colorRangeLabel": rank_data_all['10'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2018",
                "displayValue": rank_data_all['11'][1],
                "colorRangeLabel": rank_data_all['11'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2018",
                "displayValue": rank_data_all['12'][1],
                "colorRangeLabel": rank_data_all['12'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2018",
                "displayValue": rank_data_all['13'][1],
                "colorRangeLabel": rank_data_all['13'][1],
          "tllabel": "Year: 2018",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2017",
                "displayValue": rank_data_all['1'][2],
                "colorRangeLabel": rank_data_all['1'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2017",
                "displayValue": rank_data_all['2'][2],
                "colorRangeLabel": rank_data_all['2'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2017",
                "displayValue": rank_data_all['3'][2],
                "colorRangeLabel": rank_data_all['3'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2017",
                "displayValue": rank_data_all['4'][2],
                "colorRangeLabel": rank_data_all['4'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2017",
                "displayValue": rank_data_all['5'][2],
                "colorRangeLabel": rank_data_all['5'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2017",
                "displayValue": rank_data_all['6'][2],
                "colorRangeLabel": rank_data_all['6'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2017",
                "displayValue": rank_data_all['7'][2],
                "colorRangeLabel": rank_data_all['7'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2017",
                "displayValue": rank_data_all['8'][2],
                "colorRangeLabel": rank_data_all['8'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2017",
                "displayValue": rank_data_all['9'][2],
                "colorRangeLabel": rank_data_all['9'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2017",
                "displayValue": rank_data_all['10'][2],
                "colorRangeLabel": rank_data_all['10'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2017",
                "displayValue": rank_data_all['11'][2],
                "colorRangeLabel": rank_data_all['11'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2017",
                "displayValue": rank_data_all['12'][2],
                "colorRangeLabel": rank_data_all['12'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2017",
                "displayValue": rank_data_all['13'][2],
                "colorRangeLabel": rank_data_all['13'][2],
          "tllabel": "Year: 2017",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2016",
                "displayValue": rank_data_all['1'][3],
                "colorRangeLabel": rank_data_all['1'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2016",
                "displayValue": rank_data_all['2'][3],
                "colorRangeLabel": rank_data_all['2'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2016",
                "displayValue": rank_data_all['3'][3],
                "colorRangeLabel": rank_data_all['3'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2016",
                "displayValue": rank_data_all['4'][3],
                "colorRangeLabel": rank_data_all['4'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2016",
                "displayValue": rank_data_all['5'][3],
                "colorRangeLabel": rank_data_all['5'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2016",
                "displayValue": rank_data_all['6'][3],
                "colorRangeLabel": rank_data_all['6'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2016",
                "displayValue": rank_data_all['7'][3],
                "colorRangeLabel": rank_data_all['7'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2016",
                "displayValue": rank_data_all['8'][3],
                "colorRangeLabel": rank_data_all['8'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2016",
                "displayValue": rank_data_all['9'][3],
                "colorRangeLabel": rank_data_all['9'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2016",
                "displayValue": rank_data_all['10'][3],
                "colorRangeLabel": rank_data_all['10'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2016",
                "displayValue": rank_data_all['11'][3],
                "colorRangeLabel": rank_data_all['11'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2016",
                "displayValue": rank_data_all['12'][3],
                "colorRangeLabel": rank_data_all['12'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2016",
                "displayValue": rank_data_all['13'][3],
                "colorRangeLabel": rank_data_all['13'][3],
          "tllabel": "Year: 2016",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2015",
                "displayValue": rank_data_all['1'][4],
                "colorRangeLabel": rank_data_all['1'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2015",
                "displayValue": rank_data_all['2'][4],
                "colorRangeLabel": rank_data_all['2'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2015",
                "displayValue": rank_data_all['3'][4],
                "colorRangeLabel": rank_data_all['3'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2015",
                "displayValue": rank_data_all['4'][4],
                "colorRangeLabel": rank_data_all['4'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2015",
                "displayValue": rank_data_all['5'][4],
                "colorRangeLabel": rank_data_all['5'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2015",
                "displayValue": rank_data_all['6'][4],
                "colorRangeLabel": rank_data_all['6'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2015",
                "displayValue": rank_data_all['7'][4],
                "colorRangeLabel": rank_data_all['7'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2015",
                "displayValue": rank_data_all['8'][4],
                "colorRangeLabel": rank_data_all['8'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2015",
                "displayValue": rank_data_all['9'][4],
                "colorRangeLabel": rank_data_all['9'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2015",
                "displayValue": rank_data_all['10'][4],
                "colorRangeLabel": rank_data_all['10'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2015",
                "displayValue": rank_data_all['11'][4],
                "colorRangeLabel": rank_data_all['11'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2015",
                "displayValue": rank_data_all['12'][4],
                "colorRangeLabel": rank_data_all['12'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2015",
                "displayValue": rank_data_all['13'][4],
                "colorRangeLabel": rank_data_all['13'][4],
          "tllabel": "Year: 2015",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2014",
                "displayValue": rank_data_all['1'][5],
                "colorRangeLabel": rank_data_all['1'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2014",
                "displayValue": rank_data_all['2'][5],
                "colorRangeLabel": rank_data_all['2'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2014",
                "displayValue": rank_data_all['3'][5],
                "colorRangeLabel": rank_data_all['3'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2014",
                "displayValue": rank_data_all['4'][5],
                "colorRangeLabel": rank_data_all['4'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2014",
                "displayValue": rank_data_all['5'][5],
                "colorRangeLabel": rank_data_all['5'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2014",
                "displayValue": rank_data_all['6'][5],
                "colorRangeLabel": rank_data_all['6'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2014",
                "displayValue": rank_data_all['7'][5],
                "colorRangeLabel": rank_data_all['7'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2014",
                "displayValue": rank_data_all['8'][5],
                "colorRangeLabel": rank_data_all['8'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2014",
                "displayValue": rank_data_all['9'][5],
                "colorRangeLabel": rank_data_all['9'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2014",
                "displayValue": rank_data_all['10'][5],
                "colorRangeLabel": rank_data_all['10'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2014",
                "displayValue": rank_data_all['11'][5],
                "colorRangeLabel": rank_data_all['11'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2014",
                "displayValue": rank_data_all['12'][5],
                "colorRangeLabel": rank_data_all['12'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2014",
                "displayValue": rank_data_all['13'][5],
                "colorRangeLabel": rank_data_all['13'][5],
          "tllabel": "Year: 2014",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2013",
                "displayValue": rank_data_all['1'][6],
                "colorRangeLabel": rank_data_all['1'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2013",
                "displayValue": rank_data_all['2'][6],
                "colorRangeLabel": rank_data_all['2'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2013",
                "displayValue": rank_data_all['3'][6],
                "colorRangeLabel": rank_data_all['3'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2013",
                "displayValue": rank_data_all['4'][6],
                "colorRangeLabel": rank_data_all['4'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2013",
                "displayValue": rank_data_all['5'][6],
                "colorRangeLabel": rank_data_all['5'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2013",
                "displayValue": rank_data_all['6'][6],
                "colorRangeLabel": rank_data_all['6'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2013",
                "displayValue": rank_data_all['7'][6],
                "colorRangeLabel": rank_data_all['7'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2013",
                "displayValue": rank_data_all['8'][6],
                "colorRangeLabel": rank_data_all['8'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2013",
                "displayValue": rank_data_all['9'][6],
                "colorRangeLabel": rank_data_all['9'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2013",
                "displayValue": rank_data_all['10'][6],
                "colorRangeLabel": rank_data_all['10'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2013",
                "displayValue": rank_data_all['11'][6],
                "colorRangeLabel": rank_data_all['11'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2013",
                "displayValue": rank_data_all['12'][6],
                "colorRangeLabel": rank_data_all['12'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2013",
                "displayValue": rank_data_all['13'][6],
                "colorRangeLabel": rank_data_all['13'][6],
          "tllabel": "Year: 2013",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2012",
                "displayValue": rank_data_all['1'][7],
                "colorRangeLabel": rank_data_all['1'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2012",
                "displayValue": rank_data_all['2'][7],
                "colorRangeLabel": rank_data_all['2'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2012",
                "displayValue": rank_data_all['3'][7],
                "colorRangeLabel": rank_data_all['3'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2012",
                "displayValue": rank_data_all['4'][7],
                "colorRangeLabel": rank_data_all['4'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2012",
                "displayValue": rank_data_all['5'][7],
                "colorRangeLabel": rank_data_all['5'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2012",
                "displayValue": rank_data_all['6'][7],
                "colorRangeLabel": rank_data_all['6'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2012",
                "displayValue": rank_data_all['7'][7],
                "colorRangeLabel": rank_data_all['7'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2012",
                "displayValue": rank_data_all['8'][7],
                "colorRangeLabel": rank_data_all['8'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2012",
                "displayValue": rank_data_all['9'][7],
                "colorRangeLabel": rank_data_all['9'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2012",
                "displayValue": rank_data_all['10'][7],
                "colorRangeLabel": rank_data_all['10'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2012",
                "displayValue": rank_data_all['11'][7],
                "colorRangeLabel": rank_data_all['11'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2012",
                "displayValue": rank_data_all['12'][7],
                "colorRangeLabel": rank_data_all['12'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2012",
                "displayValue": rank_data_all['13'][7],
                "colorRangeLabel": rank_data_all['13'][7],
          "tllabel": "Year: 2012",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2011",
                "displayValue": rank_data_all['1'][8],
                "colorRangeLabel": rank_data_all['1'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2011",
                "displayValue": rank_data_all['2'][8],
                "colorRangeLabel": rank_data_all['2'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2011",
                "displayValue": rank_data_all['3'][8],
                "colorRangeLabel": rank_data_all['3'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2011",
                "displayValue": rank_data_all['4'][8],
                "colorRangeLabel": rank_data_all['4'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2011",
                "displayValue": rank_data_all['5'][8],
                "colorRangeLabel": rank_data_all['5'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2011",
                "displayValue": rank_data_all['6'][8],
                "colorRangeLabel": rank_data_all['6'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2011",
                "displayValue": rank_data_all['7'][8],
                "colorRangeLabel": rank_data_all['7'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2011",
                "displayValue": rank_data_all['8'][8],
                "colorRangeLabel": rank_data_all['8'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2011",
                "displayValue": rank_data_all['9'][8],
                "colorRangeLabel": rank_data_all['9'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2011",
                "displayValue": rank_data_all['10'][8],
                "colorRangeLabel": rank_data_all['10'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2011",
                "displayValue": rank_data_all['11'][8],
                "colorRangeLabel": rank_data_all['11'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2011",
                "displayValue": rank_data_all['12'][8],
                "colorRangeLabel": rank_data_all['12'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2011",
                "displayValue": rank_data_all['13'][8],
                "colorRangeLabel": rank_data_all['13'][8],
          "tllabel": "Year: 2011",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2010",
                "displayValue": rank_data_all['1'][9],
                "colorRangeLabel": rank_data_all['1'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2010",
                "displayValue": rank_data_all['2'][9],
                "colorRangeLabel": rank_data_all['2'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2010",
                "displayValue": rank_data_all['3'][9],
                "colorRangeLabel": rank_data_all['3'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2010",
                "displayValue": rank_data_all['4'][9],
                "colorRangeLabel": rank_data_all['4'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2010",
                "displayValue": rank_data_all['5'][9],
                "colorRangeLabel": rank_data_all['5'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2010",
                "displayValue": rank_data_all['6'][9],
                "colorRangeLabel": rank_data_all['6'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2010",
                "displayValue": rank_data_all['7'][9],
                "colorRangeLabel": rank_data_all['7'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2010",
                "displayValue": rank_data_all['8'][9],
                "colorRangeLabel": rank_data_all['8'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2010",
                "displayValue": rank_data_all['9'][9],
                "colorRangeLabel": rank_data_all['9'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2010",
                "displayValue": rank_data_all['10'][9],
                "colorRangeLabel": rank_data_all['10'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2010",
                "displayValue": rank_data_all['11'][9],
                "colorRangeLabel": rank_data_all['11'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2010",
                "displayValue": rank_data_all['12'][9],
                "colorRangeLabel": rank_data_all['12'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2010",
                "displayValue": rank_data_all['13'][9],
                "colorRangeLabel": rank_data_all['13'][9],
          "tllabel": "Year: 2010",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2009",
                "displayValue": rank_data_all['1'][10],
                "colorRangeLabel": rank_data_all['1'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2009",
                "displayValue": rank_data_all['2'][10],
                "colorRangeLabel": rank_data_all['2'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2009",
                "displayValue": rank_data_all['3'][10],
                "colorRangeLabel": rank_data_all['3'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2009",
                "displayValue": rank_data_all['4'][10],
                "colorRangeLabel": rank_data_all['4'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2009",
                "displayValue": rank_data_all['5'][10],
                "colorRangeLabel": rank_data_all['5'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2009",
                "displayValue": rank_data_all['6'][10],
                "colorRangeLabel": rank_data_all['6'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2009",
                "displayValue": rank_data_all['7'][10],
                "colorRangeLabel": rank_data_all['7'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2009",
                "displayValue": rank_data_all['8'][10],
                "colorRangeLabel": rank_data_all['8'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2009",
                "displayValue": rank_data_all['9'][10],
                "colorRangeLabel": rank_data_all['9'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2009",
                "displayValue": rank_data_all['10'][10],
                "colorRangeLabel": rank_data_all['10'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2009",
                "displayValue": rank_data_all['11'][10],
                "colorRangeLabel": rank_data_all['11'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2009",
                "displayValue": rank_data_all['12'][10],
                "colorRangeLabel": rank_data_all['12'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2009",
                "displayValue": rank_data_all['13'][10],
                "colorRangeLabel": rank_data_all['13'][10],
          "tllabel": "Year: 2009",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2008",
                "displayValue": rank_data_all['1'][11],
                "colorRangeLabel": rank_data_all['1'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2008",
                "displayValue": rank_data_all['2'][11],
                "colorRangeLabel": rank_data_all['2'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2008",
                "displayValue": rank_data_all['3'][11],
                "colorRangeLabel": rank_data_all['3'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2008",
                "displayValue": rank_data_all['4'][11],
                "colorRangeLabel": rank_data_all['4'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2008",
                "displayValue": rank_data_all['5'][11],
                "colorRangeLabel": rank_data_all['5'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2008",
                "displayValue": rank_data_all['6'][11],
                "colorRangeLabel": rank_data_all['6'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2008",
                "displayValue": rank_data_all['7'][11],
                "colorRangeLabel": rank_data_all['7'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2008",
                "displayValue": rank_data_all['8'][11],
                "colorRangeLabel": rank_data_all['8'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2008",
                "displayValue": rank_data_all['9'][11],
                "colorRangeLabel": rank_data_all['9'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2008",
                "displayValue": rank_data_all['10'][11],
                "colorRangeLabel": rank_data_all['10'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2008",
                "displayValue": rank_data_all['11'][11],
                "colorRangeLabel": rank_data_all['11'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2008",
                "displayValue": rank_data_all['12'][11],
                "colorRangeLabel": rank_data_all['12'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2008",
                "displayValue": rank_data_all['13'][11],
                "colorRangeLabel": rank_data_all['13'][11],
          "tllabel": "Year: 2008",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2007",
                "displayValue": rank_data_all['1'][12],
                "colorRangeLabel": rank_data_all['1'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2007",
                "displayValue": rank_data_all['2'][12],
                "colorRangeLabel": rank_data_all['2'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2007",
                "displayValue": rank_data_all['3'][12],
                "colorRangeLabel": rank_data_all['3'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2007",
                "displayValue": rank_data_all['4'][12],
                "colorRangeLabel": rank_data_all['4'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2007",
                "displayValue": rank_data_all['5'][12],
                "colorRangeLabel": rank_data_all['5'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2007",
                "displayValue": rank_data_all['6'][12],
                "colorRangeLabel": rank_data_all['6'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2007",
                "displayValue": rank_data_all['7'][12],
                "colorRangeLabel": rank_data_all['7'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2007",
                "displayValue": rank_data_all['8'][12],
                "colorRangeLabel": rank_data_all['8'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2007",
                "displayValue": rank_data_all['9'][12],
                "colorRangeLabel": rank_data_all['9'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2007",
                "displayValue": rank_data_all['10'][12],
                "colorRangeLabel": rank_data_all['10'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2007",
                "displayValue": rank_data_all['11'][12],
                "colorRangeLabel": rank_data_all['11'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2007",
                "displayValue": rank_data_all['12'][12],
                "colorRangeLabel": rank_data_all['12'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2007",
                "displayValue": rank_data_all['13'][12],
                "colorRangeLabel": rank_data_all['13'][12],
          "tllabel": "Year: 2007",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2006",
                "displayValue": rank_data_all['1'][13],
                "colorRangeLabel": rank_data_all['1'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2006",
                "displayValue": rank_data_all['2'][13],
                "colorRangeLabel": rank_data_all['2'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2006",
                "displayValue": rank_data_all['3'][13],
                "colorRangeLabel": rank_data_all['3'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2006",
                "displayValue": rank_data_all['4'][13],
                "colorRangeLabel": rank_data_all['4'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2006",
                "displayValue": rank_data_all['5'][13],
                "colorRangeLabel": rank_data_all['5'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2006",
                "displayValue": rank_data_all['6'][13],
                "colorRangeLabel": rank_data_all['6'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 6"
          
              },
              {
                "rowid": "7",
                "columnid": "2006",
                "displayValue": rank_data_all['7'][13],
                "colorRangeLabel": rank_data_all['7'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2006",
                "displayValue": rank_data_all['8'][13],
                "colorRangeLabel": rank_data_all['8'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2006",
                "displayValue": rank_data_all['9'][13],
                "colorRangeLabel": rank_data_all['9'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2006",
                "displayValue": rank_data_all['10'][13],
                "colorRangeLabel": rank_data_all['10'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2006",
                "displayValue": rank_data_all['11'][13],
                "colorRangeLabel": rank_data_all['11'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2006",
                "displayValue": rank_data_all['12'][13],
                "colorRangeLabel": rank_data_all['12'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2006",
                "displayValue": rank_data_all['13'][13],
                "colorRangeLabel": rank_data_all['13'][13],
          "tllabel": "Year: 2006",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2005",
                "displayValue": rank_data_all['1'][14],
                "colorRangeLabel": rank_data_all['1'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2005",
                "displayValue": rank_data_all['2'][14],
                "colorRangeLabel": rank_data_all['2'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2005",
                "displayValue": rank_data_all['3'][14],
                "colorRangeLabel": rank_data_all['3'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2005",
                "displayValue": rank_data_all['4'][14],
                "colorRangeLabel": rank_data_all['4'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2005",
                "displayValue": rank_data_all['5'][14],
                "colorRangeLabel": rank_data_all['5'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2005",
                "displayValue": rank_data_all['6'][14],
                "colorRangeLabel": rank_data_all['6'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2005",
                "displayValue": rank_data_all['7'][14],
                "colorRangeLabel": rank_data_all['7'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2005",
                "displayValue": rank_data_all['8'][14],
                "colorRangeLabel": rank_data_all['8'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2005",
                "displayValue": rank_data_all['9'][14],
                "colorRangeLabel": rank_data_all['9'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2005",
                "displayValue": rank_data_all['10'][14],
                "colorRangeLabel": rank_data_all['10'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2005",
                "displayValue": rank_data_all['11'][14],
                "colorRangeLabel": rank_data_all['11'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2005",
                "displayValue": rank_data_all['12'][14],
                "colorRangeLabel": rank_data_all['12'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2005",
                "displayValue": rank_data_all['13'][14],
                "colorRangeLabel": rank_data_all['13'][14],
          "tllabel": "Year: 2005",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2004",
                "displayValue": rank_data_all['1'][15],
                "colorRangeLabel": rank_data_all['1'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2004",
                "displayValue": rank_data_all['2'][15],
                "colorRangeLabel": rank_data_all['2'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2004",
                "displayValue": rank_data_all['3'][15],
                "colorRangeLabel": rank_data_all['3'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2004",
                "displayValue": rank_data_all['4'][15],
                "colorRangeLabel": rank_data_all['4'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2004",
                "displayValue": rank_data_all['5'][15],
                "colorRangeLabel": rank_data_all['5'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2004",
                "displayValue": rank_data_all['6'][15],
                "colorRangeLabel": rank_data_all['6'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2004",
                "displayValue": rank_data_all['7'][15],
                "colorRangeLabel": rank_data_all['7'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2004",
                "displayValue": rank_data_all['8'][15],
                "colorRangeLabel": rank_data_all['8'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2004",
                "displayValue": rank_data_all['9'][15],
                "colorRangeLabel": rank_data_all['9'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2004",
                "displayValue": rank_data_all['10'][15],
                "colorRangeLabel": rank_data_all['10'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2004",
                "displayValue": rank_data_all['11'][15],
                "colorRangeLabel": rank_data_all['11'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2004",
                "displayValue": rank_data_all['12'][15],
                "colorRangeLabel": rank_data_all['12'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2004",
                "displayValue": rank_data_all['13'][15],
                "colorRangeLabel": rank_data_all['13'][15],
          "tllabel": "Year: 2004",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2003",
                "displayValue": rank_data_all['1'][16],
                "colorRangeLabel": rank_data_all['1'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2003",
                "displayValue": rank_data_all['2'][16],
                "colorRangeLabel": rank_data_all['2'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2003",
                "displayValue": rank_data_all['3'][16],
                "colorRangeLabel": rank_data_all['3'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2003",
                "displayValue": rank_data_all['4'][16],
                "colorRangeLabel": rank_data_all['4'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2003",
                "displayValue": rank_data_all['5'][16],
                "colorRangeLabel": rank_data_all['5'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2003",
                "displayValue": rank_data_all['6'][16],
                "colorRangeLabel": rank_data_all['6'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2003",
                "displayValue": rank_data_all['7'][16],
                "colorRangeLabel": rank_data_all['7'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2003",
                "displayValue": rank_data_all['8'][16],
                "colorRangeLabel": rank_data_all['8'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2003",
                "displayValue": rank_data_all['9'][16],
                "colorRangeLabel": rank_data_all['9'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2003",
                "displayValue": rank_data_all['10'][16],
                "colorRangeLabel": rank_data_all['10'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2003",
                "displayValue": rank_data_all['11'][16],
                "colorRangeLabel": rank_data_all['11'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2003",
                "displayValue": rank_data_all['12'][16],
                "colorRangeLabel": rank_data_all['12'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2003",
                "displayValue": rank_data_all['13'][16],
                "colorRangeLabel": rank_data_all['13'][16],
          "tllabel": "Year: 2003",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2002",
                "displayValue": rank_data_all['1'][17],
                "colorRangeLabel": rank_data_all['1'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2002",
                "displayValue": rank_data_all['2'][17],
                "colorRangeLabel": rank_data_all['2'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2002",
                "displayValue": rank_data_all['3'][17],
                "colorRangeLabel": rank_data_all['3'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2002",
                "displayValue": rank_data_all['4'][17],
                "colorRangeLabel": rank_data_all['4'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2002",
                "displayValue": rank_data_all['5'][17],
                "colorRangeLabel": rank_data_all['5'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2002",
                "displayValue": rank_data_all['6'][17],
                "colorRangeLabel": rank_data_all['6'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2002",
                "displayValue": rank_data_all['7'][17],
                "colorRangeLabel": rank_data_all['7'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2002",
                "displayValue": rank_data_all['8'][17],
                "colorRangeLabel": rank_data_all['8'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2002",
                "displayValue": rank_data_all['9'][17],
                "colorRangeLabel": rank_data_all['9'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2002",
                "displayValue": rank_data_all['10'][17],
                "colorRangeLabel": rank_data_all['10'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2002",
                "displayValue": rank_data_all['11'][17],
                "colorRangeLabel": rank_data_all['11'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2002",
                "displayValue": rank_data_all['12'][17],
                "colorRangeLabel": rank_data_all['12'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2002",
                "displayValue": rank_data_all['13'][17],
                "colorRangeLabel": rank_data_all['13'][17],
          "tllabel": "Year: 2002",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2001",
                "displayValue": rank_data_all['1'][18],
                "colorRangeLabel": rank_data_all['1'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2001",
                "displayValue": rank_data_all['2'][18],
                "colorRangeLabel": rank_data_all['2'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2001",
                "displayValue": rank_data_all['3'][18],
                "colorRangeLabel": rank_data_all['3'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2001",
                "displayValue": rank_data_all['4'][18],
                "colorRangeLabel": rank_data_all['4'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2001",
                "displayValue": rank_data_all['5'][18],
                "colorRangeLabel": rank_data_all['5'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2001",
                "displayValue": rank_data_all['6'][18],
                "colorRangeLabel": rank_data_all['6'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2001",
                "displayValue": rank_data_all['7'][18],
                "colorRangeLabel": rank_data_all['7'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2001",
                "displayValue": rank_data_all['8'][18],
                "colorRangeLabel": rank_data_all['8'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2001",
                "displayValue": rank_data_all['9'][18],
                "colorRangeLabel": rank_data_all['9'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2001",
                "displayValue": rank_data_all['10'][18],
                "colorRangeLabel": rank_data_all['10'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2001",
                "displayValue": rank_data_all['11'][18],
                "colorRangeLabel": rank_data_all['11'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2001",
                "displayValue": rank_data_all['12'][18],
                "colorRangeLabel": rank_data_all['12'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2001",
                "displayValue": rank_data_all['13'][18],
                "colorRangeLabel": rank_data_all['13'][18],
          "tllabel": "Year: 2001",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "2000",
                "displayValue": rank_data_all['1'][19],
                "colorRangeLabel": rank_data_all['1'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "2000",
                "displayValue": rank_data_all['2'][19],
                "colorRangeLabel": rank_data_all['2'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "2000",
                "displayValue": rank_data_all['3'][19],
                "colorRangeLabel": rank_data_all['3'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "2000",
                "displayValue": rank_data_all['4'][19],
                "colorRangeLabel": rank_data_all['4'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "2000",
                "displayValue": rank_data_all['5'][19],
                "colorRangeLabel": rank_data_all['5'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "2000",
                "displayValue": rank_data_all['6'][19],
                "colorRangeLabel": rank_data_all['6'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "2000",
                "displayValue": rank_data_all['7'][19],
                "colorRangeLabel": rank_data_all['7'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "2000",
                "displayValue": rank_data_all['8'][19],
                "colorRangeLabel": rank_data_all['8'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "2000",
                "displayValue": rank_data_all['9'][19],
                "colorRangeLabel": rank_data_all['9'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "2000",
                "displayValue": rank_data_all['10'][19],
                "colorRangeLabel": rank_data_all['10'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "2000",
                "displayValue": rank_data_all['11'][19],
                "colorRangeLabel": rank_data_all['11'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "2000",
                "displayValue": rank_data_all['12'][19],
                "colorRangeLabel": rank_data_all['12'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "2000",
                "displayValue": rank_data_all['13'][19],
                "colorRangeLabel": rank_data_all['13'][19],
          "tllabel": "Year: 2000",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "1999",
                "displayValue": rank_data_all['1'][20],
                "colorRangeLabel": rank_data_all['1'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "1999",
                "displayValue": rank_data_all['2'][20],
                "colorRangeLabel": rank_data_all['2'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "1999",
                "displayValue": rank_data_all['3'][20],
                "colorRangeLabel": rank_data_all['3'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "1999",
                "displayValue": rank_data_all['4'][20],
                "colorRangeLabel": rank_data_all['4'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "1999",
                "displayValue": rank_data_all['5'][20],
                "colorRangeLabel": rank_data_all['5'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "1999",
                "displayValue": rank_data_all['6'][20],
                "colorRangeLabel": rank_data_all['6'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "1999",
                "displayValue": rank_data_all['7'][20],
                "colorRangeLabel": rank_data_all['7'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "1999",
                "displayValue": rank_data_all['8'][20],
                "colorRangeLabel": rank_data_all['8'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "1999",
                "displayValue": rank_data_all['9'][20],
                "colorRangeLabel": rank_data_all['9'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "1999",
                "displayValue": rank_data_all['10'][20],
                "colorRangeLabel": rank_data_all['10'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "1999",
                "displayValue": rank_data_all['11'][20],
                "colorRangeLabel": rank_data_all['11'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "1999",
                "displayValue": rank_data_all['12'][20],
                "colorRangeLabel": rank_data_all['12'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "1999",
                "displayValue": rank_data_all['13'][20],
                "colorRangeLabel": rank_data_all['13'][20],
          "tllabel": "Year: 1999",
          "trlabel": "Ranking: 13"
              },
        {
                "rowid": "1",
                "columnid": "1998",
                "displayValue": rank_data_all['1'][21],
                "colorRangeLabel": rank_data_all['1'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 1"
              },
              {
                "rowid": "2",
                "columnid": "1998",
                "displayValue": rank_data_all['2'][21],
                "colorRangeLabel": rank_data_all['2'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 2"
              },
              {
                "rowid": "3",
                "columnid": "1998",
                "displayValue": rank_data_all['3'][21],
                "colorRangeLabel": rank_data_all['3'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 3"
              }
        ,
              {
                "rowid": "4",
                "columnid": "1998",
                "displayValue": rank_data_all['4'][21],
                "colorRangeLabel": rank_data_all['4'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 4"
              },
              {
                "rowid": "5",
                "columnid": "1998",
                "displayValue": rank_data_all['5'][21],
                "colorRangeLabel": rank_data_all['5'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 5"
              },
              {
                "rowid": "6",
                "columnid": "1998",
                "displayValue": rank_data_all['6'][21],
                "colorRangeLabel": rank_data_all['6'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 6"
              },
              {
                "rowid": "7",
                "columnid": "1998",
                "displayValue": rank_data_all['7'][21],
                "colorRangeLabel": rank_data_all['7'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 7"
              },
              {
                "rowid": "8",
                "columnid": "1998",
                "displayValue": rank_data_all['8'][21],
                "colorRangeLabel": rank_data_all['8'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 8"
              },
              {
                "rowid": "9",
                "columnid": "1998",
                "displayValue": rank_data_all['9'][21],
                "colorRangeLabel": rank_data_all['9'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 9"
              },
              {
                "rowid": "10",
                "columnid": "1998",
                "displayValue": rank_data_all['10'][21],
                "colorRangeLabel": rank_data_all['10'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 10"
              },
              {
                "rowid": "11",
                "columnid": "1998",
                "displayValue": rank_data_all['11'][21],
                "colorRangeLabel": rank_data_all['11'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 11"
              },
        {
                "rowid": "12",
                "columnid": "1998",
                "displayValue": rank_data_all['12'][21],
                "colorRangeLabel": rank_data_all['12'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 12"
              },
        {
                "rowid": "13",
                "columnid": "1998",
                "displayValue": rank_data_all['13'][21],
                "colorRangeLabel": rank_data_all['13'][21],
          "tllabel": "Year: 1998",
          "trlabel": "Ranking: 13"
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
                "code": "#ffd8b1",
                "label": "REAL"
              },
        {
                "code": "#aaffc3",
                "label": "FINL"
              },
        {
                "code": "#7293CB",
                "label": "FAANG"
              }
            ]
          }
        }
      })
      .render();
  });
})
