# 🪀 You Don't Need (may not) Useless Dom.

> 这是一个简易的谷歌浏览器扩展程序。
> 
> This is a simple Chrome Extension.

## 简介
当我们逛网页时经常能看到不少广告、或者其他五花八门干扰我们注意力的页面元素，这时我们就需要在打开页面的时候自动将它干掉！

## 使用
  1. 打开谷歌浏览器，进入扩展程序页面。在浏览器地址栏输入`chrome://extensions/`，回车进入。
  2. 开启右上角的 `开发者模式`。
  3. 将该项目的 `extension` 文件夹拖入即可。或者点击 `加载已解压的扩展程序`，选择该项目的 `extension` 文件夹即可。

## TodoList
- [x] 去除一些网站上包含 `Support Ukraine 🇺🇦` 的DOM。(比如 `Meta` 一些开源项目的文档网站 —— [react](https://react.dev)、[react-native](https://reactnative.dev/)、[create-react-app](https://create-react-app.dev/))([举个🌰](#example))
- [x] 打开百度经验，触发 `展开阅读全部`，并去掉广告部分。([再举个🌰](#example2))
- [x] 打开知乎，去掉右侧信息栏，左侧内容自动撑满父容器。
- [x] 打开斗鱼直播间，去掉右侧弹幕，左侧直播撑满父容器。
- [ ] continue...

## <span id="example">🌰 例子</span>
> 图1是扩展未启用时，网站头部显示的 `Support Ukraine 🇺🇦` 。
> 
> 图2是扩展启用后，该banner被自动删除。

|  before  |  after  |
|  ------  |  -----  |
|  <img src="https://github.com/leedom92/You-Dont-Need-Useless-Dom/blob/master/screenshots/show-ukraine.png" />  |  <img src="https://github.com/leedom92/You-Dont-Need-Useless-Dom/blob/master/screenshots/hide-ukraine.png" /> |

## <span id="example2">又是个 🌰 例子</span>
> 图1是扩展未启用时，有一些广告和可能无用的元素。
> 
> 图2是扩展启用后，可以看到，页面顿时清爽了不少！

|  before  |  after  |
|  ------  |  -----  |
|  <img src="https://github.com/leedom92/You-Dont-Need-Useless-Dom/blob/master/screenshots/has-useless-dom.jpg" />     |  <img src="https://github.com/leedom92/You-Dont-Need-Useless-Dom/blob/master/screenshots/no-useless-dom.jpg" />  |
