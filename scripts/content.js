// content.js
console.log("转换md注入")
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request)
        if (request.type === 1){
            const selector = request.content ? request.content : 'body';
            const pageTitle = document.getElementsByTagName('title')[0].innerHTML;
            const contentEle = document.querySelector(selector);
            if (contentEle){
                const content = document.querySelector(selector).innerHTML;
                chrome.runtime.sendMessage({type: 2, content:{htmlTitle:pageTitle,htmlContent:content} });

            }
        }
    });

