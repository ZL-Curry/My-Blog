import { addLocale } from "core-js"

let test_user = function(t){
  return /^\w{6,12}$/.test(t)
}
let test_password = function(t){
  return /^\w{6,12}$/.test(t)
}
// let test_mobile = (_)=>{
//   return /^1[3-9]\d{9}$/.test(p)
// }

//random auth code
function getRandomNumber() {
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f','g','h','i','j']
  var randomNumber = ''
  for (var i = 0; i < 6; i++) {
      var num = Math.round(Math.random() * (15 - 0) + 0)
      randomNumber += arr[num]
  }
  return randomNumber
}

// 动态添加类名
function addClass(el, className) {
  // 1.判断添加类名是否存在
  if (_hasClass(el, className)) {
    return
  }
  // 2.去添加类名
  let addNewClass = el.className.split(' ')
  addNewClass.push(className)
  el.className = addNewClass.join(' ')

}

// 判断当前类名是否存在
function _hasClass(el, className) {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}



export {
  test_user,
  test_password,
  // test_mobile,
  getRandomNumber,
  addClass
}