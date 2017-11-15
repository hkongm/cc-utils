/**
 * @description 判断是否为 URL
 * @param {String} str 
 */

const isUrl = str => {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

export default isUrl;