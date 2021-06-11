// 方法为页面中常用格式化方法
import XEUtils from 'xe-utils'

// 时间日期格式化
const dayTime = ({cellValue}) => { return XEUtils.toDateString(cellValue, 'yyyy-MM-dd hh:mm:ss') }

// 秒转时分秒
const second2Time = (s) => {
  const hour = parseInt(s / 3600)
  const minute = parseInt((s % 3600) / 60)
  const second = parseInt((s % 3600) % 60)
  return s ? hour + '小时' + minute + '分钟' + second + '秒' : '-'
}

const plateColor = [
  { label: '蓝牌', key: 'blue' },
  { label: '绿牌', key: 'green' },
  { label: '黄牌', key: 'yellow' },
  { label: '黑牌', key: 'black' },
  { label: '白牌', key: 'white' },
  { label: '其他', key: 'other' },
]

// 泊位类型
const stationType = [
  { label: '一字型', key: 1 },
  { label: '非字形', key: 2 },
  { label: '正斜字形', key: 3 },
  { label: '反斜字形', key: 4 }
]

/**
 * 通过Label获取key
 * @param {*} key
 * @param {*} defVal 默认值
 */
const getKeyByLabel = (data, key, defVal) => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (item.label == key) {
      return item.key
    }
  }
  return defVal || ''
}
// 通过Label获取Key
const getLabelByKey = (data, value, defVal) => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (item.key == value) {
      return item.label
    }
  }
  return defVal || ''
}

// 通过Value获取信息
const getRowByKey = (data, value, defVal) => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (item.key == value) {
      return item.row
    }
  }
  return defVal || ''
}

export default {
  dayTime, // 时间日期格式化
  second2Time, // 秒转时分秒
  getKeyByLabel,
  getLabelByKey,
  getRowByKey,
  stationType, // 站点类型
}