### 原型链继承的例子：
> js部分：
``` shell
function Ele(id) {
        this.ele = document.getElementById(id)
    }
Ele.prototype.html = function (val) {
    var ele = this.ele
    if (val) {
        ele.innerHTML = val
        return this //链式操作
    } else {
        return ele.innerHTML
    }
}
Ele.prototype.on = function (type, fn) {
    var ele = this.ele
    ele.addEventListener(type, fn)
    return this
}
var oDiv = new Ele('div')
//    console.log(oDiv.html())
oDiv.html('<p>demo</p>').on('click', function () {
    oDiv.html('<p>hello world</p>')
})
``` 

> html部分:
``` shell
<div id="div">原型链继承</div>
```
