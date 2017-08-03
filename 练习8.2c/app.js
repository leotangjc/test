// 书写函数，满足对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组

// var a = [1, 3, 5, 7, 5, 3];
//
//
// function ddd() {
//   var c = [];
//   for (var i = 0; i < a.length; i++) {
//     //查找c数组里有没有a[i]元素，如果没有找到该元素,就将这个元素推到c元素里
//     if (c.indexOf(a[i]) === -1) {
//       c.push(a[i]);
//     }
//   }
//   return c;
// }
//
// console.log(ddd(a));




//ES6方案
const a = [1, 3, 5, 7, 5, 3];

var xxx = a => new Set(a);
console.log(xxx(a));


