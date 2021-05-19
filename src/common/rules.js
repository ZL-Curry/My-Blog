
const checkphone =(rule,value,callback) =>{
  if(!(/^1[345789]\d{9}$/.test(value))){ 
    callback(new Error('请输入有效的手机号'));
  }else{
    callback();
  }
}

// 域名
// /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
const checkdomain =(rule,value,callback) =>{
  if(!(/^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]+$/.test(value))){ 
    callback(new Error('请输入正确的域名'));
  }else{
    callback();
  }
}

// 邮箱
const checkemail =(rule,value,callback) =>{
  if(!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value))){ 
    callback(new Error('请输入正确的邮箱地址'));
  }else{
    callback();
  }
}

// 是否判断
const checkState =(rule,value,callback) =>{
  if (value == '1' || value == '2' || value == '3' || value == 1 || value == 2 || value == 3) {
    callback()
  } else {
    callback(new Error("状态类型不正确"))
  }
}

// 数字
const checkNum =(rule,value,callback) =>{
  if (typeof value !== 'number' && isNaN(value)) {
    callback(new Error("不是一个有效的数字"))
  } else {
    callback()
  }
}

// 检查服务器类型
const checkServeType =(rule,value,callback) =>{
  if (value == '公有云' || value == '私有云' || value == '自建云') {
    callback()
  } else {
    callback(new Error("服务器类型不正确"))
  }
}

// 检查IP地址
const checkIp = (rule,value,callback) =>{
  if (!(/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/.test(value))) { 
    callback(new Error('请输入正确的IP地址'))
  } else {
    callback()
  }
}

// 检查公网IP地址
const checkPublicIp = (rule,value,callback) =>{
  if (!(/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/.test(value))) {
    callback(new Error('请输入正确的IP地址'))
  } else {
    const ipList = value.split('.') 
    console.log(ipList[0], ipList[0] != '192', ipList[0] != '172', ipList[0] != '10')
    if (ipList[0] == '192' || ipList[0] == '172' || ipList[0] == '10') {
      callback(new Error('该地址为内网地址，请输入正确的公网IP地址'))
    } else {
      callback()
    }
  }
}

// 检查公网IP地址,可以为空
const checkPublicIpNull = (rule,value,callback) =>{
  if (!(/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/.test(value))) {
    if (value == "") {
      callback()
    } else {
      callback(new Error('请输入正确的IP地址'))
    }
  } else {
    const ipList = value.split('.') 
    console.log(ipList[0], ipList[0] != '192', ipList[0] != '172', ipList[0] != '10')
    if (ipList[0] == '192' || ipList[0] == '172' || ipList[0] == '10') {
      callback(new Error('该地址为内网地址，请输入正确的公网IP地址'))
    } else {
      callback()
    }
  }
}

// 非空
const notNull = (message) => {
  return [{ required: true, message: message, trigger: 'blur' }]
}
// 密码
const password = [{ required: true, message: '请输入密码', trigger: 'blur' }]
// 用户名
const username = [{ required: true, message: '请输入用户名', trigger: 'blur' }]
// 姓名
const name = [
  { required: true, message: '请输入正确的名称', trigger: 'blur' },
  { min: 2, max: 40, message: '长度在 2 到 40 个字符', trigger: 'blur' }
]
// 请选择人员类型
const usertype = [{ required: true, message: '请选择人员类型', trigger: 'blur' }]
// 请输入电话号码
const phone = [
  { required: true, message: '请输入正确的手机号码', trigger: 'blur' },
  { validator: checkphone, trigger: 'blur' }
]
// 域名
const domain = [
  { required: true, message: '请输入正确的域名', trigger: 'blur' },
  { validator: checkdomain, trigger: 'blur' }
]
// 邮箱
const email = [
  { required: true, message: '请输入正确的邮箱地址', trigger: 'blur' },
  { validator: checkemail, trigger: 'blur' }
]
// 状态
const state = [
  { required: true, message: '状态不能为空', trigger: 'blur' },
  { validator: checkState, trigger: 'blur' }
]
// 非空数字
const num = [
  { required: true, message: '不是一个有效的数字', trigger: 'blur' },
  { validator: checkNum, trigger: 'blur' }
]
// 服务器类型检查
const serveType = [
  { required: true, message: '服务器类型不能为空', trigger: 'blur' },
  { validator: checkServeType, trigger: 'blur' }
]
// 公网IP地址检查
const publicIp = [
  { required: true, message: 'IP地址不能为空', trigger: 'blur' },
  { validator: checkPublicIp, trigger: 'blur' }
]
// IP地址检查
const ip = [
  { required: true, message: 'IP地址不能为空', trigger: 'blur' },
  { validator: checkIp, trigger: 'blur' }
]
// IP地址检查,可以为空
const ipNull = [
  { validator: checkPublicIpNull, trigger: 'blur' }
]

// 输入框限制
function inputno(val){
  this.form.no = val.replace(/[`\u4E00-\u9FA5~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"");
}

export default{
  notNull,
  password, // 密码
  username,
  name,
  usertype,
  phone, // 手机号
  domain, // 域名，
  email, // 邮箱,
  state, // 状态  是、否
  serveType, // 服务器类型
  num, // 非空数字
  publicIp, // 公网IP
  ipNull, // 公网IP，可以为空
  ip, // ip地址
  inputno
}