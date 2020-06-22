Highcharts.chart('revenue-stream', {
    chart: {
        type: 'column',
		backgroundColor: 'transparent'
    },
    title: {
        text: "Today's Parking collection Against time",
		style:{
			color: '#a5a8ad'
		}
    },
    xAxis: {
        categories: ['12AM-1AM', '1AM-2AM', '2AM-3AM', '3AM-4AM', '4AM-5AM', '5AM-6AM', '6AM-7AM', '7AM-8AM', '8AM-9AM', '9AM-10AM', '10AM-11AM', '11AM-12PM', '12PM-1PM', '1PM-2PM', '2PM-3PM', '3PM-4PM', '4PM-5PM', '5PM-6PM', '6PM-7PM', '7PM-8PM', '8PM-9PM', '9PM-10PM', '10PM-11PM', '11PM-12AM']
    },
     yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Total revenue collected'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
               color: '#a5a8ad'
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },
    legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            bottom: 200,
			backgroundColor:'transparent',
			borderColor: '#CCC',
			borderWidth: 1,
			itemStyle: {
            color: 'white',
			font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
			font: '600 10px "Muli", sans-serif'
        },
        },
   tooltip:{
			borderRadius	: 2,
       pointFormat: '{point.y:,.0f}',
		    borderWidth		: 1,
		    borderColor		: '#999',
			shadow			: false,
		    shared			: true,
		    useHTML			: true,
			yDecimals		: 0,
            valueDecimals	: 0,
            headerFormat	: 
                 '<table class="tip text-white"><caption style="font-weight:bold; text-align:left; color:white">{point.key}</caption>'
                +'<tbody>', 
            pointFormat		: 
                  '<tr><th style="color: {series.color}">{series.name}: </th>'
            	+ '<td style="text-align: right">KES {point.y}</td></tr>',
            footerFormat	: 
                 '<tr style="border-top:1px solid black 0.5px; color:white;"><th>Total: </th>'
        		+'<td style="text-align:right"><b>KES {point.total:,.0f}</b></td></tr>'
            	+'</tbody></table>'
        },
         pointFormat: '{point.y:,.0f}',

    plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
            point: {
                events: {
                    mouseOver: updateStackColor(0.2),
                    mouseOut: updateStackColor(0)
                }
            }

        },
        series: {
            //connectNulls: true

            pointWidth: 10,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
    series: [{
        name: 'Onstreet Parking',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3, 4, 7, 2]
    }, {
        name: 'Offstreet Parking',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2, 3, 2, 1]
    }, {
        name: 'Parking Penalties',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
    }, {
        name: 'Fleet Fix',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
    }, {
        name: 'Seasonal Parking',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4, 4, 2, 5]
    }]
});


//===================================================================================
//***** Anual collections with breakdown from months to daily *****//
//===================================================================================

$(function() {
  // Create the chart
  $('#revenuestream-annual').highcharts({
chart: {
      type: 'column',
	backgroundColor: 'transparent',
      events: {
        drilldown: function(e) {
          var chart = this,
            drilldowns = chart.userOptions.drilldown.series,
            series = [];
          e.preventDefault();
          Highcharts.each(drilldowns, function(p, i) {
            if (p.id.includes(e.point.name)) {
              chart.addSingleSeriesAsDrilldown(e.point, p);
            }
          });
          chart.applyDrilldown();
        }
      }
    },
    title: {
      text: 'Parking revenue collection in recent months',
		style:{
			color: '#a5a8ad'
		}
    },
    
    xAxis: {
      type: 'category',
		style:{
			color: '#a5a8ad'
		}
    },
    yAxis: [{
      title: {
        text: 'Total Data Per Bulan'
      },
      stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }

    },],
     legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: '#a5a8ad',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
		 
    },
    
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
        dataLabels: {
          enabled: false,
          format: '{point.y:1f}',
        }
      }
    },

      tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:2f} TON</b> of total<br/>'
    },
    
     tooltip: {
    
        headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
        pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">KES {point.y}</b><br/>',
        formatter: function () {

            var point = this.point,
                s = '<span style="font-size:16px; font-weight:800;">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:{point.color}>' + point.name + '</span> :<b> KES ' + Highcharts.numberFormat(point.y, 0, '.', ',') + '' + '<br/></p>';
            if (point.drilldown) {
                s += '<p><br/> Click to view <b>' + point.name + '</b> Collections </p>';
            }
            return s;
        },
        crosshairs: true


    },

    series: [{
      name: 'Monthly Collections',
      colorByPoint: false,
		 color: '#67ff6b',
      data: [{
        name: 'Jan',
        y: 5633,
        drilldown: 'Jan'
      }, {
        name: 'Feb',
        y: 2403,
        drilldown: 'Feb'
      },{
        name: 'Mar',
        y: 4564,
        drilldown: 'Mar'
      },{
        name: 'Apr',
        y: 2403,
        drilldown: 'Apr'
      },{
        name: 'May',
        y: 2503,
        drilldown: 'May'
      },{
        name: 'Jun',
        y: 2203,
        drilldown: 'Jun'
      },{
        name: 'Jul',
        y: 2483,
        drilldown: 'Jul'
      },{
        name: 'Aug',
        y: 5203,
        drilldown: 'Aug'
      },{
        name: 'Sep',
        y: 2356,
        drilldown: 'Sep'
      },{
        name: 'Oct',
        y: 5895,
        drilldown: 'Oct'
      },{
        name: 'Nov',
        y: 2263,
        drilldown: 'Nov'
      },{
        name: 'Dec',
        y: 2256,
        drilldown: 'dec'
      }]
    }],
    drilldown: {    
      series: [{
        name: 'Seasonal Parking',
        id: 'Jan',
        type: 'column',
        color: '#4deeea',
        data: [
          ['1st', 25],
          ['2nd', 17],
          ['3rd', 8],
          ['4th', 5],
          ['5th', 3],
        ]
      }, {
        name: 'Daily Parking',
        id: 'Jan',
        color: '#74ee15',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      },{
        name: 'Fleetfix',
        id: 'Jan',
         color: '#ffe700',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      },{
        name: 'Penalties',
        id: 'Jan',
         color: '#f000ff',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      },{
        name: 'Offstreet',
        id: 'Jan',
         color: '#001eff',
        type: 'column',
        data: [
          ['1st', 50],
          ['2nd', 40],
          ['3rd', 60],
          ['4th', 65],
          ['5th', 73]
        ]
      }]
    }
  });
});



//===================================================================================
//***** Anual collections with breakdown from months to daily *****//
//===================================================================================


//===================================================================================
//***** comparison of sub revenue streams against months *****//
//===================================================================================

Highcharts.chart('substreams', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent'

    },
    title: {
        text: 'Collection by Revenue stream',
        style: {
            color: '#a5a8ad'
        }
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        gridLineColor: '#197F07',
        gridLineWidth: 0.3,
        min: 0,
        title: {
            text: 'Total revenue collected'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: '#a5a8ad'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0,
        backgroundColor: 'transparent',
        borderColor: '#CCC',
        borderWidth: 1,
        itemStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
        itemHoverStyle: {
            color: 'white',
            font: '600 10px "Muli", sans-serif'
        },
    },
    tooltip: {
        headerFormat: '<h3><strong class="mb-3" style="font-size: 20px !important;">{point.x}</strong></h3><br/><br/><br/>',
        /*  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}', */
        pointFormat: '<strong style="color:{series.color}; font-weight:bold;">{series.name}</strong>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/><br/>',
		footerFormat	: 
                 '<table></tbody><tr style="border-top:1px solid black 0.5px; color:white;"><th>Total: </th>'
        		+'<td style="text-align:right"><b>KES {point.total:,.0f}</b></td></tr>'
            	+'</tbody></table>',
        shared: true,
        crosshairs: true


    },

    plotOptions: {
        column: {
            stacking: 'normal',
            grouping: false,
            dataLabels: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            },
            point: {
                events: {
                    mouseOver: updateStackColor(0.2),
                    mouseOut: updateStackColor(0)
                }
            }

        },
        series: {
            //connectNulls: true

            pointWidth: 10,
            borderWidth: 0,
            borderColor: 'black',


        },
    },
    series: [{
        name: 'Daily Parking',
        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 5, 3]
    }, {
        name: 'Seasonal Parking',
        data: [2, 2, 3, 2, 1, 2, 2, 3, 2, 1, 2, 2]
    }, {
        name: 'Sacco Parking',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
		 name: 'Offstreet Parking',
        
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }, {
        name: 'Parking Penalties',
        data: [3, 4, 4, 2, 5, 3, 4, 4, 2, 5, 3, 4]
    }]
});
//		hover effect
function updateStackColor(alpha) {
    return function () {
        const x = this.x
        const color = Highcharts.color
        const colors = Highcharts.getOptions().colors

        this.series.chart.series.forEach((series, i) => {
            series.data.forEach(point => {
                const basePointColor = color(colors[i])

                point.update({
                    color: alpha === 0
                        ? basePointColor.get() // set original color
                        : point.x === x
                        ? basePointColor.brighten(-alpha).get() // brighten original color
                        : basePointColor.brighten(alpha).get() // dim orignal color
                }, false)
            })
        })

        this.series.chart.redraw(false)
    }
}


//		hover effect


//===================================================================================
//***** comparison of sub revenue streams against months *****//
//===================================================================================

