function aggregateData(data){
    var dataByHost = {};
    data = data.reverse; //need to reverse to sort by date ascending
    for(var i=0; i<data.length; i++)
    {
        var hostName = data[i]['hostname'];
        if(!(hostName in dataByHost)){
            dataByHost[hostName] = [];
        }
        dataByHost[hostName].push(data[i]);
    }
    return dataByHost;
}

function getData(){
    return JSON.parse(localStorage["currentPerformance"]);
//    return [{
//    "totalTimeToDomLoad":50,
//    "totalDNSLookupTime":1200,
//    "totalTimeToFirstResponseByte":10,
//    "url":"http://www.theladders.com/guestjobsearch",
//    "hostname":"www.theladders.com"
//    },
//    {
//    "totalTimeToDomLoad":100,
//    "totalDNSLookupTime":1200,
//    "totalTimeToFirstResponseByte":10,
//    "url":"http://www.theladders.com/guestjobsearch2",
//    "hostname":"www.theladders.com"
//    },
//    {
//    "totalTimeToDomLoad":0,
//    "totalDNSLookupTime":1200,
//    "totalTimeToFirstResponseByte":10,
//    "url":"http://www.google.com/hackathon",
//    "hostname":"www.google.com"
//    },
//    {
//    "totalTimeToDomLoad":0,
//    "totalDNSLookupTime":1200,
//    "totalTimeToFirstResponseByte":10,
//    "url":"http://www.google.com/hackathon2",
//    "hostname":"www.google.com"
//    }];
}

var dataForHost = aggregateData(getData())[localStorage["currentHostname"]]
console.dir(dataForHost);

var xVals = [];
var yVals = [];

for(var i=0; i<dataForHost.length; i++){
    xVals[i] = dataForHost[i]["url"];
    yVals[i] = dataForHost[i]["totalTimeToDomLoad"];
}

var data = new colChartData('URL','Page Load Time (ms)', 'Performance by URL', xVals, yVals,"fakeChartData");
createChart(data);