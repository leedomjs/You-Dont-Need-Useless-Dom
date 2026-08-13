// 小红书登录弹窗
const observer = new MutationObserver(() => {
  const loginContainer = document.querySelector('.login-container')
  if (!loginContainer) return

  const closeButton = loginContainer.querySelector('.close-button')
  closeButton?.click()
  observer.disconnect()
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
