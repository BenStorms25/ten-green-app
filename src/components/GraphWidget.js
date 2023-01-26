import React, { useState, useEffect } from "react";
import CountyList from "../content/CountyData.json";
import * as Highcharts from "highcharts"

Highcharts.chart('container', {

    chart: {
      scrollablePlotArea: {
        minWidth: 700
      }
    },
  
    data: {
      csvURL: 'https://gist.githubusercontent.com/Edaran123/fee16ca5b941ce578cc54bae7038e7f4/raw/840340ae33f4a4399684bb18da3a39d19cc9565e/exampledata.csv',
      beforeParse: function (csv) {
        return csv.replace(/\n\n/g, '\n');
      }
    },
  
    title: {
      text: 'Los Angeles, CA - 10Green Score Over Time',
      align: 'left'
    },
  
    subtitle: {
      text: '1980-2001',
      align: 'left'
    },
  
    xAxis: {
      plotLines: [{
              color: '#000000',
              width: 1,
              value: 1980
          }],
      tickInterval: 5, // should be based on data length
      minorTickInterval: 1,
      tickWidth: 1,
      minorTickWidth: 1,
      minorTickLength: 4,
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      title: {
        text: "Year"
      },
      labels: {
        align: 'left',
        x: -15,
        y: 20
      }
    },
  
     
    yAxis: [{ // left y axis
      title: {
        text: "Score"
      },
      gridLineWidth: 0, 
      
      labels: {
        align: 'left',
        x: -10,
        y: 10,
        //format: '{value:.,0f}'
      },
      showFirstLabel: false
    }, { // right y axis
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: null
      },
      labels: {
        align: 'right',
        x: 0,
        y: 10,
        //format: '{value:.,0f}'
      },
      showFirstLabel: false
    }],
  
    legend: {
      enabled: false,
      align: 'left',
      verticalAlign: 'top',
      borderWidth: 0
    },
  
    tooltip: {
      shared: true,
      crosshairs: false
    },
  
    plotOptions: {
      series: {
        color: '#bde59c',
        cursor: 'pointer',
        className: 'popup-on-click',
        marker: {
          lineWidth: 1
        }
      }
    },
  
    series: [{
      name: 'All sessions',
      lineWidth: 4,
      marker: {
        radius: 0
      }
    }, {
      name: 'New users'
    }]
  });