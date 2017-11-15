/**
 * @description 判断是否为 Email 格式
 * @param {String} str 
 */

const isEmail = str => {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

export isEmail