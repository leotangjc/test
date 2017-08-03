// 书写函数，满足对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串

let b = '   aaa   ';
let c = b.replace(/^\s+|\s+$/g, '');
console.log(c);