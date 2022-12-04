$(function () {

    // Initiate the chart
    $('#the-map-container').highcharts('Map', {
        series: [{
            animation: {
                duration: 1000
            },
            name: "Collected Revenue",
            colorByPoint: false,
            color: '#3b3b3b', // blue
            borderWidth: 1,
            borderColor: '#212327',
			borderColor: '#212327',
             dataLabels: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: 0,
                padding: 4,
//                color: '#a5a8ad',
                format: '{point.name}',
				 shadow: "none",
               
                style: {
                    textTransform: 'uppercase',
                    fontWeight: '500',
					fontFamily: '"Muli", sans-serif',
  					fontSize: '1rem'
                }
            },
			symbol:'circle',
			 marker: {
            symbol: 'square'
        },
    

        "type": "map",
        "joinBy": "id",
        "mapData": [
            {
                "id": "id0",
                "name": "Nandi Central",
                "path": "M73,145,72,145,73,143,74,141,74,140,75,139,75,137,76,137L79,137L82,130,83,130,86,130,87,130,87,127,85,124,85,123,84,122,83,120,82,119,82,117,81,117,81,116,82,115,83,115,84,114,85,113,86,113,86,112,86,111,86,111,86,110,86,109,87,108,87,108,88,107,89,106,88,104,89,103,89,102,89,101,90,101,90,101,91,101,91,101,91,101,94,101,96,100,98,101,99,101,101,102,102,102,103,101,106,99,106,93,108,93,109,92,109,92,110,92,110,91,111,91,111,91,111,91,112,91,112,92,113,92,113,92,114,92,114,93,114,93,114,94,114,95,114,95,114,96,114,96,115,97,115,98,115,100,115,103,116,104,117,105,119,107,120,107,121,107,123,108,121,109,121,110,120,111,120,111,119,110,119,110,119,110,118,110,118,110,117,111L117,111L117,111,118,112,119,112,118,114,118,114L118,114L119,115,120,115,120,116,120,116,119,116,119,118,119,118,119,119,120,118,120,118,121,118,121,117,122,117,123,117,124,116,125,115,125,115,126,114,127,114,128,114,128,114,129,114,129,114,129,115,129,115,128,115,128,117,128,117,128,118,129,118,129,118,129,119,129,119,128,120,128,121,128,121,129,122,131,125,132,125,132,125,133,124,133,124,133,124,133,124,134,123,134,123,135,123L136,123L137,123,138,123L138,123L139,122,139,122,139,121,139,121,140,121,140,122,140,122,140,122,140,122,141,123,141,123,143,123,145,123,145,122,145,119,146,118,146,118,147,117,150,117,152,121,153,123,156,126,156,127,156,127,157,128,159,130,158,130,157,130,156,131,155,131,154,132,154,134,154,135,152,135,152,135,151,136,149,136,148,136,147,137,146,137,146,137,145,137L145,137L144,137,144,137,144,138,144,139,144,141,143,142,143,142,143,143,143,144L141,144L140,145,140,145,139,146,139,146,138,146,137,147,136,147,133,148,130,150,129,151,128,151,127,152,126,152,125,152,125,152,125,152,124,152,123,152L122,152L121,152,121,153,122,154,119,155,118,155,118,156,118,156,118,157,118,159,118,159,118,160,118,161,117,162,117,162,116,163,116,165,116,167,115,165,114,164L113,164L112,164,112,163,111,162,111,162,110,162,110,162,109,162,108,162,108,161,107,161,107,161,106,161,105,161,103,158,102,157,100,155,97,155,97,154,96,154,95,154,94,153,93,151,92,150,91,150,91,149,90,149,90,148,90,147,90,147,89,146,86,147,85,145,85,145,84,145,83,145,83,146,81,145,80,145,80,145,79,145,79,145,78,144,76,144,74,144z"
              },
              {
                "id": "id1",
                "name": "Nandi South",
                "path": "M121,187,116,184,115,183L115,184L115,184,115,185,116,186,116,188,114,189,113,193,111,194,110,194,109,194,108,196,107,196,106,195,107,194,105,194L98,194L94,194,94,190,94,189,92,188,90,187,89,187,89,187,89,188,85,188,84,189,83,189,82,189,82,188,81,188,80,188,79,189,78,189,77,190,76,190,74,190,73,190,73,190L73,189,72,188L70,189,67,189,64,189,61,189L54,189L50,189,47,188,47,188,46,187,45,187,46,186,46,185,47,185,48,184,48,184,48,183,49,182,49,182,50,181,51,180,52,179,52,178,53,178,53,177,53,176,53,174,56,171,56,168,57,167,57,167,57,166,58,166,59,165L59,164L58,163,58,160,58,159,58,159,58,158,58,158,59,157,60,156,60,156,61,155,61,154,62,154,63,154,63,153,64,153,64,152,64,151,68,151,68,149,71,150,72,149,72,148,72,147,72,146,72,145,74,145,75,145,78,145,78,145,79,146,79,145,80,145,81,146,82,146,82,146,83,145,84,145,84,145,85,146,86,147,89,147,89,147,90,148,90,149,90,149,90,150,93,152,95,154,96,154,97,155,97,156,100,155,101,158,102,158,105,161,105,161,106,161,107,161,107,162,108,162,109,162,109,162,110,162,111,162,111,163,111,163,111,164,112,164,113,165L114,165L114,165,116,167,116,169,115,171,115,172,113,173,113,176,115,179,121,178,121,180,119,181,120,183,122,184L122,185L121,185,121,186z"
              },
              {
                "id": "id2",
                "name": "Nandi East",
                "path": "M189,165,187,161,186,159,185,159,184,160,183,161,182,160,182,159,179,156,178,155,177,154,175,153,174,153L173,153L171,151,170,147,172,145,172,141,172,141,172,140,173,140,174,141,177,141,178,141,177,140,176,139,176,138,175,138L175,137L175,137,172,137,172,137,171,136,170,136,170,136,169,137L167,137L167,136,167,136,166,136,166,136,165,136,165,134,164,134,163,133,162,133,161,132,160,131,159,130,158,130,157,130,156,131,155,131,154,132,154,135,152,135,151,136,149,136,148,136,147,137,146,137,146,137,145,137L145,137L144,137,144,137,144,138,144,139,144,141,143,142,143,143,143,143,143,144L141,144L140,145,140,145,139,146,139,146,138,146,137,147,136,147,134,148,133,148,132,149,130,150,129,151,128,151,127,152,125,152,125,152,124,152,123,152,123,152L122,152L121,152,121,153,122,154,119,155,118,155,118,156,118,156,118,157,118,159,118,159,118,160,118,161,117,162,117,162,116,165,116,167,116,169,116,170,115,171,114,172,113,173,113,176,115,179,121,178,121,180,120,180,121,182,123,184L123,184L122,185,122,186,121,187,122,187,123,188,125,189,127,191,129,190,130,190,131,189,132,189,133,189,134,188,136,187,137,186,138,185,138,184,138,183,137,182,137,178,139,176,139,174,140,174,141,173,147,173,148,172,148,171,150,171,151,171,151,171,153,170,154,169,155,169,155,167,156,166,157,166,160,166,161,167,161,168,162,169,162,170,163,171,163,171,164,171,167,171,169,171,170,170,171,170,172,170,173,169,174,170,176,171,176,169,176,168,177,167L178,167,180L167,-0.45595L168,-0.31925-0.45595L169,-0.27365-0.31925-0.45595L170,-0.22804-0.27365-0.31925-0.45595L171,-0.45608-0.22804-0.27365-0.31925-0.45595L172,0.0912-0.45608-0.22804-0.27365-0.31925-0.45595LL174,0LL174,0.0456Lz"
              },
              {
                "id": "id3",
                "name": "Tinderet",
                "path": "M145,198L145,205L145,206,150,206,153,205,154,205,156,205,157,205,158,204,163,202,164,202,165,202,166,203,167,204,169,206,171,207,174,207,176,207,179,207,181,207,183,204,186,202,187,202,191,201,192,199,191,198,189,194,188,191,188,190,187,189,187,187,188,185,189,184,189,182,190,181,191,181,194,179,195,178,191,168,189,165,188,165,187,165L186,165L185,165,184,165,181,166,181,166,180,167L177,167L176,168,176,169,176,171,174,170,173,169,171,170,170,170,169,171,167,171,166,171,164,171,163,171,163,171,162,170,162,169,161,168,161,167,160,166,157,166,156,166,155,167,155,169,154,169,153,170,151,171,151,171,150,171,149,171,148,171,148,172,147,173,141,173,140,174,139,174,139,176,137,178,137,182,138,183,138,184,138,185,137,186,136,187,134,188,133,189,135,189,137,189,138,189,139,189,140,189,142,190,143,190,143,192,144,194,144,196,145,197,145,198z"
              },
              {
                "id": "id4",
                "name": "Nandi North",
                "path": "M58,62,101,58L103,58L116,63L116,62L116,62,116,60,117,60L117,59L118,61,119,61,119,62,122,62,124,63,125,64,126,63,128,63,129,63,131,62,130,63,131,65,130,66L130,70L129,72,129,73,128,75,127,76,126,77,125,78,125,79,128,83,131,87,132,89,133,90,134,91,138,99,140,103,143,107,146,111,146,113,147,114,150,117L148,117L146,117,146,118,145,119,145,121,145,123,145,124,143,123,142,123,141,123L141,123L140,122,140,121,139,121,139,122,139,123,138,123,137,123,137,123,136,123L135,123L134,123,134,124,132,125,128,121,128,120,129,120,129,119,129,118,129,118,128,118,128,116,130,115,129,114,127,113,125,115,124,116,122,118L121,118L120,118,119,118,119,117,120,117,120,116,120,115,119,115,119,114,119,112,117,112,118,111,118,110L119,110L120,111,121,110,122,110,122,109,123,108,122,107,120,107,119,107,115,103,115,98,115,97,114,95,114,92,113,92L112,92L111,90,108,93,106,93L106,99L102,102,101,102,100,101,99,101,95,100L92,100L91,101,90,101,89,103,89,106,87,107,87,108,87,109,86,113,85,113,84,114,83,115,82,116L81,116L78,111L78,110L77,108,77,107,77,107,77,103,79,104,80,105,80,102,81,101,82,91,77,83,75,79,73,77,70,74,70,73,70,71,66,68,64,66,63,66,62,65,60,64z"
              }
         ],

            data: [{
                    //Langata
                    "id": "id0",
                    "y": 0,
                    drilldown: 'langata',
                    value: 30
                },
                {
                    //dagoreti south
                    "id": "id1",
                    "y": 1,
                    value: 6,
                    drilldown: 'dagoreti_south',
                    name: "Point2",
                },
                {
                    //kibra
                    "id": "id2",
                    "y": 2,
                    drilldown: 'kibra',
                    value: 252389
                },
                {
                    //dagoreti north
                    "id": "id3",
                    "y": 3,
                    value: 256488
                },
                {
                    //starehe
                    "id": "id4",
                    "y": 4,
                    value: 924656
                },
                {
                    //westlands
                    "id": "id5",
                    "y": 5,
                    value: 333
                },
                {
                    //embakasi south
                    "id": "id6",
                    "y": 6,
                    value: 3216
                },
                {
                    //makadara
                    "id": "id7",
                    "y": 7,
                    value: 23215
                },
                {
                    //embakasi west
                    "id": "id8",
                    "y": 8,
                    value: 1564962
                },
                {
                    //embakasi central
                    "id": "id9",
                    "y": 9,
                    value: 3165

                },
                {
                    //kamkunji
                    "id": "id10",
                    "y": 10,
                    value: 6216532
                },
                {
                    //embakasi north
                    "id": "id11",
                    "y": 11,
                    value: 56523
                },
                {
                    //embakasi east
                    "id": "id12",
                    "y": 12,
                    value: 132132
                },
                {
                    //kasarani
                    "id": "id13",
                    "y": 13,
                    value: 65413
                },
                {
                    //ruaraka 
                    "id": "id14",
                    "y": 14,
                    value: 656132
                },
                {
                    //mathare
                    "id": "id15",
                    "y": 15,
                    value: 321165
                },
                {
                    //roysambu
                    "id": "id16",
                    "y": 16,
                    value: 1632
                },
                {
                    //unmatched      
                    "id": "id18",
                    "y": 18,
                    value: 11365895
                },
                {
                    //langata
                    "id": "id19",
                    "y": 19,
                    value: 3
                }
            ]
        }],
        drilldown: {
            chart: {
                backgroundColor: 'transparent',
                type: 'column'
          },
            series: [{
              type: 'bar',
              id: 'langata',
              name: 'langata',
              colorByPoint: true,
              data: [{
                name: '1st',
                y: 22,
                drilldown: 'dec1'
            },
            {
                name: '2nd',
                y: 22,
                drilldown: 'dec2'
            },
            {
                name: '3rd',
                y: 224,
                drilldown: 'dec3'
            },
            {
                name: '4th',
                y: 202,
                drilldown: 'dec3'
            },
            {
                name: '5th',
                y: 272,
                drilldown: 'dec5'
            },
            {
                name: '6th',
                y: 172,
                drilldown: 'dec6'
            }, {
                name: '7th',
                y: 122,
                drilldown: 'dec6'
            }, {
                name: '8th',
                y: 172,
                drilldown: 'dec8'
            }, {
                name: '9th',
                y: 105,
                drilldown: 'dec9'
            }, {
                name: '10th',
                y: 272,
                drilldown: 'dec10'
            }, {
                name: '11th',
                y: 272,
                drilldown: 'dec11'
            }, {
                name: '12th',
                y: 572,
                drilldown: 'dec12'
            }, {
                name: '13th',
                y: 72,
                drilldown: 'dec13'
            }, {
                name: '13th',
                y: 292,
                drilldown: 'dec13'
            }, {
                name: '14th',
                y: 472,
                drilldown: 'dec14'
            }, {
                name: '15th',
                y: 272,
                drilldown: 'dec15'
            }, {
                name: '16th',
                y: 394,
                drilldown: 'dec16'
            }, {
                name: '17th',
                y: 27,
                drilldown: 'dec17'
            }, {
                name: '18th',
                y: 372,
                drilldown: 'dec18'
            }, {
                name: '19th',
                y: 524,
                drilldown: 'dec19'
            }, {
                name: '20th',
                y: 564,
                drilldown: 'dec20'
            }, {
                name: '21st',
                y: 272,
                drilldown: 'dec21'
            }, {
                name: '22nd',
                y: 22,
                drilldown: 'dec22'
            }, {
                name: '23rd',
                y: 272,
                drilldown: 'dec23'
            }, {
                name: '24th',
                y: 272,
                drilldown: 'dec24'
            }, {
                name: '25th',
                y: 172,
                drilldown: 'dec25'
            }, {
                name: '26th',
                y: 272,
                drilldown: 'dec26'
            }, {
                name: '27th',
                y: 272,
                drilldown: 'dec27'
            }, {
                name: '28th',
                y: 452,
                drilldown: 'dec28'
            }, {
                name: '29th',
                y: 458,
                drilldown: 'dec29'
            }, {
                name: '30th',
                y: 226,
                drilldown: 'dec30'
            }, {
                name: '31st',
                y: 152,
                drilldown: 'dec31'
            }
              ]
            },{
              type: 'bar',
              id: 'dagoreti_south',
              name: 'dagoreti_south',
              colorByPoint: true,
              data: [
                ['Column1OC', 9],
                ['Column2OC', 1],
                ['Column3OC', 4]
              ]
            },{
              type: 'bar',
              name: 'kibra',
              id: 'kibra',
              colorByPoint: true,
              data: [
                ['Column1AF', 6],
                ['Column2AF', 6],
                ['Column3AF', 5]
              ]
            },{
              type: 'bar',
              name: 'Asia',
              colorByPoint: true,
              data: [
                ['Column1AS', 9],
                ['Column2AS', 1],
                ['Column3AS', 2]
              ]
            },{
              type: 'bar',
              name: 'North America',
              colorByPoint: true,
              data: [
                ['Column1NA', 9],
                ['Column2NA', 1],
                ['Column3NA', 9]
              ]
            },{
              type: 'bar',
              name: 'South America',
              colorByPoint: true,
              data: [
                ['Column1SA', 2],
                ['Column2SA', 9],
                ['Column3SA', 2]
              ]
            }]
          },
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: 'Collections By sub County',
            style: {
                color: '#a5a8ad',
				align: 'left'
            }
        },
        mapNavigation: {
            enabled: true,


        },
        colorAxis: {
            fill: 'red',
            min: 1,
            backgroundColor: 'red',
            type: 'logarithmic',
            minColor: '#3b3b3b',
            maxColor: '#45d21a',
            /* stops: [
                [0, '#3b3b3b'],
                [0.46, '#40802c'],
                [1, '#45d21a']
            ] */
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor: 'transparent',
            shadow: false

        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}; text-transform:ucapitalize;">{point.name}</span>: <b style="color:{point.color}">KES {point.value}</b><br/>',


        },

        /* navigation: {
          buttonOptions: {
            theme: {
              'stroke-width': 1,
              stroke: 'white',
              r: 0,
              states: {
                hover: {
                  fill: '#bada55'
                },
                select: {
                  stroke: '#039',
                  fill: '#bbadab'
                }
              }
            }
          }
        } */


    });

});

//setting todays date
var the_date =moment().format("MMMM Do YYYY");
	$('.map-date').text(the_date);

// button functions

// the financial year's data
$('#financial-year').click(function () {
	//getting financial year
	var this_year=moment().format("YYYY");
	var last_year=moment().subtract(1, 'year').format("YYYY");
	var next_year=moment().add(1, 'years').format("YYYY");
	var this_month=moment().format("MM");
	var this_month=parseInt(this_month);
	var fy=last_year+"/"+this_year;
	if(this_month>6){
		fy=this_year+"/"+next_year;
	}
	
	$('.map-date').text(fy+" Financial Year");
	 //changing color axis colors
	$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
        .colorAxis[0].update({
            min: 1,

            minColor: '#3b3b3b',
            maxColor: '#2e71ff'
        });
    var chart2 = $('#the-map-container').highcharts();
    //the data 
    chart2.series[0].update([{
            "id": "id",
            "y": 0,
            value: 330
        },
        {
            //dagoreti south
            "id": "id1",
            "y": 1,
            value: 36,

        },
        {
            //kibra
            "id": "id2",
            "y": 2,
            value: 3252389
        },
        {
            //dagoreti north
            "id": "id3",
            "y": 3,
            value: 3256488
        },
        {
            //starehe
            "id": "id4",
            "y": 4,
            value: 3924656
        },
        {
            //westlands
            "id": "id5",
            "y": 5,
            value: 3333
        },
        {
            //embakasi south
            "id": "id6",
            "y": 6,
            value: 33216
        },
        {
            //makadara
            "id": "id7",
            "y": 7,
            value: 323215
        },
        {
            //embakasi west
            "id": "id8",
            "y": 8,
            value: 31564962
        },
        {
            //embakasi central
            "id": "id9",
            "y": 9,
            value: 33165

        },
        {
            //kamkunji
            "id": "id10",
            "y": 10,
            value: 36216532
        },
        {
            //embakasi north
            "id": "id11",
            "y": 11,
            value: 356523
        },
        {
            //embakasi east
            "id": "id12",
            "y": 12,
            value: 3132132
        },
        {
            //kasarani
            "id": "id13",
            "y": 13,
            value: 365413
        },
        {
            //ruaraka 
            "id": "id14",
            "y": 14,
            value: 656132
        },
        {
            //mathare
            "id": "id15",
            "y": 15,
            value: 321165
        },
        {
            //roysambu
            "id": "id16",
            "y": 16,
            value: 30000000
        },
        {
            //unmatched      
            "id": "id18",
            "y": 18,
            value: 300000
        },
        {
            //langata
            "id": "id19",
            "y": 19,
            value: 332568962
        }
    ]);
    $(this).attr('disabled', true).siblings().attr('disabled', false);
    $('#this-month').attr('disabled', false);
    $('#today').attr('disabled', false);
});

//monthly data for this month
$('#this-month').click(function () {
	
	//geting the date
	var the_date =moment().format("MMMM YYYY");
	$('.map-date').text(the_date);
	
    //changing color
	$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
        .colorAxis[0].update({
            min: 1,

            minColor: '#3b3b3b',
            maxColor: '#fdc502'
        });

    var chart2 = $('#the-map-container').highcharts();
    chart2.series[0].update([{
            "id": "id",
            "y": 0,
            value: 230
        },
        {
            //dagoreti south
            "id": "id1",
            "y": 1,
            value: 26,
            name: "Point2",
        },
        {
            //kibra
            "id": "id2",
            "y": 2,
            value: 2252389
        },
        {
            //dagoreti north
            "id": "id3",
            "y": 3,
            value: 2256488
        },
        {
            //starehe
            "id": "id4",
            "y": 4,
            value: 2924656
        },
        {
            //westlands
            "id": "id5",
            "y": 5,
            value: 2333
        },
        {
            //embakasi south
            "id": "id6",
            "y": 6,
            value: 23216
        },
        {
            //makadara
            "id": "id7",
            "y": 7,
            value: 223215
        },
        {
            //embakasi west
            "id": "id8",
            "y": 8,
            value: 21564962
        },
        {
            //embakasi central
            "id": "id9",
            "y": 29,
            value: 23165

        },
        {
            //kamkunji
            "id": "id10",
            "y": 10,
            value: 26216532
        },
        {
            //embakasi north
            "id": "id11",
            "y": 11,
            value: 256523
        },
        {
            //embakasi east
            "id": "id12",
            "y": 12,
            value: 2132132
        },
        {
            //kasarani
            "id": "id13",
            "y": 13,
            value: 265413
        },
        {
            //ruaraka 
            "id": "id14",
            "y": 14,
            value: 2656132
        },
        {
            //mathare
            "id": "id15",
            "y": 15,
            value: 2321165
        },
        {
            //roysambu
            "id": "id16",
            "y": 16,
            value: 21632
        },
        {
            //unmatched      
            "id": "id18",
            "y": 18,
            value: 211365895
        },
        {
            //langata
            "id": "id19",
            "y": 19,
            value: 23
        }
    ]);
     $(this).attr('disabled', true).siblings().attr('disabled', false);
    $('#financial-year').attr('disabled', false);
    $('#today').attr('disabled', false);
});

//daily data for today
$('#today').click(function () {
	//geting the date
	var the_date =moment().format("MMMM Do YYYY");
	$('.map-date').text(the_date);
//	alert(the_date);
    //color change
	$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
        .colorAxis[0].update({
            min: 1,

            minColor: '#3b3b3b',
            maxColor: '#45d21a'
        });
    var chart2 = $('#the-map-container').highcharts();
    chart2.series[0].update([{
                "id": "id",
                "y": 0,
                value: 30
            },
            {
                //dagoreti south
                "id": "id1",
                "y": 1,
                value: 6,
                name: "Point2",
            },
            {
                //kibra
                "id": "id2",
                "y": 2,
                value: 252389
            },
            {
                //dagoreti north
                "id": "id3",
                "y": 3,
                value: 256488
            },
            {
                //starehe
                "id": "id4",
                "y": 4,
                value: 924656
            },
            {
                //westlands
                "id": "id5",
                "y": 5,
                value: 333
            },
            {
                //embakasi south
                "id": "id6",
                "y": 6,
                value: 3216
            },
            {
                //makadara
                "id": "id7",
                "y": 7,
                value: 23215
            },
            {
                //embakasi west
                "id": "id8",
                "y": 8,
                value: 1564962
            },
            {
                //embakasi central
                "id": "id9",
                "y": 9,
                value: 3165

            },
            {
                //kamkunji
                "id": "id10",
                "y": 10,
                value: 6216532
            },
            {
                //embakasi north
                "id": "id11",
                "y": 11,
                value: 56523
            },
            {
                //embakasi east
                "id": "id12",
                "y": 12,
                value: 132132
            },
            {
                //kasarani
                "id": "id13",
                "y": 13,
                value: 65413
            },
            {
                //ruaraka 
                "id": "id14",
                "y": 14,
                value: 656132
            },
            {
                //mathare
                "id": "id15",
                "y": 15,
                value: 321165
            },
            {
                //roysambu
                "id": "id16",
                "y": 16,
                value: 1632
            },
            {
                //unmatched      
                "id": "id18",
                "y": 18,
                value: 11365895
            },
            {
                //langata
                "id": "id19",
                "y": 19,
                value: 3
            }
        ]

    );
     $(this).attr('disabled', true).siblings().attr('disabled', false);
    $('#financial-year').attr('disabled', false);
    $('#this-month').attr('disabled', false);
});

//this week
    $('#this-week').click(function() {
		//getting this weeks dates
		const today = moment();
		const otherday=moment()
		const too_date = otherday.endOf('week');	
		const from_date = today.startOf('week');			
		const the_date=from_date.format("MMMM Do YYYY")+' To '+too_date.format("MMMM Do YYYY");
		$('.map-date').text(the_date);
		
		
    //color change
		$(this).addClass("active").siblings().removeClass("active");
    $('#the-map-container').highcharts()
            .colorAxis[0].update({
				min: 1,
				
				minColor: '#3b3b3b',
				maxColor: '#ea00d9'
			});
    		 var chart2 = $('#the-map-container').highcharts();
        chart2.series[0].update( [
      {
        "id": "id0",
        "y": 0,
        value: 30
      },
      {
        //dagoreti south
        "id": "id1",
        "y": 1,
        value: 6,
        name: "Point2",
      },
      {
      	//kibra
        "id": "id2",
        "y": 2,
        value: 2572389
      },
      {
      	//dagoreti north
        "id": "id3",
        "y": 3,
        value:2576488
      },
      {
      //starehe
        "id": "id4",
        "y": 4,
        value: 9274656
      },
      {
      	//westlands
        "id": "id5",
        "y": 5,
        value:3337776
      },
      {
      	//embakasi south
        "id": "id6",
        "y": 6,
        value:673216
      },
      {
      	//makadara
        "id": "id7",
        "y": 7,
        value: 2328715
      },
      {
      	//embakasi west
        "id": "id8",
        "y": 8,
        value:15564962
      },
      {
      	//embakasi central
        "id": "id9",
        "y": 9,
        value:3166785
        
      },
      {
      	//kamkunji
        "id": "id10",
        "y": 10,
        value:6216789532
      },
      {
      	//embakasi north
        "id": "id11",
        "y": 11,
        value:565423
      },
      {
      	//embakasi east
        "id": "id12",
        "y": 12,
        value:1325132
      },
      {
      	//kasarani
        "id": "id13",
        "y": 13,
        value:657413
      },
      {
      	//ruaraka 
        "id": "id14",
        "y": 14,
        value:6567132
      },
      {
      	//mathare
        "id": "id15",
        "y": 15,
        value:3271165
      },
      {
      	//roysambu
        "id": "id16",
        "y": 16,
        value:1789632
      },      
      {
      //unmatched      
        "id": "id18",
        "y": 18,
        value:11365895
      },
      {
      	//langata
        "id": "id19",
        "y": 19,
        value:78903
      }
    ]
        
        );
        $(this).attr('disabled', true).siblings().attr('disabled', false);
        $('#financial-year').attr('disabled', false);
         $('#this-month').attr('disabled', false);
    });
