// 书写函数，满足输入整数a和b,若a2+b2大于100,则输出a2+b2百位以上数字,否则输出两数之和


var a = 60;
var b = 50;

var x = a * a + b * b;

if(x>100)
{
  var c = x /100;
  console.log(c);
}
else
{
  console.log(x);
}
