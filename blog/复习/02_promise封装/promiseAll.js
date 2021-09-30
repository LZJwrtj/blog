function promiseAll (promise) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promise)) {
      return reject(new Error('arguments must be an array'))
    }
    let length = promise.length
    let resolveVal = []
    promise.forEach((p, index) => {
      Promise.resolve(p).then((value) => {
        resolveVal.push(value)
        if (index === length - 1) {
          return resolve(resolveVal)
        }
      })
    })
  })
}

let p1 = new Promise((resolve, reject) => {
  resolve('p1')
})
let p2 = new Promise((resolve, reject) => {
  resolve('p2')
})
let p3 = new Promise((resolve, reject) => {
  resolve('p3')
})

promiseAll([p1, p2, p3]).then((value => {
  console.log(value)
}))