// 已知数组：[2, null, {}, [], (function(){}), undefined, '2333', {name: 'emily', age: '18'}, true]，请找出数据类型是对象(object)的元素个数

var a = [
  2, null, {}, [], (function() {
  }), undefined, '2333', {name: 'emily', age: '18'}, true];


//方法一
var i;
var h = [];
for(i=0;i<a.length;i++){
  if(typeof(a[i]) === 'object'){
    // console.log(a[i]);
    h.unshift(a[i]);
  }
}
console.log(h.length);


//方法二
var b = a.filter(function(x) {
  // console.log(typeof(x));
  if (typeof(x) === 'object') {
    return x;
  }
});

console.log(b.length);





//输出符合邮箱格式的信息
// var g = [
//   {email: '12312312@qq.com'},
//   {email: '12124124@gmail.com'},
//   {email: 'tangjiacheng@163.cn'},
//   {email: 'cuowuxingxi'}];
//
// var q = /^(\w*)(@)(\w*).(com|cn|org)$/;
// var m = g.filter(function(x) {
//   if (q.test(x.email)) {
//     return x;
//   }
//   else {
//
//   }
// });
//
// console.log(m);