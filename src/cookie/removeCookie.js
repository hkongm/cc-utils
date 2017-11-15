import getCookie from './getCookie';

/**
 * 
 * @description 清空 Cookie
 * @param  {String} name 
 */

const removeCookie = name => {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

export default removeCookie;