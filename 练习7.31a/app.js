var express = require('express');
var app = express();


var a = [1, 33, 44, 22];

// 最大值和最小值

var min = null;
a.forEach(function(element) {
  //最大值
  if (min < element) {
  //最小值
  // if (min > element) {
    min = element;
  }
});
console.log(min);



//元素总和
// var i = 0;
// var min = null;
// a.forEach(function(element, index) {
//   // console.log(element);
//   min = min + element;
// });
//
// console.log(min)








