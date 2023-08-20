// 知乎左侧内容
const ZHIHU_MAIN_COLUMN = document.getElementsByClassName('Topstory-mainColumn')[0] || document.getElementsByClassName('Question-mainColumn')[0]

if (ZHIHU_MAIN_COLUMN) {
  ZHIHU_MAIN_COLUMN.style.width = '1000px'
  ZHIHU_MAIN_COLUMN.style.marginRight = 0

  const interval = setInterval(() => {
    const RightSideBar = document.querySelector(
      '[data-za-detail-view-path-module=RightSideBar',
    )
    if (RightSideBar) {
      RightSideBar.remove()
      clearInterval(interval)
    }
  }, 1000)
}
