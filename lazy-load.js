(function(){
    "use strict";
        function lazy_load(src,method = null, integrity = null, crossorigin = null){
           
            let script = document.createElement("script");
            if (method === 'async'){
                script.async = true;
            }
            else if (method === 'defer'){
                script.defer = true;
            }
            if (integrity){
                script.integrity = integrity;
            }
            if( crossorigin){
                script.crossOrigin = crossorigin;
            }
            script.src = src;
            script.async = true;
            let head = document.getElementsByTagName("head")[0];
            console.log(head);
            head.appendChild(script);
            console.log("Loaded script: " + src);
        }
        document.lazy_load = lazy_load;
})();