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
| <img width="1008" alt="show-ukraine" src="https://user-images.githubusercontent.com/30711792/229255167-8b247858-a5a6-4e58-ad6c-01b815570983.png"> | <img width="1008" alt="hide-ukraine" src="https://user-images.githubusercontent.com/30711792/229255190-6e15d503-7c60-403f-a524-3dcfe1039157.png"> |

## <span id="example2">又是个 🌰 例子</span>
> 图1是扩展未启用时，有一些广告和可能无用的元素。
> 
> 图2是扩展启用后，可以看到，页面顿时清爽了不少！

|  before  |  after  |
|  ------  |  -----  |
| ![has-useless-dom](https://user-images.githubusercontent.com/30711792/229255625-ec767034-e7bb-4a79-9557-47360dc12644.jpg) | ![no-useless-dom](https://user-images.githubusercontent.com/30711792/229255638-f34a7663-2770-4ad4-a805-abe8ab2d666f.jpg) |
