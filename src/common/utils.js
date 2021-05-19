/* eslint-disable */
import XEUtils from 'xe-utils'
// import XLSX from "xlsx";

//var str = "js实现用{two}自符串替换占位符{two} {three}  {one} ".format({one: "I",two: "LOVE",three: "YOU"});
//var str2 = "js实现用{1}自符串替换占位符{1} {2}  {0} ".format("I","LOVE","YOU");
String.prototype.format = function() {
  if(arguments.length == 0) return this;
  const param = arguments[0];
  const s = this;
  if(typeof(param) == 'object') {
  for(let key in param)
    s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
    return s;
  } else {
  for(let i = 0; i < arguments.length; i++)
    s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
    return s;
  }
}

function threadSleep(time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

//时间字符串转unix时间戳
function stringTransformTimestamp(date){
  // console.log(date)
  // date = date.substring(0,19)
  // date = date.replace(/-/g,'/')
  let timestamp = new Date(date).getTime()
  return timestamp/1000
}

/**
 * 获取前几月数据方法
 * @param {*} date 时间 
 * @param {*} monthNum 查询前多少月
 */
function getPreMonthDay(date, monthNum) {
  const year = XEUtils.toDateString(date, 'yyyy')
  const month = XEUtils.toDateString(date, 'MM')
  const day = XEUtils.toDateString(date, 'dd')
  let days = new Date(year, month, 0);
  days = days.getDate(); //获取当前日期中月的天数
  let year2 = year;
  let month2 = parseInt(month) - monthNum;
  if (month2 <= 0) {
    const absM = Math.abs(month2);
    year2 = parseInt(year2) - Math.ceil(absM / 12 == 0 ? 1 : parseInt(absM) / 12);
    month2 = 12 - (absM % 12);
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = '0' + month2;
  }
  const t2 = year2 + '-' + month2 + '-' + day2;
  return new Date(t2);
}
/** ----------------数据看板专用方法------------------ */
function getTimeList(time, long, selectType, isLately){
  let timeList = [];
  if(selectType == 'yyyyMMdd'){
    // 暂时缺少时报数据，按天查改为查近七天
    // if(isLately){
    //   for(let i = 0; i <= (long == -1 ? 24 : long); i++){
    //     timeList.push(XEUtils.toDateString(time.getTime() - (long == -1 ? 24 * 60 * 60 * 1000 : long * 60 * 60 * 1000) + i * 60 * 60 * 1000, 'yyyyMMddHH'))
    //   }
    // }else{
    //   for(let i = 0; i <= 24; i++){
    //     timeList.push(XEUtils.toDateString(time, 'yyyyMMdd') + (i > 9 ? i : '0' + i));
    //   }
    // }
    for(let i = 1; i <= 7; i++){
      timeList.push(XEUtils.toDateString(long == -1 ? XEUtils.getWhatDay(time, -7 + i) : XEUtils.getWhatDay(time, -long), 'yyyyMMdd'))
    }
  }else if(selectType == 'yyyyMM'){
    if(isLately){
      for(let i = 1; i <= (long == -1 ? 30 : long); i++){
        timeList.push(XEUtils.toDateString(long == -1 ? XEUtils.getWhatDay(time, -30 + i) : XEUtils.getWhatDay(time, -long), 'yyyyMMdd'))
      }
    }else{
      for(let i = 1; i <= 30; i++){
        timeList.push(XEUtils.toDateString(time, 'yyyyMM') + (i > 9 ? i : '0' + i));
      }
    }
  }else if(selectType == 'yyyy'){
    if(isLately){
      for(let i = 1; i <= (long == -1 ? 12 : long); i++){
        // 获取历史月份数据
        timeList.push(XEUtils.toDateString(long == -1 ? getPreMonthDay(time, 12 - i) : getPreMonthDay(time, -long), 'yyyyMM'))
      }
      console.log('年生成数据', timeList, time);
    }else{
      for(let i = 1; i <= 12; i++){
        timeList.push(XEUtils.toDateString(time, 'yyyy') + (i > 9 ? i : '0' + i));
      }
    }
  }
  return timeList;
}
function getFromTo(time, long, selectType, isLately){
  let from, to;
  if(selectType == 'yyyyMMdd'){
    // 暂时缺少时报数据，按日查改为查近七天
    // if(isLately){
    //   to =  XEUtils.toDateString(time, 'yyyyMMddHH');
    //   from =  XEUtils.toDateString(time.getTime() - (long == -1 ? 24 * 60 * 60 * 1000 : long * 60 * 60 * 1000), 'yyyyMMddHH');
    // }else{
    //   to = XEUtils.toDateString(time, 'yyyyMMdd') + "24";
    //   from = XEUtils.toDateString(time, 'yyyyMMdd') + "00";
    // }
    to =  XEUtils.toDateString(time, 'yyyyMMdd');
    from = XEUtils.toDateString(long == -1 ? XEUtils.getWhatDay(time, -7) : XEUtils.getWhatDay(time, -long), 'yyyyMMdd');
  }else if(selectType == 'yyyyMM'){
    // 按月查
    if(isLately){
      to =  XEUtils.toDateString(time, 'yyyyMMdd');
      from = XEUtils.toDateString(long == -1 ? XEUtils.getWhatDay(time, -30) : XEUtils.getWhatDay(time, -long), 'yyyyMMdd');
    }else{
      to = XEUtils.toDateString(time, 'yyyyMM') + XEUtils.getDayOfMonth(time);
      from = XEUtils.toDateString(time, 'yyyyMM') + "01";
    }
  }else if(selectType == 'yyyy'){
    // 按年查
    if(isLately){
      to =  XEUtils.toDateString(time, 'yyyyMM');
      from = XEUtils.toDateString(long == -1 ? XEUtils.getWhatMonth(time, -11) : XEUtils.getWhatMonth(time, -long), 'yyyyMM');
    }else{
      to = XEUtils.toDateString(time, 'yyyyMM') + "12";
      from = XEUtils.toDateString(time, 'yyyyMM') + "01";
    }
  }
  return {
    from: from,
    to: to
  }
}
// 获取当前选择事件
function getSelectDate(selectDate, pickerType){
  let selectDateRes = new Date();
  if(XEUtils.toDateString(selectDate, pickerType) == XEUtils.toDateString(new Date(), pickerType)){
    selectDateRes = new Date(); // 重置为当前时间
  }else{
    if(pickerType == 'yyyy'){
      selectDateRes = XEUtils.getWhatYear(selectDate, 0, 'last')
    }else if(pickerType == 'yyyyMM'){
      selectDateRes = XEUtils.getWhatMonth(selectDate, 0, 'last');
    }else{
      selectDateRes = selectDate;
    }
  }
  return selectDateRes;
}
// 看板数字格式化
function kanbanformat(value){
  if(value < 0){
    value = 0;
  }
  return XEUtils.commafy(Math.floor(value * 100) / 100)
}
// 保留两位小数
function toTwoPosNub(value){
  if(!value || value < 0){
    value = 0;
  }
  return Math.floor(value * 100) / 100;
}
/**
 * 获取统计天数
 * @param {'yyyyMMdd', 'yyyyMM', 'yyyy'} pickerType 
 * @param {*} selectDate
 */
function getStatDay(pickerType, selectDate){
  let day = 1;
  if(pickerType == 'yyyyMMdd'){
    day = 1;
  }else if(pickerType == 'yyyyMM'){
    if(XEUtils.toDateString(selectDate, 'yyyyMM') == XEUtils.toDateString(new Date(), 'yyyyMM')){
      // 本月
      day = parseInt(XEUtils.toDateString(new Date(), 'dd'));
    }else{
      day = XEUtils.getDayOfMonth(selectDate);
    }
  }else{
    // 年统计
    if(XEUtils.toDateString(selectDate, 'yyyy') == XEUtils.toDateString(new Date(), 'yyyy')){
      // 今年
      day = XEUtils.getYearDay(selectDate);
    }else{
      day = XEUtils.getDayOfYear(new Date());
    }
  }
  console.log('统计天数', day);
  return day;
}

/**
 * 查询参数处理
 * @param {*} form 表单数据
 * @param {*} timeStr 传入timeStr则增加from&to字段
 */
function parameHand(form, timeStr, max, isTimeStr = true){
  if(!form) form = {};
  let data = XEUtils.pick(form, val => {return val != ''})
  console.log('-------', data)
  if(timeStr){
    if(max){
      data.from = XEUtils.toDateString(XEUtils.getWhatMonth(new Date(form[timeStr][1]).getTime() + 3600 * 1000 * 24 * 5, -6), 'yyyy-MM-dd');
    }else{
      data.from = XEUtils.toDateString(new Date(form[timeStr][0]), 'yyyy-MM-dd');
    }
    data.to = XEUtils.toDateString(new Date(form[timeStr][1]), 'yyyy-MM-dd');
    if (isTimeStr) data[timeStr] = undefined;
  }
  return data;
}

function getLabelByVal(list, data, label, value){
  if(!label) label = "label";
  if(!value) value = "value";
  let result = XEUtils.find(list, item => item[value] == data)
  // console.log('刷选的结果', result);
  return result ? result[label] : '';
}

/**
 * 分页获取数据，默认获取全部
 * @param {*} fun 获取数据方法
 * @param {*} row 每页多少条
 */
async function getDataByPage(fun, page, row){
  let data = [];
  while(true){
    page = page + 1;
    let result = await getRecursive(fun, page, row);
    data = data.concat(result.data)
    if(result.result){
      return data;
    }
  }
}

async function getRecursive(fun, page, row){
  let result = await fun(page, row);
  let total = result.total;
  if(page * row < total){
    return {result: false, data: result.data};
  }else{
    return {result: true, data: result.data};
  }
}

/**
 * 判断字符串是否为数字
 * @param nubmer
 * @returns {boolean}
 */
function checkRate(nubmer) {
  //判断正整数/[1−9]+[0−9]∗]∗/
  var re = /^[0-9]+.?[0-9]*/;//
  if (!re.test(nubmer)) {
      return false;
  }
  return true;
}

// 文件转xlsx
const file2Xce = (file) => {
  return new Promise(function(resolve, reject) {
   const reader = new FileReader()
   reader.onload = function(e) {
     const data = e.target.result
     let wb = XLSX.read(data, {
       type: 'binary'
     })
     const result = []
     wb.SheetNames.forEach((sheetName) => {
       result.push({
         sheetName: sheetName,
         sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
       })
     })
     resolve(result)
   }
   reader.readAsBinaryString(file.raw)
 })
}

export default {
  stringTransformTimestamp, //时间字符串转unix时间戳
  threadSleep, // 线程等待，不能太长时间
  getTimeList, // 获取时间列表
  getFromTo, // 获取开始时间和结束时间
  kanbanformat, // 看板数据格式化
  toTwoPosNub, // 保留两位小数
  getStatDay, // 获取统计天数
  getSelectDate, // 获取选择的时间
  getPreMonthDay, // 获取前几月日期
  parameHand, // 参数处理
  getLabelByVal, // 通过值查询key
  getDataByPage,
  checkRate, // 判断字符串是否为纯数字
  file2Xce, // 文件转xlsx
}