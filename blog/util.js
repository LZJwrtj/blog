/**
 * 把数字转变成每三位一个逗号的字符串
 * @param num {Number} eg. 1000123123
 * @return {String} eg. 1,000,123,123
 */
function strAddComma(num) {
    var a = String(num);
    var l = Math.ceil(a.length / 3);
    var b = [];
    for (let i = 0; i < l; i++) {
        var fir = a.length - ((i + 1) * 3); // 7 4 1 0
        var sec = a.length - (i * 3); // 10 7 4 1
        fir = fir < 0 ? 0 : fir;
        sec = sec < 0 ? 0 : sec;
        b.unshift(a.slice(fir, sec));
    }
    return b.join(',');
}


function formatMoney(num, s2='') {
    var str = String(num)
    var len = str.length
    if(len > 3) {
        var a = str.slice(0, len - 3);
        var b = ',' + str.slice(len - 3) + s2;
        return formatMoney(a , b);
    }else {
        return str + s2;
    }
}

/**
 * 判断数据类型
 * @param val: 要判断的数据   type：数据类型，要加引号
 * @return {Boolean}
 */

function type(val, type) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
}



/**
 * 把手机号码中间四位转换成'****'
 * @param num {Number} eg. 13460808539
 * @return {String} eg. 134****8539
 */

function formatNumber(num) {
    var str = String(num)
    var res = str.substr(0, 3) + '****' + str.substr(7)
    return res
}



/**
 * 从url中得到某个query参数
 * param query {String}
 * return {String} 该query 的值 或者 undefined
 */
function getQuery(query) {
    var qs = (location.search.length > 0 ? location.search.substring(1) : "");
    var items = qs.length ? qs.split("&") : [];
    var item = null;
    var name = null;
    var value = null;
    var len = items.length;
    for (var i = 0; i < len; i++) {
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name == query) {
            return value;
        }
    }
}

/* IOS10.1.1 复制时 下方输入框会弹出 */
/* 如果有.focus() 的时候，oppo手机出出现输入框弹出又消失 */
function copyText(inputText, fn) {
    if (!inputText && inputText != 0) return fn('参数为空');
    var input = document.createElement('input');
    input.value = inputText || '';
    input.style.opacity = '0';
    input.style.position = 'absolute';
    input.style.pointerEvents = 'none';
    document.body.appendChild(input);

    try {
        var currentFocus = document.activeElement;
        input.focus();
        input.setSelectionRange(0, input.value.length);
        document.execCommand('copy', true);
        // currentFocus.focus();
        input.parentNode.removeChild(input);
        return fn();
    } catch (e) {
        console.error('Copy Err: ' + e);
        input.parentNode.removeChild(input);
        return fn(e);
    }
}

var extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
};

/**
 * 用处：在url中加一个param参数
 * 先检测url中是否存在这个参数，存在的话返回替换后的链接，
 * 如果不存在则在链接的后边，检测是否有？以决定是新增还是新添加
 * return {String} 经过处理后的链接字符串
 */
function urlParamsReplace(key, value) {
    if (!key) return;
    if (value == undefined) return;
    if (!location.href) return;
    var reg = new RegExp(key + "=([^&]*)", "g");

    var currentUrl = window.location.href.replace(reg, function(match, orginValue) {
        return key + '=' + value;
    });

    if (!reg.test(currentUrl)) {
        currentUrl += (currentUrl.indexOf('?') > -1 ? '&' : '?') + key + '=' + value;
    }
    return currentUrl;
}

/**
 * 数组去重
 *
 * @param  {Array} arr 需要去重的数组
 * @return {Array}     去重后的的数组
 */
function unique(arr) {
    var result = [],
        hash = {};
    for (var i = 0, elem;
         (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

/**
 * @param sec {Number} 秒数
 * @return {Object}
 */
function second2Obj(sec) {
    if (!sec) sec = 0;
    sec = Number(sec);
    sec = sec < 0 ? 0 : sec;
    const MinuteLen = 60;
    const HourLen = 60 * MinuteLen;
    const DayLen = 24 * HourLen;

    return {
        day: Math.floor(sec / DayLen), // 剩余天数
        hour: Math.floor(sec / HourLen) % 24, // 做余处理的剩余小时数
        minute: Math.floor(sec / MinuteLen) % 60, // 做余处理的剩余分钟数
        second: sec % 60, // 做余处理的剩余秒数
    }

}

/**
 * @return {String} 当前的时间 eg. 2017-10-10 18:00:02
 */
function crtTimeText() {
    var cT = new Date();
    var tT1 = [cT.getFullYear(), cT.getMonth() + 1, cT.getDate()].join('-');
    var tT2 = [cT.getHours(), cT.getMinutes(), cT.getSeconds()].join(':');
    return tT1 + ' ' + tT2;
}


/**
 * 判断参数类型
 * @return {Boolean}
 */
function _is(source, type) {
    return toString.call(source) === '[object ' + type + ']';
}

let isArray = (source) => _is(source, 'Array');
let isObject = (source) => _is(source, 'Object');
let isFn = (source) => _is(source, 'Function');
let isString = (source) => _is(source, 'String');
let isNumber = (source) => _is(source, 'Number');
let isUndefined = (source) => _is(source, 'Undefined');


var Lzj = (function() {
    var $ = {
        forEach: function() {

        },
        reduce: emptyArray.reduce,
        push: emptyArray.push,
        sort: emptyArray.sort,
        indexOf: emptyArray.indexOf,
        concat: emptyArray.concat,

    };
    return $;
})();

window.Lzj = Lzj;

if (!window.$) {window.$ = Lzj}

// 事件相关函数
(function($) {
    $.proxy = function() {}
})(Lzj)
(function($) {
    $.proxy = function() {}
})(Lzj)
(function($) {
    $.proxy = function() {}
})(Lzj)
(function($) {
    $.proxy = function() {}
})(Lzj)


/**
 * 该模板用来实现快速生成一个 帧动画模板
 * !!!要求：文件名为 连续 累加 数字 的图片文件，如1.png， 2.png ...

 * @max: 最后一张图片的序列
 * @start: 起始的图片的序列
 * @path: 文件夹路径; eg. './img/a'
 * @type: 文件类型; {png \ jpg}

 * @j: png 的序列 范围{ @start + 1 <= @j <= @max}
 * @a: 图片的数量 - 1
 * @b: 每次的百分比变化额度
 * @c: 62.5333% {background-image: url();} 中的 62.5333
 * @x: 62.5333 变成的 62.53
 * @selector: 62.53% {} 中的 62.53%
 */
    .fn_frames(@path, @max, @start: 1, @type: 'png', @i: @start) when (@i <= @max) and (default()) {
@j: @i;

@a: @max - @start;
@b: 1 / @a * 100;
@c: @b * (@i - @start);
@x: round(@c, 2);
@selector:e('@{x}%');

    @{selector}{
        background-image: url('@{path}/@{j}.@{type}');
    }
    .fn_frames(@path, @max, @start, @type, (@i + 1));
}

/* 32 之前是右上角环不亮 */
@keyframes A2 {
@path: '../img/A2';
@start: 1;
@max: 32;
.fn_frames(@path, @max, @start);
}