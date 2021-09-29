// import MyPromise from './promise'
const MyPromise = require('./promise')
let p = new MyPromise((resolve, reject) => {   // promise函数中传入一个executor执行器
  resolve('success')
  // reject('error')
  // throw new Error('Exception: Error')
})
p.then((value) => {
  console.log(value)
}, (reason) => {
  console.log(11)
  console.log(reason)
})