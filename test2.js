// function f() {
//     var temp = 1
//     this.x = 3
//     console.log(temp)
//     console.log(this.x)
// }
// console.log(f())

var obj = {proto: {a:1,b:2}};
function F(){};
F.prototype = obj.proto;
var f = new F();
obj.proto.c = 3;
obj.proto = {a:-1, b:-2};
console.log(f.a);//1
console.log(f.c);//3
delete F.prototype['a'];
console.log(f.a);//undefined
console.log(obj.proto.a);