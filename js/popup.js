window.addEventListener('DOMContentLoaded',setValues, false);

function setValues()
{
    document.getElementById("domain").innerHTML = localStorage["currentHostname"];
    document.getElementById("updated").innerHTML = dataForHost[0]["visitTime"];
}
