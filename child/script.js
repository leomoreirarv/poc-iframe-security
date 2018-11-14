(() => {
    "use strict";

    window.addEventListener("load", init);
    var parentUrl = "http://173.199.114.247"

    function init(){
        messageListener();
        buttonListener();
    }
    
    function messageListener(){
        window.addEventListener("message", e => {
            if(e.origin !== parentUrl)
                return;

            let message = document.getElementById("message");
            message.innerHTML = JSON.stringify(e.data);
        });
    }
    
    function buttonListener(){
        let buttonChild = document.getElementById("buttonChild");
        buttonChild.addEventListener("click", () => {
            window.parent.postMessage({
                origin: "iframe",
                destiny: "parent",
                time: new Date()
            }, parentUrl);
        });
    }
})();