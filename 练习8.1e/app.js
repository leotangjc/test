// 写一个函数，求出当天是周几。比如今天周二，则输出2。

var d = new Date().getDay();
switch (d) {
  case 0:
    x = '今天星期日';
    break;
  case 1:
    x = '今天星期一';
    break;
  case 2:
    x = '今天星期二';
    break;
  case 3:
    x = '今天星期三';
    break;
  case 4:
    x = '今天星期四';
    break;
  case 5:
    x = '今天星期五';
    break;
  case 6:
    x = '今天星期六';
    break;
}

console.log(d);
console.log(x);