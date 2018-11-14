# ES6总结
## 一,新的变量声明方式 let/const
与var不同，新的变量声明方式带来了一些不一样的特性，其中最重要的两个特性就是提供了块级作用域与不再具备变量提升。
通过1个简单的例子来说明这两点。
``` 
{
    let a = 20;
    console.log(a); //其结果为 20
}

console.log(a);  //其结果为a is not defined
```
说明了用let定义的变量只作用在其作用域中，比如说{}中，而在{}外面访问a只会报错，说明let也不具有变量提升。

当然，你的代码编译成为了ES5之后，仍然会存在变量提升，因此这一点只需要我们记住即可。在实际使用中，也需要尽量避免使用变量提升的特性带来的负面影响。只有在面试题中，才会对变量提升不停的滥用。

使用ES6，我们需要全面使用let/const替换var，那么什么时候用let，什么时候用const就成为了一个大家要熟练区分的一个知识点。
我们常常使用let来声明一个值会被改变的变量，而使用const来声明一个值不会被改变的变量，也可以称之为常量。

比如下面这个代码：
```
const a = 110;
a = 99;
console.log(a); // Assignment to constant variable.
```
说明 const 定义的变量是常量，当我们试图改变const声明的变量时，则会报错。

因此，只要记住这两个变量声明方式的特性，那在以后的运用中就会显得游刃有余。

## 二,箭头函数的使用
在ES6中有一个新的函数编写方式颠覆了以往的js编码习惯，那就是箭头函数。

首先我们举两个例子对比一下：
```
// 以往的写法
var f = function(a, b) {
    return a + b;
}

// es6 箭头函数写法
var f = (a, b) => {
    return a + b;
}
//其中当函数直接被return时，可以省略函数体的括号
var f = (a,b) => a + b;
```
可见箭头函数的书写方式更简洁明了一些。

其次，还有一点比较重要，就是箭头函数中没有this，如果你在箭头函数中使用了this，那么该this一定就是外层的this。

所以既然箭头函数中没有this，因此我们也就无从谈起用call/apply/bind来改变this指向。记住这个特性，能让你在react组件之间传值时少走无数弯路。

```
var f = {
    name: 'tom',
    say: function() {
        return this.name;    //这个this指的是f
    }
}

//当用箭头函数编写时
var f = {
    name: 'tom',
    say: () => this.name  //此时this为undefined
}
```
## 三,模板字符串

模板字符串是为了解决使用+号拼接字符串的不便利而出现的。它的功能非常强大，但是我们大多数时候使用它则非常简单。看一个例子大家就明白怎么使用了。
```
// es6
const a = 20;
const b = 30;
const string = `${a}+${b}=${a+b}`;

// es5
var a = 20;
var b = 30;
var string = a + "+" + b + "=" + (a + b);

//两者的string结果是一样的
```
使用 `` 将整个字符串包裹起来，而在其中使用 ${} 来包裹一个变量或者一个表达式。

## 四,数组的解析结构
### **1,数组的解构赋值**

我们先来看一段代码：
```
let arr = [1,2,3]
let a = arr[0]
let b = arr[1]
let c = arr[2]
```
这是以前的写法，我们用ES6改进一下:
```
let arr = [1,2,3]
let [a,b,c] = [1,2,3]
console.log(a,b,c) // a=1 b=2 c=3
```
可以看出ES6的写法要方便很多
### **2,注意一些细节**
当左右结构不一样时
```
let [a,b,c] = [1,2,3,4]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3

let [a,b,c,d] = [1,2,3]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(d) // undefined
```
跳过部分
```
let [a,,c] = [1,2,3]
console.log(a) // 1
console.log(c) // 3
```
默认值
```
let [a,b,c,d=666] = [1,2,3]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(d) // 666

let [a=1,b,c=3,d=666] = []
console.log(a) // 1
console.log(b) // undefined
console.log(c) // 3
console.log(d) // 666
```
嵌套
```
let [a,b,c] = [1,2,[3]]
console.log(a) // 1
console.log(b) // 2
console.log(c) // [3]

let [a,b,[c]] = [1,2,[3]]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
```

## 五, 函数默认参数
在ES6中，JS的形参可以有默认值,比如下面的代码:
```
function f(x,y=100){
    return x+y;
}
console.log(f(1))  // 101
```

并且默认值最好放后面，比如下面这种情况：
```
function f(x=100,y){
    console.log(x,y)   //1,undefined
    return x+y;
}
console.log(f(1))   //NaN
```
在以前的写法中，比如当我传入一个x值为false，这个时候任然会取到默认值，就不是我们的本意了。
然后在ES6中，就可以解决这个问题。
## 六,展开运算符
在ES6中用"..."来表示展开运算符，它可以将数组方法或者对象进行展开。先来看一个例子它是如何使用的。
```
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 10, 20, 30];
// 这样，arr2 就变成了[1, 2, 3, 10, 20, 30];
```
当然，展开对象数据也是可以得到类似的结果
```
const obj1 = {
  a: 1,
  b: 2, 
  c: 3
}

const obj2 = {
  ...obj1,
  d: 4,
  e: 5,
  f: 6
}
// 结果为 const obj2 = {a:1,b:2,c:3,d:4,e:5,f:6}
```
展开运算符的运用可以大大提高我们的代码效率，但是在刚开始使用的时候比较绕脑，掌握好了用起来还是非常爽的，记住这些使用场景，平时在用的时候可以刻意多运用就行了。
## 七,对象字面量 与 class
### **1,ES6针对对象字面量做了一些简化语法的处理:**
当属性与值的变量同名时:
```
let name = 'wangcai';
let age = 20

// es6
let person = {
  name,
  age
}

// es5
var person = {
  name: name,
  age: age
};
```
可见ES6写法相当便捷。
### **2,class:**
ES6为我们创建对象提供了新的语法糖，这就是Class语法。如果你对ES5中面向对象的方式比较熟悉的话，Class掌握起来也是非常迅速的，因为除了写法的不同，它并不会增加新的难以理解的知识点。我们先利用一个简单的例子来看看写法的不同。
```
// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 原型方法
Person.prototype.getName = function() {
  return this.name
}

// ES6
class Person {
  constructor(name, age) {  // 构造函数
    this.name = name;
    this.age = age;
  }

  getName() {  // 原型方法
    return this.name
  }
}
```
除此之外，我们还需要特别注意在实际使用中的几种写法方式的不同，在下面的例子注释中，我说明了他们分别对应的ES5中的含义。
```
class Person {
  constructor(name, age) {  // 构造函数
    this.name = name;
    this.age = age;
  }

  getName() {   // 这种写法表示将方法添加到原型中
    return this.name
  }

  static a = 20;  // 等同于 Person.a = 20

  c = 20;   // 表示在构造函数中添加属性 在构造函数中等同于 this.c = 20

// 箭头函数的写法表示在构造函数中添加方法，在构造函数中等同于this.getAge = function() {}
  getAge = () => this.age   

}
```
箭头函数需要注意的仍然是this的指向问题，因为箭头函数this指向不能被改变的特性，因此在react组件中常常利用这个特性来在不同的组件进行传值会更加方便。
### **3,继承 extends**
相比ES5，ES6的继承就要简单很多，我们直接来看一个例子。
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name
  }
}

// Student类继承Person类
class Student extends Person {
  constructor(name, age, gender, classes) {
    super(name, age);
    this.gender = gender;
    this.classes = classes;
  }

  getGender() {
    return this.gender;
  }
}
```
我们只需要一个extends关键字，就可以实现继承了，不用像ES5那样去担心构造函数继承和原型继承，除此之外，我们还需要关注一个叫做super的方法。

在继承的构造函数中，我们必须如上面的例子那么调用一次super方法，它表示构造函数的继承，与ES5中利用call/apply继承构造函数是一样的功能。
```
// 构造函数中
// es6 
super(name, age);

// es5
Person.call(this);
```
## 七,补充点ES6的知识
#### 1,关于数组的扩展
##### （1）Array.from()
这个方法是 Array 构造器的静态方法

作用：将把类数组对象转成真正的数组。
```
var lis = document.getElementsByTagName("li")
console.log(Array.isArray(lis))  // false

//然后使用from：
var lis = document.getElementsByTagName("li")
var rs = Array.from(lis)
console.log(Array.isArray(rs))  // true
```
##### （2）Array.of
作用：将一组值转换为数组。与 Array.from 功能相似，理解用来创建数组。
主要目的是弥补构造器 Array（）的不足
```
var arr = []
var arr1 = new Array(3)
var arr2 = new Array("3")
console.log(arr,arr1,arr2) // [] [ <3 empty items> ] ["3"]
```
使用Array.of来改造，如下：
```
var arr1 = Array.of(3)
var arr2 = Array.of("3")
console.log(arr1,arr2) // [3] ["3"]
```
##### （3）find和findIndex
find:用于找出第一个符合条件的数组元素。找不到则是 undefined 。注意，它是不会返回多
个，只找一个，找到了就返回。如果你要把所有的满足条件的数组元素素都找出来，你应该用filter()

findIndex:返回第一个符合条件的数组元素的索引。找不到则是-1;
##### （4）includes
作用：判断元素是否在数组中存在。返回值是 true|false
```
let arr = [1,,2,3]
arr.includes(1)  // true
arr.includes("a")  //false
```
##### （5）fill
作用：给数组填充指定值。fill 方法用于空数组的初始化非常方便。已有数据会被覆盖。
fill 方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
```
let arr = new Array(5)
arr.fill("*")
console.log(arr)  //["*","*","*","*","*"]
```
覆盖之前的元素:
```
let arr = [1,2,3]
arr.fill("*")
console.log(arr)  //["*","*","*"]
```
还可以指定填充的位置，如下：
```
let arr = new Array(5)
arr.fill("*",0,2) //0和2表示下标，包括起点，不包括终点
console.log(arr)  //["*","*",<3 empty items>]
```
#### 2,新的两种数据结构（集合）
##### （1）set
set和数组差不多，也是一种集合，区别在于：它里面的值都是唯一的，没有重复的。
创建一个set如下：
```
var s = new Set([1,2,"hello"])
console.log(s)    //Set { 1, 2, 'hello' }
```
放一个对象，用add()来添加，如下：
```
var s = new Set()
s.add(1)
s.add(2)
s.add(3)
console.log(s)   //Set { 1, 2, 3 }
console.log(typeof s)  //object
```
现在要遍历上面的s1，怎么遍历，使用for in 不OK，使用foreach，是OK的。
```
var s = new Set()
s.add(1)
s.add(2)
s.add(3)
s.forEach(item=>console.log(item))   //1 2 3
```
set不是数组，是一个像对象的数组，是一个伪数组：
```
var s = new Set()
s.add(1)
s.add(2)
s.add(3)
console.log(Array.isArray(s))  //false
console.log(Array.isArray(Array.from(s))) // true
```
##### （2）map
它类似于对象，里面存放也是键值对，区别在于：对象中的键名只能是字符串，如果使用map，它里面的键可以是任意值。

创建Map，并放入一个对象，如下：
```
var m = new Map([["name","wangcai"], [1,"abc"],["age",20],["sex","男"]])
console.log(m)  //Map { 'name' => 'wangcai', 1 => 'abc', 'age' => 20, 'sex' => '男' }
```
使用set进行添加，如下：
```
var m = new Map([[1,"abc"]])
m.set(false,"abc")
m.set([1,2,3],{name:"xiaoqiang"})
console.log(m)  //Map {1 => 'abc',false => 'abc',[ 1, 2, 3 ] => { name: 'xiaoqiang' } }
```

