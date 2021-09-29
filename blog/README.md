## 关于js中判断变量是不是数组的方法：
### 1.typeof真的那么厉害吗？
``` shell
var arr = [1, 2, 3]
console.log(typeof arr) //输出结果是object
```
>上面的方法只能对值类型的数据检测出结果，对于引用类型的数据检测的结果都是object（除了function之外）

### 2.利用instanceof来判断

``` shell
var arr = [1, 2, 3]
console.log(arr instanceof Array) //输出结果为true
```
>从结果上来看还是不错的，能够准确的检测出是不是数组，但是，这种方法存在这一个问题，待会我会在下面总结出来

### 3.利用原型链

``` shell
var arr = [1, 2, 3]
console.log(arr.__proto__.constructor == Array) //true
console.log(arr.constructor == Array) //true,两行代码是一样的
```

>从结果上来看是行得通的，但是这种方法存在了一个兼容问题：在早起的IE浏览器中没有定义__proto__

#### 总结一下方法2和方法3的问题：

>instanceof 和constructor 判断的变量，必须在当前页面声明的，比如，一个页面（父页面）有一个框架，框架中引用了一个页面（子页面），在子页面中声明了一个ary，并将其赋值给父页面的一个变量，这时判断该变量，Array == object.constructor;会返回false；

##### 原因：

> 1.array是引用类型数据，在传递过程中，仅仅是引用地址的传递

> 2.每个页面的Array原生对象所引用的地址是不一样的，在子页面声明的array，所对应的构造函数，是子页面的Array对象；父页面来进行判断，使用的Array并不等于子页面的Array

### 4.通用方法

``` shell
var arr = [1, 2, 3]
function isArray(arr){
  return Object.prototype.toString.call(arr) == '[object Array]'
}
console.log(isArray(arr)) //true

> 这种方法是我们经常会用到的,推荐这种方法！
