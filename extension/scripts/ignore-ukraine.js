// 找到含有 `Support Ukraine 🇺🇦 ` 文本的dom， 并删除之！

// const DOM = document.evaluate('//*[.="Support Ukraine 🇺🇦"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);
const DOM = document.evaluate('//*[text()="Support Ukraine 🇺🇦"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE).snapshotItem(0);
DOM && DOM.parentNode.remove()
