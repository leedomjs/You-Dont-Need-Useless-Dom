// 找到含有 `Support Ukraine 🇺🇦` 文本的dom， 并删除之！
// const UkraineArray = [
//   "Support Ukraine 🇺🇦",
//   "Support Ukraine 🇺🇦 ",
//   " Support Ukraine 🇺🇦",
//   " Support Ukraine 🇺🇦 ",
// ]
// function xpath(query) {
//   return document.evaluate(
//     query,
//     document,
//     null,
//     XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
//     null
//   );
// }
// for (const val of UkraineArray) {
//   const DOM = xpath('//*[text()="'+val+'"]').snapshotItem(0)
//   DOM && DOM.parentNode.remove();
// }

/**
 * 找到含有某字符串的dom
 * @param {String} tag html标签
 * @param {String} keyword 字符串
 * @returns NodeList
 */
const getTextContainsNode = (tag, keyword) => {
  const DOM = document.querySelectorAll(tag)
  const NodeList = []
  for (const val of DOM) {
    val.textContent.includes(keyword) && NodeList.push(val)
  }
  return NodeList
}

// 列出含有 `Support Ukraine` 字符串的dom
const UkraineDOM = getTextContainsNode('div', 'Support Ukraine')

for (const DOM of UkraineDOM) {
  // 该dom一般为顶部banner，且高度基本不会超过100px，高度判断可防止父dom被误删
  DOM.clientHeight < 200 && DOM.remove()
}

