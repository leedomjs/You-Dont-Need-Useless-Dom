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

// 监听是否有新dom插入
document.addEventListener('DOMNodeInserted', function() {
  const PAST_SPONSORSHIP = document.getElementsByClassName('Label--secondary')

  const search = window.location.search

  if (PAST_SPONSORSHIP?.length && search === '?tab=sponsoring') {
    for (const dom of PAST_SPONSORSHIP) {
      dom.style.backgroundColor = '#bf3989'
      dom.style.border = '#bf3989'
      dom.style.color = '#fff'
    }
  }
})
