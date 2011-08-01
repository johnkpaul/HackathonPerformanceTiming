(function(global){

    if(typeof global.TURBINE == "undefined"){
        global.TURBINE = {}
    }

    TURBINE.injectJavascript = function(url){
        var scriptTag = document.createElement("script");
        scriptTag.src = url;
        (document.head || document.body || document.documentElement).appendChild(scriptTag);
    }

    TURBINE.init = function(){
        var url = chrome.extension.getURL("js/nicePerformance/nice.js");
        TURBINE.injectJavascript(url);
    }

    TURBINE.init();
})(window);
