// 方法为页面中常用格式化方法
import XEUtils from 'xe-utils'

// 日期快捷选项
const pickerOptions = {
  shortcuts: [
    {
      text: "最近一天",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近一周",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近一个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近三个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit("pick", [start, end]);
      }
    }
  ]
}

// 取证时间差
const confirmTimeOptions = [
  {
    value: [null, 15 * 60],
    label: "小于15分钟"
  },
  {
    value: [15 * 60, 30 * 60],
    label: "15-30分钟"
  },
  {
    value: [30 * 60],
    label: "大于30分钟"
  }
]

// 驶入时间来源
const enterTypeOptions = [
  // { value:'', label: "驶入时间来源"},
  { value: '0', label: "未知" },
  { value: '1', label: "管理员" },
  { value: '2', label: "运营商" },
  { value: '3', label: "用户" },
  { value: '4', label: "收费员" },
  { value: '5', label: "抓拍机" },
  { value: '6', label: "地磁" },
  { value: '7', label: "高位视频" },
  { value: '8', label: "低位视频" },
  { value: '9', label: "巡检车" },
  { value: '10', label: "第三方平台" },
  { value: '11', label: "路牙机" }
]

// 设备类型
const deviceTypeFormat = [
  { value: '1', label: "直流桩" },
  { value: '2', label: "交流桩" },
  { value: '3', label: "电摩快充桩" },
  { value: '4', label: "电摩慢充桩" },
  { value: '5', label: "入口道闸" },
  { value: '6', label: "出口道闸" },
  { value: '7', label: "地磁" },
  { value: '8', label: "电表桩" },
  { value: '9', label: "预付费电表" },
  { value: '10', label: "高位视频桩" },
  { value: '11', label: "低位视频桩" },
  { value: '12', label: "充电宝" },
  { value: '13', label: "电单车" },
  { value: '14', label: "燃油车" },
  { value: '15', label: "电动汽车" }
]

// 取证状态
const confirmedOptions = [
  { value: '0', label: "待取证" },
  { value: '1', label: "已取证" }
]

// 订单状态
const pdrStateOptions = [
  { value: 1, label: "停车中" },
  { value: 2, label: "已完成" },
  { value: 3, label: "等待取证" },
  { value: 4, label: "等待入场" },
  { value: 5, label: "等待出场" },
  { value: 6, label: "待付款" },
  { value: 7, label: "已关闭" },
  { value: 8, label: "欠费" },
  { value: 255, label: "异常" }
]

// 取证来源
const confirmTypeOptions = [
  { value: "4", label: "收费员" },
  { value: "5", label: "抓拍机" },
  { value: "6", label: "地磁" },
  { value: "7", label: "高位视频" },
  { value: "8", label: "低位视频" },
  { value: "9", label: "巡检车" },
  { value: "10", label: "第三方平台" },
  { value: "11", label: "路牙机" }
]

// 缴费类型
const payTypeOptions = [
  { value: "0", label: "现金支付" },
  { value: "3", label: "钱包充值" },
  { value: "4", label: "收费员代收" },
  { value: "6", label: "微信支付" },
  { value: "7", label: "支付宝支付" },
  { value: "8", label: "钱包支付" },
  { value: "10", label: "网络卡" },
  { value: "11", label: "农行卡支付" },
  { value: "14", label: "套餐充值" },
  { value: "15", label: "套餐消费" },
  { value: "18", label: "优惠券购买" },
  { value: "19", label: "优惠券消费" },
  { value: "20", label: "系统赠送" }
]

// 支付方式
const gatewayOptions = [
  { value: "cash", label: "现金支付" },
  { value: "wechat", label: "微信支付" },
  { value: "alipay", label: "支付宝支付" },
  { value: "userpay", label: "钱包支付" },
  { value: "cardpay", label: "储值卡支付" },
  { value: "ums", label: "银联商务" }
]

// 审核状态
const auditState = [
  { label: '无需审核', value: 0 },
  { label: '待审核', value: 1 },
  { label: '已审核', value: 2 }
]

const plateColor = [
  { label: '蓝牌', value: 'blue', },
  { label: '绿牌', value: 'green', },
  { label: '黄牌', value: 'yellow', },
  { label: '黑牌', value: 'black', },
  { label: '白牌', value: 'white', },
  { label: '其他', value: 'other', },
]

// 收费人员类型
const personnelTypeFormat = [
  { label: '收费员', value: 0, },
  { label: '巡检员', value: 1, },
]

// 签到类型
const signInTypeFormat = [
  { label: '签到', value: 0, },
  { label: '未签到', value: 1, },
]

// 签退类型
const signOffTypeFormat = [
  { label: '签退', value: 0, },
  { label: '未签退', value: 1, },
]


// 金额选项
const moneyOptions = [
  { value: '0', label: "0元" },
  { value: [0, null], label: "非0元" }
]

const durationOptions = [
  { value: [null, 30 * 60], label: '小于30分钟' },
  { value: [30 * 60, 60 * 60], label: '30分钟-60分钟' },
  { value: [60 * 60], label: '大于60分钟' }
]

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

const cardValDayTitleFmt = {
  "yyyyMMdd": "当日",
  "yyyyMM": "当月",
  "yyyy": "当年"
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

function addYuan({ cellValue }) {
  return cellValue + '元';
}

// 单位类型
const unitType = [
  { label: '党政机关', value: '党政机关' },
  { label: '事业单位', value: '事业单位' },
  { label: '国有及国有控股企业', value: '国有及国有控股企业' },
  { label: '社会团体', value: '社会团体' },
  { label: '民营企业', value: '民营企业' },
  { label: '其他', value: '其他' },
]

// 单位行业
const unitIndustry = [
  { label: '政府部门', value: '政府部门' },
  { label: '电信', value: '电信' },
  { label: '广播电视', value: '广播电视' },
  { label: '能源', value: '能源' },
  { label: '金融', value: '金融' },
  { label: '公路水路运输', value: '公路水路运输' },
  { label: '铁路', value: '铁路' },
  { label: '民航', value: '民航' },
  { label: '应急管理', value: '应急管理' },
  { label: '卫生健康', value: '卫生健康' },
  { label: '社会保障', value: '社会保障' },
  { label: '国防科技工业', value: '国防科技工业' },
  { label: '教育科研', value: '教育科研' },
  { label: '工业制造', value: '工业制造' },
  { label: '互联网', value: '互联网' },
  { label: '新闻', value: '新闻' },
  { label: '环境保护', value: '环境保护' },
  { label: '工业事业', value: '工业事业' },
  { label: '食品药品', value: '食品药品' },
  { label: '化工', value: '化工' },
  { label: '国防科工', value: '国防科工' },
  { label: '其他', value: '其他' },
]

/**
 * 条件格式化
 * 主要进行1,2转换为是否,3转换为
 * @param {*} param0 
 */
function verdictFormat({ cellValue }, three) {
  switch (cellValue) {
  case '1':
    return '是'
  case '2':
    return '否'
  case '3':
    return (three || '不适用')
  case 1:
    return '是'
  case 2:
    return '否'
  case 3:
    return (three || '不适用')
  case '是':
    return '1'
  case '否':
    return '2'
  case (three || '不适用'):
    return 3
  default:
    return '未知'
  }
}

export default {
  pickerOptions, // 快捷时间选择
  confirmTimeOptions, // 取证时间差
  enterTypeOptions, // 时间来源
  confirmedOptions, // 取证状态
  pdrStateOptions, // 订单装填
  confirmTypeOptions, // 取证方式
  durationFormat, // 时长格式化
  getDataFormat, // 请求数据格式化
  cardValDayTitleFmt, // 卡片头部格式化
  formatSeconds, // 秒数格式化
  deviceTypeFormat, // 设备类型
  addYuan, // 添加单位
  moneyOptions, // 金额选项
  durationOptions, // 时长选项
  payTypeOptions, // 缴费类型
  gatewayOptions, // 支付方式
  plateColor, // 车牌颜色
  auditState, // 审核状态
  personnelTypeFormat, // 收费员类型
  signInTypeFormat,//签到类型
  signOffTypeFormat,//签退类型,
  unitType, // 单位类型
  unitIndustry, // 单位行业
  verdictFormat, // 条件格式化
}