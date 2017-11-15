/**
 * @description 获取 Cookie 值
 * @param {String} name 
 */

const getCookie = name => {
  var arr = document.cookie.replace(/\s/g, "").split(';');
  for (var i = 0; i < arr.length; i++) {
      var tempArr = arr[i].split('=');
      if (tempArr[0] == name) {
          return decodeURIComponent(tempArr[1]);
      }
  }
  return '';
}

export default getCookie;