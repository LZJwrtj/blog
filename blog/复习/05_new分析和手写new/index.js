// 使用new关键字做了什么：

// 1.创建一个新的对象
// 2.把构造函数的作用域赋给这个新对象（因此this指向了这个新对象）
// 3.执行构造函数中的代码（为这个新对象添加属性）
// 4.如果构造函数中有返回值，就返回构造函数中的值，没有就返回这个新对象

function myNew () {
  // 1.提取构造函数
  const constructor = Array.prototype.shift.call(arguments)
  // 2.创建新对象，把构造函数的原型对象赋给新对象
  let obj = Object.create(constructor.prototype)
  // 3.执行构造函数中的代码
  let result = constructor.apply(obj, arguments)
  // 4.判断构造函数中是否返回的是对象，如果返回的是对象，就返回构造函数中返回的对象，反之返回这个新对象
  return result instanceof Object ? result : obj
}
function Person (name, job) {
  this.name = name
  this.job = job
}
let person = myNew(Person, 'leo', 'doctor')
console.log(person) // Person { name: 'leo', job: 'doctor' }