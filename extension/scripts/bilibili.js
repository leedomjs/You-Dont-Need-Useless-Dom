// 监听是否有新dom插入
document.addEventListener('DOMNodeInserted', function() {
  const AD_TAG_DOM = document.getElementsByClassName('bili-video-card__info--ad')

  if (AD_TAG_DOM.length) {
    for (const dom of AD_TAG_DOM) {
      const AD_AUTHOR = dom.nextSibling.textContent

      const AD_TITLE = dom.parentElement.closest('div.bili-video-card__info--right').querySelector('.bili-video-card__info--tit').getAttribute('title')

      const URL = dom.parentElement.closest('div.bili-video-card__info--right').querySelector('a').getAttribute('href')

      const AD_URL = URL.includes('cm.bilibili.com') ? `https:${URL}` : URL

      const AD_DOM = dom.parentElement.closest('div.feed-card') || dom.parentElement.closest('div.bili-video-card.is-rcmd')

      console.warn(`已删除广告【${AD_TITLE} - ${AD_AUTHOR}】(${AD_URL})`)

      AD_DOM?.remove()
    }
  }
})
