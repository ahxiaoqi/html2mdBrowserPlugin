# html2mdBrowserPlugin
转换当前活动tab的html内容到md的Chrome浏览器插件

使用方法
- 克隆项目
- 打开chrome浏览器，菜单选择扩展程序,管理扩展程序
- 打开开发者模式
- 加载已解压的扩展程序
- 在需要转换的网页窗口点击插件的图标,点击转换
  - 默认选择器为body元素
  - 点击自定义标签可以使用querySelector来自定义使用的元素

tips
- 因为是直接获取的html内容，所以使用了浏览器翻译之后执行准换就是翻译后的内容
- 有使用浏览器开发者工具的基础的话,可以根据需要直接使用开发者工具删除某些元素,在临时转换一些内容的时候很方便
- 使用的转换md的库是[turndown.js](https://github.com/mixmark-io/turndown),没有进行自定义配置
