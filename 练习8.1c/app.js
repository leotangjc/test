// 已知数组 [{name:'jack',age:22},{name:'nancy',age:23},{name:'tom',age:22},{name:'jana',age:25}],请输出所有名称是a结尾的数组元素

var a = [
  {
    name: 'jack',
    age: 22,
  },
  {
    name: 'nancy',
    age: 23,
  },
  {
    name: 'tom',
    age: 22,
  },
  {
    name: 'jana',
    age: 25,
  }];

var p = /^.*(a)$/;
var b = a.filter(function(x) {
  if (p.test(x.name)) {
    return x;
  }
});

console.log(b);