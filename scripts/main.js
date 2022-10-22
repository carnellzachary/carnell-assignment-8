Highcharts.chart('container-one', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Racial demographics of the United States in 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'White', y: 57.6 },
            { name: 'Black or African American', y: 13.7 },
            { name: 'American Indian or Alaska Native', y: 1.0 },
            { name: 'Asian', y: 5.9 },
            { name: 'Native Hawaiian or Other Pacific Islander', y: 0.3 },
            { name: 'Hispanic or Latino', y: 18.6 },
            { name: 'Two or more races', y: 2.9 }
        ]
    }]
});

Highcharts.chart('container-two', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Hate crimes by bias motivation in 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Anti-White', y: 15.7 },
            { name: 'Anti-Black or African American', y: 57.2 },
            { name: 'Anti-American Indian or Alaska Native', y: 1.5 },
            { name: 'Anti-Asian', y: 4.9 },
            { name: 'Anti-Native Hawaiian or Other Pacific Islander', y: 0.2 },
            { name: 'Anti-Multiple Races, Group', y: 4.0 },
            { name: 'Anti-Arab', y: 1.3 },
            { name: 'Anti-Hispanic or Latino', y: 9.9 },
            { name: 'Anti-Other Race/Ethnicity/Ancestry', y: 5.1 }
        ]
    }]
});
