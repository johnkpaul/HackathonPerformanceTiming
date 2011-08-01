window.addEventListener('DOMContentLoaded',setValues, false);

function setValues()
{
    document.getElementById("domain").innerHTML = localStorage["currentHostname"];
    document.getElementById("updated").innerHTML = dataForHost[0]["visitTime"];
    document.getElementById("faviconOfCurrentPage").src = localStorage[localStorage["currentHostname"]]
    document.getElementById("totalTimeToDomLoad").innerHTML = dataForHost[0]["totalTimeToDomLoad"];
    document.getElementById("totalDNSLookupTime").innerHTML = dataForHost[0]["totalDNSLookupTime"];
    document.getElementById("totalTimeToFirstResponseByte").innerHTML = dataForHost[0]["totalTimeToFirstResponseByte"];
    document.getElementById("hostVisits").innerHTML = dataForHost.length;
}
