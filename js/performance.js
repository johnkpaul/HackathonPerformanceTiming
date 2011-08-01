(function(global){

    if(typeof global.TURBINE == "undefined"){
        global.TURBINE = {}
    }

    NICE.addPerformanceCallback(function(performance){
        var performanceObject = performance.toObject();
        performanceObject["hostname"] = window.location.hostname;
        performanceObject["url"] = window.location.href;

        chrome.extension.sendRequest({isPerformanceObject: true, performance:performanceObject});
    });
})(window);
