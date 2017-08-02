// 书写函数，满足获取一个对象里面第一层元素的数量和第二层，返回一个整数

var obj = {
  a: 1,
  b: 2,
  c: {
    c1: 2,
    c2: 4,
  },
};


var index = 0;
var ttt = 0;
for (var i in obj) {
  if (typeof(obj[i]) === 'object') {
    for (var z in obj[i]) {
      ttt++;
    }
    console.log(obj[i]);
    console.log(ttt);
  }
  index++;
}

console.log(index);
