const turndownService = new TurndownService();

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const selectorCustom = document.getElementById("selectorCustom");
    const contentSelector = document.getElementById("contentSelector");
    const tagCustomContainer = document.getElementById("selectorCustomContainer");
    button.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true },function(tabs) {
           chrome.tabs.sendMessage(tabs[0].id, {type: 1, content: contentSelector.value});
        });
    });
    selectorCustom.addEventListener("change", () => {
        if (selectorCustom.checked) {
            tagCustomContainer.style.display = "block";
            tagCustomContainer.value = "";
        } else {
            tagCustomContainer.style.display = "none";
        }
    });

});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type === 3){
            const markdown = turndownService.turndown(request.content.htmlContent);
            downloadText(markdown,`${request.content.htmlTitle}.md`);
        }
    });



function downloadText(text, filename) {
    // 创建 Blob 对象
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });

    // 创建一个 URL 表示 Blob 对象
    const url = URL.createObjectURL(blob);

    // 创建一个隐藏的可下载链接
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename); // 设置下载的文件名
    link.style.display = 'none';
    document.body.appendChild(link);

    // 触发点击事件
    link.click();

    // 清理
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
