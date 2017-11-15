/**
 * @description 判断参数 Object 是否是空对象
 * @param {Object} obj 
 */

const isEmptyObject = obj => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
  return false
  return !Object.keys(obj).length
}

export default isEmptyObject;
