(function(global){

    if(typeof global.NICE == "undefined"){
        global.NICE = {}
    }

    NICE.performance = (function(){
        function getTotalTimeToDomLoad(){
            var timing = NICE.getTiming();
            return timing.domComplete -  timing.fetchStart;
        }

        function getTotalDNSLookupTime(){
            var timing = NICE.getTiming();
            return timing.domainLookupStart -  timing.domainLookupEnd;
        }

        function getTimeToFirstResponseByte(){
            var timing = NICE.getTiming();
            return timing.responseStart -  timing.fetchStart;
        }

        function toObject(){
            return {
                "totalTimeToDomLoad":getTotalTimeToDomLoad(),
                "totalDNSLookupTime":getTotalDNSLookupTime(),
                "totalTimeToFirstResponseByte":getTimeToFirstResponseByte()
            }
        }
        return {
            "getTotalTimeToDomLoad":getTotalTimeToDomLoad,
            "getTotalDNSLookupTime":getTotalDNSLookupTime,
            "getTimeToFirstResponseByte":getTimeToFirstResponseByte,
            "toObject":toObject
        }
    })();

    NICE.callbacks = [];

    NICE.addPerformanceCallback = function(callback){
        if(NICE._loaded){
            callback(NICE.performance);
        }else{
            NICE.callbacks.push(callback);
        }
    }

    NICE.setPerformanceObject = function(performance){
        NICE._performance = performance;
    }

    NICE.getPerformanceObject = function(){
        return NICE._performance || global.performance || null;
    }

    NICE.getTiming = function(){
        return NICE.getPerformanceObject().timing;
    }

    NICE.init = function(){
        function whenLoaded() {
             NICE._loaded = true;
             for(var i = 0, len = NICE.callbacks.length;i<len;i++){
                NICE.callbacks[i](NICE.performance);
             }
        }
        setTimeout(whenLoaded, 2000);
    }

    NICE.init();
})(window);



