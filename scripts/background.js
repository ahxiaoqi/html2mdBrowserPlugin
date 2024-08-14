// background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.type);
        if (request.type === 2){
            console.log("html content: " + request.content);
            chrome.runtime.sendMessage({type: 3, content:request.content});
        }
    });



