var express = require('express');
var app = express();

var a =  [{name:'jack',age:22},{name:'nancy',age:23},{name:'tom',age:22}];







// //使用for循环数组，然后将符合要求的元素，添加到新的数组输出
// var i;
// var h = new Array();
// for(i=0;i<a.length;i++){
//   if(a[i].age === 22){
//     h.unshift(a[i])
//   }
// }
// console.log(h);



// //使用filter筛选出值中带有22的对象
// var b = a.filter(function(x) {
//   return x.age === 22;
// });
//
// console.log(b);





// //1.比较出age值等于22的对象
// //2. 把拥有该值的对象添加进新数组，
// //3. 输出新数组
//
// var h = new Array();
// var n = 22;
// var l = null;
// var i = 0;
// a.forEach(function(element, index) {
//   if (n == element.age) {
//     i = index;
//     h.unshift(a[i]);
//   }
// });
// console.log(h);
//
