Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Dragon Fruit', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Holly and Brandon\'s house'
      }
    },
    series: [{
      name: 'Holly',
      data: [6, 1, 0, 4]
    }, {
      name: 'Brandon',
      data: [6, 5, 7, 3]
    }]
  });
