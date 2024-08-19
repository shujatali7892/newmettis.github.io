 

(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('BR100', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#EC9F34',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#EC9F34'],
                        [0.9, '#EC9F34']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        ''
    ).then(response => response.json());

    Highcharts.chart('BR30', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#EC9F34',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#EC9F34'],
                        [0.9, '#EC9F34']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('KSE100', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#EC9F34',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#EC9F34'],
                        [0.9, '#EC9F34']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('KSE30', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#EC9F34',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#EC9F34'],
                        [0.9, '#EC9F34']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('KMI30', {
        chart: {
            zooming: {
                type: 'x'
            },
            height:300
        },
        title: {
            text: ' ',
            align: 'left'
        },
        subtitle: {
            text: document.ontouchstart === undefined ? ' ' : ' ',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                align: 'right',
                x: 0,
                style: {
                    color: '#EC9F34',  // You can customize this color
                    fontSize: '12px',  // You can customize the font size
                    fontWeight: 'bold' // You can customize the font weight
                }
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#EC9F34'],
                        [0.9, '#EC9F34']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();

 
// ------Policy Rate area chart
 
Highcharts.chart('PolicyRate', {
    chart: {
        type: 'area',
        inverted: true
    },
    title: {
        text: 'SBP Policy Rate (%)',
        align: 'center'
    },
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },
    tooltip: {
        pointFormat: '• {series.name}: <b>${point.y} B</b>'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    yAxis: {
        labels: {
            format: '${text}'
        },
        title: {
            text: ' '
        }
    },
    plotOptions: {
        series: {
            pointStart: 2014
        },
        area: {
            fillOpacity: 0.2
        }
    },
    series: [{
        name: 'Ready', 
        color: '#EC9F34', // Add this line to change the color to red 
        data: [
            11.44, 14.89, 21.40, 34.03, 51.52,
            70.49, 94.46, 129.44, 127.84, 130.80
        ]
    }]
});
 
// --------Forexchrt Column with negative values chart
Highcharts.chart('Forexchrt', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'SBP Policy Rate (%)'
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
        color: '#d0d9e5',
        data: [15, 13, 14, 17, 12]
    }, {
        name: 'Total Reserves',
        color: '#cccccc',
        data: [22, 20, 23, 22, 21]
    }, {
        name: 'Commercial Banks',
        color: '#fbecd6',
        data: [13, 14, 14, 12, 15]
    }]
});

// --------Forexchrt CPI with negative values chart
 
(async () => {

    const data = await fetch(
        'https://www.highcharts.com/samples/data/usdeur.json'
    ).then(response => response.json());

    Highcharts.chart('CPI', {
        chart: {
            zooming: {
                type: 'x'
            }
        },
        title: {
            text:' CPI YOY Rate(%)',
            align: 'center'
        },
        subtitle: {
            text:'',
            align: 'left'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    }, 
                    stops: [
                        [0, '#EC9F34'],
                        [0.9, '#EC9F34']
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    });
})();
 
// --------Forexchrt USDPKR with negative values chart
 

// Data retrieved from https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/
Highcharts.chart('USDPKR', {
    chart: {
        type: 'area'
    },
    accessibility: {
        description: ' '
    },
    title: {
        text: 'USDPKR Final'
    },
    subtitle: {
        text: ' '
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: ' '
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
        name: 'Ready',
      color:  '#EC9F34',
        data: [
            10, 32, 19, 13, 50, 70      
        ]
    } ]
});



 
 
 
 

 
 
