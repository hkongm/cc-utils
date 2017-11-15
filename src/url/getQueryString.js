/**
 * @description 从 URL 中获取参数值
 * @param {String} name 参数名
 * @param {String} [optianl] url 
 */
const getQueryString = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default getQueryString;
