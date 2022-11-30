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
            "name": "Mt Kenya",
            "path": "M102,19,51,97,54,97C54,97,58,96,59,96,60,96,64,97,65,97,66,97,75,94,75,94L78,94C78,94,85,94,87,94,88,94,92,93,92,93L98,93,103,94,106,94,108,95,111,95C111,95,113,95,114,95,115,95,117,93,117,93L122,94,133,95,139,95C139,95,142,95,142,93,143,91,144,90,144,90L146,92C146,92,149,95,151,95,152,96,157,97,157,97L161,96,155,87,104,20C104,20,103,19,102,19z"
          },
          {
            "id": "id1",
            "name": "Kirinyaga West",
            "path": "M73,95C73,95,67,97,66,97,65,97,61,96,59,96,58,96,51,97,51,97,51,97,47,98,47,98,47,99,46,101,46,101,45,102,41,101,39,101,38,100,36,102,36,102L34,104,35,108,33,111C33,111,34,112,34,113,34,114,31,115,31,115,31,115,28,115,29,116,29,117,31,120,31,120L32,122,32,123,29,125,26,124,25,125C25,125,23,126,22,126,21,126,20,128,20,128L23,130C23,130,23,130,23,131,22,132,21,132,21,132,21,132,22,134,21,135,21,136,19,138,19,138L18,139,20,140,21,142,22,141,26,144,27,145,29,145C29,145,29,145,30,145,30,145,31,145,31,145L31,147,34,147,36,148C36,148,37,149,37,150,37,151,37,152,36,152,35,152,35,153,35,153,35,153,33,154,33,155,33,155,34,157,34,157L32,157,32,158C32,158,33,159,33,160,33,160,32,162,32,162L34,163C34,163,35,162,36,163,36,164,37,167,37,167,37,167,42,167,43,167,44,166,46,166,46,166,47,166,48,167,48,167,48,167,49,169,49,169L51,171,53,172,54,173,55,173C55,173,62,169,63,168,64,168,65,167,65,167L66,170,67,172C67,172,68,171,68,171,69,171,69,169,69,169,69,169,70,168,69,167,68,167,63,161,63,161L68,159C68,159,76,156,76,156,77,155,79,154,79,153,80,151,82,149,84,147,86,146,91,145,91,145L96,143,92,139,89,135,84,131,85,127,84,126C84,126,85,125,84,125,83,124,81,124,81,124L78,123C78,123,78,122,77,122,77,121,76,121,76,121L76,119,75,115C75,115,74,115,74,115,73,115,72,115,72,115L71,114,72,111C72,111,71,110,70,110,70,109,67,107,67,107,67,107,67,105,68,104,69,104,74,100,74,100L75,97,73,96z"
          },
          {
            "id": "id2",
            "name": "Kirinyaga Central",
            "path": "M73,95C73,95,74,94,74,94,75,94,78,94,79,94,79,94,86,95,87,95,88,94,92,93,92,93L98,93,103,94,106,95L108,95L110,97,110,97,108,98C108,98,110,100,110,100,110,101,110,101,110,101,110,101,111,103,111,103,111,103,112,106,112,106L113,108,110,112C110,112,110,112,109,113,108,113,107,113,107,113L106,115,109,118,108,119,112,123,114,125,117,125C117,125,120,125,121,125,123,125,123,126,123,126L123,127,129,133,130,134,132,135L132,136L123,136C123,136,121,136,119,137,117,138,112,139,112,139L110,138C110,138,110,139,109,139,108,140,106,140,106,140L102,142,99,142,96,143,90,135,84,131,85,127,84,126,84,125,78,123C78,123,76,121,76,121,76,121,76,119,76,119L75,115,74,115,72,115,71,114,72,111,67,107C67,107,67,105,67,105,67,104,71,103,71,103L74,100,75,98,74,96z"
          },
          {
            "id": "id3",
            "name": "Kirinyaga East",
            "path": "M161,97,161,99,162,99,161,102,161,103,163,104,163,106C163,106,162,107,163,108,163,108,163,109,163,109,162,110,161,112,161,113,161,113,162,114,162,115,162,115,161,116,162,116,162,117,163,118,163,118,163,118,162,118,162,120,162,121,166,124,168,125,171,127,172,127,172,127L171,128,173,130C173,130,171,131,170,131,170,132,164,131,164,131,163,131,156,134,156,134L150,135C150,135,147,134,146,134,146,134,144,134,144,134L143,134L142,135,137,136,132,136,123,127,123,126C123,126,123,125,122,125,121,125,117,124,117,124L114,125C114,125,109,120,109,120,108,119,109,118,109,118L106,115,107,113,110,112,113,108,112,106,111,103,110,101,110,100,108,98,110,97,110,97,108,95,114,95C114,95,116,95,116,94,116,94,117,93,117,93L122,94,129,94,134,95,136,95,139,95C139,95,142,94,142,94,142,93,143,91,143,91L144,90,148,94C148,94,150,95,151,96,152,96,158,97,158,97L161,96z"
          },
          {
            "id": "id4",
            "name": "Mwea East",
            "path": "M184,184,197,186C197,186,196,184,194,183,192,182,192,183,191,182,189,182,187,181,187,180,187,179,189,175,189,175,189,175,186,172,187,172,187,171,188,169,188,169,188,168,186,166,186,165,186,165,186,162,186,162,186,162,188,160,188,159,189,158,189,157,190,156,190,155,193,154,193,153,193,153,193,151,192,150,191,149,191,149,190,149,189,149,188,149,188,148,187,148,188,146,189,146,189,146,190,145,190,145L191,145,191,143,189,143C189,143,188,141,187,140,187,140,187,138,187,138,187,138,186,137,186,137,186,136,186,136,186,135,185,135,184,135,184,135L181,135C181,135,180,134,180,134,179,133,177,134,177,134,177,134,174,133,174,132,173,132,173,131,173,131L171,131,164,131,156,134,150,134,146,134C146,134,145,134,144,134,144,134,142,134,142,134L142,135,138,136,132,136,123,136,120,137,118,137,112,139,110,138C110,138,110,139,109,139,109,140,107,140,107,140L107,142C107,142,104,142,104,143,104,144,105,145,105,145,105,145,105,146,105,146,105,147,106,147,106,148,106,149,106,149,106,149L107,151,107,152,108,153,108,155,109,156,109,156,110,156,111,156,112,157L113,157C113,157,114,158,115,159,115,159,115,160,115,160L114,160,115,162,116,162,117,163,118,163L118,163L119,163,119,164,121,165,122,165C122,165,124,165,124,166,124,166,125,166,125,166L124,167,124,169,123,170,124,171C124,171,122,172,122,172,122,172,123,173,124,174,126,175,127,174,127,174L127,175,128,175,130,176,131,177,132,176,132,177,134,177C134,177,135,177,135,178,135,178,133,179,133,179,133,179,132,178,133,179,133,179,134,180,134,180,134,181,134,182,134,182L135,182,137,183,138,183C138,183,139,184,140,184,140,184,142,184,142,184L147,184,152,183C152,183,154,183,155,184,157,184,159,185,159,185,159,185,161,185,162,185,162,185,164,185,165,185,166,185,168,184,169,184,170,184,172,184,172,184,172,184,174,185,175,185,176,185,179,184,179,184,179,184,180,183,181,183,182,183,184,184,184,184z"
          },
          {
            "id": "id5",
            "name": "Mwea West",
            "path": "M67,172C67,172,68,173,68,174,68,175,69,178,70,179,70,180,72,179,72,179L73,182,74,183C74,183,76,184,77,185,77,186,77,187,78,187,78,187,80,188,80,188L80,190,83,192,83,193,80,193C80,193,79,192,79,192,78,192,77,193,77,193L78,195,80,198,80,199,80,200,82,200,85,196,87,193,89,193,99,193,101,192,105,192,106,194C106,194,112,197,116,198,120,198,123,198,123,198L127,198C127,198,128,196,129,195,129,195,137,196,137,196,137,196,143,193,147,192,150,191,158,192,160,191,162,191,170,187,170,187,170,187,174,187,176,187,178,187,179,187,180,187,181,186,184,185,184,185,184,185,182,183,180,183,178,184,175,185,175,185L173,185,171,184,169,184,164,186,161,185L159,185L156,184,153,183,143,184,140,184,138,183L136,183L134,181L134,180L133,179C133,179,133,179,134,179,135,179,134,177,134,177L132,177,130,176,128,175,127,175,126,174,124,174,122,172,124,171,123,170,124,169,123,167,124,166C124,166,124,166,123,165,122,164,119,164,119,164L119,164C119,164,119,163,118,163,118,162,116,163,116,163,116,163,115,162,115,162,115,161,114,160,114,160L115,160C115,160,115,159,114,158,113,157,113,157,113,157L112,157,111,156C111,156,110,156,109,156,108,156,108,155,108,155L108,153,107,152,107,151,106,149L106,148L105,147,105,146L105,145L105,144,104,144,104,144,104,143,104,143L104,143L104,143,104,143,105,143,105,143,105,142,105,142,106,142,106,142,106,142,107,142,107,140,107,140,103,141,102,142,101,142,100,142,99,143,97,143,96,143,96,143,96,143,94,144,92,145,91,145,91,145,90,146,88,146,87,146,86,147,84,147,83,148,83,148,83,148,82,149,81,149,81,150,80,151,80,152,79,152,79,153,79,153,79,154,78,154,78,154,78,155,77,155,77,156,77,156,76,156,76,156,74,157,73,157,72,158,70,159,69,159,65,160,63,161,69,167,69,168,69,168,69,168,69,169,69,169,69,170,69,170,68,171,68,171,68,171,68,171,68,172,67,172z"
          }
        ],

            data: [{
                    //Langata
                    "id": "i",
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
