
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz);

let obj = { first: 'hello', last: 'world' };
//这部怎么理解
let { first: f, last: l } = obj;
console.log(f);
console.log(l);
console.log(typeof (f));