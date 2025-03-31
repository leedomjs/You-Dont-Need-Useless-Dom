// 监听是否有新dom插入 - DOMContentLoaded 过时的 web api
if (typeof DOMContentLoaded === 'function') {
  document.addEventListener('DOMNodeInserted', function () {
    const AD_TAG_DOM = [
      ...[...document.getElementsByClassName('bili-video-card__info--ad')].filter(dom => !dom.querySelector('.floor-skeleton')),
      ...[...document.getElementsByClassName('floor-single-card')].filter(dom => !dom.querySelector('.floor-skeleton')),
    ]

    if (AD_TAG_DOM.length) {
      for (const dom of AD_TAG_DOM) {
        const AD_AUTHOR = dom.querySelector('.sub-title')?.textContent

        const AD_TITLE = dom.querySelector('.title')?.getAttribute('title')

        const URL = dom.querySelector('.title a')?.getAttribute('href')

        const AD_URL = `https:${URL}`

        console.warn(`已删除广告【${AD_TITLE} - ${AD_AUTHOR}】(${AD_URL})`)
        dom?.remove()
      }
    }
  })
}

// 新的监听dom树变化的 web api
if (typeof MutationObserver === 'function') {
  const callback = function (mutations) {
    for (const mutation of mutations) {
      const AD_TAG_DOM = [
        ...[...document.getElementsByClassName('bili-video-card__info--ad')].filter(dom => !dom.querySelector('.floor-skeleton')),
        ...[...document.getElementsByClassName('floor-single-card')].filter(dom => !dom.querySelector('.floor-skeleton')),
      ]

      if (AD_TAG_DOM.length) {
        for (const dom of AD_TAG_DOM) {
          const AD_AUTHOR = dom.querySelector('.sub-title')?.textContent

          const AD_TITLE = dom.querySelector('.title')?.getAttribute('title')

          const URL = dom.querySelector('.title a')?.getAttribute('href')

          const AD_URL = `https:${URL}`

          console.warn(`已删除广告【${AD_TITLE} - ${AD_AUTHOR}】(${AD_URL})`)
          dom?.remove()
        }
      }
    }
  }

  const observer = new MutationObserver(callback)
  observer.observe(document, {
    childList: true,
    subtree: true,
  })
}
