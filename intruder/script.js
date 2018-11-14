(() => {
    "use script";

    window.addEventListener("load", init);
    var childUrl = "http://8.12.22.45";

    function init(){
        buttonListener();
        messageListener();
    }
    
    function buttonListener(){
        let button = document.getElementById("buttonParent");
        let iframe = document.getElementById("iframe");
        button.addEventListener("click", () => {
            iframe.contentWindow.postMessage({
                origin: "parent",
                destiny: "iframe",
                time: new Date()
            }, childUrl);
        });
    }
    
    function messageListener(){
        window.addEventListener("message", e => {
            if(e.origin !== childUrl)
                return;

            let message = document.getElementById("message");
            message.innerHTML = JSON.stringify(e.data);
        });
    }
    
})();