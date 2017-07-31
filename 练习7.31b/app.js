var express = require('express');

var app = express();
var superagent = require('superagent');
//抓取
var cheerio = require('cheerio');
var url = require('url');

var async = require('async');

app.listen(3000, function(req, res) {
  console.log('app is running at port 3000');
});




var a =  [{name:'jack',age:22},{name:'nancy',age:23},{name:'tom',age:22}];

// console.log(a[1]);
//1.比较出age值等于22的对象
//2. 把拥有该值的对象添加进新数组，
//3. 输出新数组

// 最大值和最小值
var h = new Array();
var n = 22;
var l = null;
var i = 0;
a.forEach(function(element, index) {
  // console.log(element);
  if (n == element.age) {
    i = index;
    h.unshift(a[i]);
    // console.log(element['1']);
  }
});
console.log(h);

