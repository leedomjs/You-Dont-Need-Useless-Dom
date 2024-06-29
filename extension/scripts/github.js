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
  const search = window.location.search
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
  const search = window.location.search
  const elements = document.querySelectorAll('form[hidden="hidden"] input[name="commit"][value="Follow"]')

  if (elements?.length && ['following', 'followers'].includes(getParams('tab'))) {
    for (const dom of elements) {
      const parent = dom.parentElement.closest('div.d-table')
      parent.style.backgroundColor = 'wheat'
      parent.style.padding = '15px'
    }
  }
}

// 监听是否有新dom插入
document.addEventListener('DOMNodeInserted', function () {
  highlightPastSponsorship()
  highlightFollowing()
})
