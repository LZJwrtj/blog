// import MyPromise from './promise'
const MyPromise = require('./promise')
let p = new MyPromise((resolve, reject) => {   // promise函数中传入一个executor执行器
  // resolve('success')
  // reject('error')
  // throw new Error('Exception: Error')
  setTimeout(() => {
    resolve('success')
  }, 2000)
})
p.then((value) => {
  console.log('fulfilled1:' + value)
}, (reason) => {
  console.log('rejected1:' + reason)
})
p.then((value) => {
  console.log('fulfilled2:' + value)
}, (reason) => {
  console.log('rejected2:' + reason)
})