// 百度经验-展开阅读全部
const BAIDU_READ_WHOLE = document.getElementsByClassName("read-whole")[0];

if (BAIDU_READ_WHOLE) {
  BAIDU_READ_WHOLE.click();
  BAIDU_READ_WHOLE.remove();
  document.getElementsByClassName("read-whole-mask")[0].remove();
  document.getElementById("aside").remove();
  document.getElementById("wgt-like").remove();
  document.getElementById("wgt-barrier-free").remove();
  document.getElementById("w-share").remove();
  document.getElementById("w-favor").remove();
  document.getElementById("task-panel-wrap").remove();
  document.getElementById("bottom-ads-container").remove();
  document.getElementById("bottom-pic-ads-wrap").remove();
  document.getElementById("fresh-share-exp-e").remove();
  document.getElementById("main-content").style.width = "100%";
}