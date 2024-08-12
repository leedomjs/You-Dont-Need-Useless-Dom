// 百度经验-展开阅读全部
function loadJingyan() {
  const BAIDU_READ_WHOLE = document.getElementsByClassName('read-whole')[0]

  if (BAIDU_READ_WHOLE) {
    BAIDU_READ_WHOLE.click()
    BAIDU_READ_WHOLE.remove()
    document.getElementsByClassName('read-whole-mask')[0].remove()
    document.getElementById('aside').remove()
    document.getElementById('wgt-like').remove()
    document.getElementById('wgt-barrier-free').remove()
    document.getElementById('w-share').remove()
    document.getElementById('w-favor').remove()
    document.getElementById('task-panel-wrap').remove()
    document.getElementById('bottom-ads-container').remove()
    document.getElementById('bottom-pic-ads-wrap').remove()
    document.getElementById('fresh-share-exp-e').remove()
    document.getElementById('main-content').style.width = '100%'
  }
}

// 百度知道 - 展开全部
function loadZhidao() {
  const QB_SIDE = document.getElementById('qb-side')
  QB_SIDE?.remove()

  const QB_CONTENT = document.getElementById('qb-content')
  QB_CONTENT.style.width = '100%'

  setTimeout(() => {
    // 点击最佳答案
    const BEST_BUTTON = document.getElementsByClassName('wgt-best-showbtn')[0]
    BEST_BUTTON?.click()

    // 展开次要答案
    const ANSWER_BUTTON = document.querySelectorAll('.wgt-answers-showbtn')
    console.log('🚀 ~ setTimeout ~ ANSWER_BUTTON:', ANSWER_BUTTON)
    for (const button of ANSWER_BUTTON) {
      button?.click()
    }

    // 展开更多
    const MORE_BUTTON = document.getElementById('show-answer-hide')
    MORE_BUTTON?.click()
  }, 1000)
}

loadJingyan()
loadZhidao()
