 

// --------Forexchrt USDPKR with negative values chart
 
Highcharts.chart('KSELast', {
    chart: {
        type: 'area'
    },
    accessibility: {
        description: ' '
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: ' '
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: 'Range: 1940 to 2024.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>' +
            'warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name:' ' ,
        color: '#EC9F34' ,
        data: [
            129, 120, 121, 120, 70 , 43 , 12, 9, 13, 50,  30
        ]
    }]
});

 // --------KseVolume Column with negative values chart
Highcharts.chart('KseVolume', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' '
    },
    xAxis: {
        categories: ['21 June', '22 June', '23 June', '24 June', '25 June']
    },
    credits: {
        enabled: false
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'top',
        y: 1 // Adjust this value if needed
    },
    plotOptions: {
        column: {
            borderRadius: '25%'
        }
    },
    series: [{
        name: 'Central Bank',
        color: '#EC9F34',
        data: [15, 13, 14, 17, 12]
    } ]
});
 
 

 
 
