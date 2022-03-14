// 方法为页面中常用格式化方法
import XEUtils from 'xe-utils'

/**
 * 请求数据格式化
 * @param {*} data 只能传对象
 */
function getDataFormat(data) {
  const resData = {};
  XEUtils.objectEach(data, (item, key) => {
    if (item) resData[key] = item;
  })
  return resData;
}

// 秒转时分秒
function formatSeconds(value) {
  let result = parseInt(value)
  const h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
  const m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
  const s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
  result = `${h}时${m}分${s}秒`
  return result
}

// 时长格式化
function durationFormat({ row, column, cellValue }) {
  // 时长格式化
  return parseInt(cellValue / 86400) > 0
    ? `${parseInt(cellValue / 86400)}天${parseInt(
      (cellValue % 86400) / 3600
    )}小时`
    : parseInt(cellValue / 3600) > 0
      ? `${parseInt(cellValue / 3600)}小时${parseInt(
        (cellValue % 3600) / 60
      )}分钟`
      : parseInt(cellValue / 60) > 0
        ? `${parseInt(cellValue / 60)}分钟`
        : `${cellValue}秒`;
}
export default {
  durationFormat, // 时长格式化
  getDataFormat, // 请求数据格式化
  formatSeconds
}