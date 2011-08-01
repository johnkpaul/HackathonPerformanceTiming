function drawChartFunction(chartData){
    return function() { drawChart(chartData); }
}

function drawChart(chartData) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', chartData.xIdentifier);
    data.addColumn('number', chartData.yIdentifier);
    data.addRows(chartData.xVals.length)
    for(var i=0; i<chartData.yVals.length; i++)
    {
        data.setValue(i,0,chartData.xVals[i])
        data.setValue(i,1,chartData.yVals[i])
    }

    var chart = new google.visualization.LineChart(document.getElementById(chartData.divId));
    chart.draw(data, {width: 500, height: 100, title: chartData.title,
                      //vAxis: {title: 'Page Load Time(ms)', titleTextStyle: {color: 'blue'}},
                      hAxis: {title: chartData.xIdentifier, titleTextStyle: {color: 'red'}}
                     });
}

function createChart(data){
    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChartFunction(data));
}

function colChartData(xIdentifier, yIdentifier, title, xVals, yVals,divId)
{
    this.xIdentifier = xIdentifier;
    this.yIdentifier = yIdentifier;
    this.title = title;
    this.xVals = xVals;
    this.yVals = yVals;
    this.divId = divId;
}

var xVals = ['google.com','amazon.com','ebay.com','facebook.com']
var yVals = [100,500,600,1400]

var data = new colChartData('URI','Page Load Time (ms)', 'Performance by URI', xVals, yVals,"chart_div")
//drawChart(data)
//drawChart(new colChartData('URI','Load Time','Performance by Domain', ['foobar','barfoo'], [2,3],"chart2_div"))

//createChart(data);
