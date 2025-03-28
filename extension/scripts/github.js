// window.onload = () => {
//   const PAST_SPONSORSHIP = document.getElementsByClassName('Label--secondary')

//   if (PAST_SPONSORSHIP?.length) {
//     for (const dom of PAST_SPONSORSHIP) {
//       dom.style.backgroundColor = '#bf3989'
//       dom.style.border = '#bf3989'
//       dom.style.color = '#fff'
//     }
//   }
// }

function getParams(params) {
  const search = window.location.search
  const urlParams = new URLSearchParams(search)
  return urlParams.get(params)
}

function highlightPastSponsorship() {
  const PAST_SPONSORSHIP = document.getElementsByClassName('Label--secondary')

  if (PAST_SPONSORSHIP?.length && getParams('tab') === 'sponsoring') {
    for (const dom of PAST_SPONSORSHIP) {
      dom.style.backgroundColor = '#bf3989'
      dom.style.border = '#bf3989'
      dom.style.color = '#fff'
    }
  }
}

function highlightFollowing() {
  const FOLLOW_LIST = document.querySelectorAll('.Layout-main form[hidden="hidden"] input[name="commit"][value="Follow"]')

  if (FOLLOW_LIST?.length && ['following', 'followers'].includes(getParams('tab'))) {
    for (const dom of FOLLOW_LIST) {
      const parent = dom.parentElement.closest('div.d-table')
      parent.style.backgroundColor = 'wheat'
      parent.style.padding = '15px'
    }
  }
}

// 监听是否有新dom插入 过期 web api
if (typeof DOMNodeInserted === 'function') {
  document.addEventListener('DOMNodeInserted', function () {
    highlightPastSponsorship()
    highlightFollowing()
  })
}

// 新的监听dom树变化的 web api
if (typeof MutationObserver === 'function') {
  const callback = (mutations) => {
    highlightPastSponsorship()
    highlightFollowing()
  }

  const observer = new MutationObserver(callback)
  observer.observe(document, {
    childList: true,
    subtree: true,
  })
}
