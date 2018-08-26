(function(){
    "use strict";
        function lazyLoad(src,method = null, integrity = null, crossorigin = null, enque= null){
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
            let head = document.getElementsByTagName("head")[0];
            if(enque){
                head.insertBefore(script, head.childNodes[5]);                
            }else{
                head.appendChild(script);
            }
            return new Promise((resolve, reject)=>{
                script.onload = ()=>{
                    resolve("Loaded script: " + src);
                };
                if (!src){
                    reject("URL or relative path is required to add script.");
                }
            });
            
        }
        document.lazyLoad = lazyLoad;
})();