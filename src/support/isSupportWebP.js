/**
 * @description 是否支持 WebP 图形格式
 */

const isSupportWebP = () => {
  return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

export default isSupportWebP;
