window.addEventListener('DOMContentLoaded',setValues, false);

function setValues()
{
    document.getElementById("domain").innerHTML = localStorage["currentHostname"];
}
