function aggregateData(data){
    var dataByHost = {};
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

var data = [{
    "totalTimeToDomLoad":0,
    "totalDNSLookupTime":1200,
    "totalTimeToFirstResponseByte":10,
    "url":"http://www.theladders.com/guestjobsearch",
    "hostname":"www.theladders.com"
    },
    {
    "totalTimeToDomLoad":0,
    "totalDNSLookupTime":1200,
    "totalTimeToFirstResponseByte":10,
    "url":"http://www.theladders.com/guestjobsearch2",
    "hostname":"www.theladders.com"
    },
    {
    "totalTimeToDomLoad":0,
    "totalDNSLookupTime":1200,
    "totalTimeToFirstResponseByte":10,
    "url":"http://www.google.com/hackathon",
    "hostname":"www.google.com"
    },
    {
    "totalTimeToDomLoad":0,
    "totalDNSLookupTime":1200,
    "totalTimeToFirstResponseByte":10,
    "url":"http://www.google.com/hackathon2",
    "hostname":"www.google.com"
    }];

console.dir(aggregateData(data))