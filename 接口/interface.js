"use strict";
// document 【https://www.tslang.cn/docs/handbook/interfaces.html】
// TypeScript的核心原则之一是对值所具有的结构进行类型检查
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
// 接口初探
// 该接口需要个 label 属性的对象
function printLabel(obj) {
    console.log(obj.label);
}
printLabel({ label: '123' });
function printLabel2(obj) {
    console.log(obj.label);
}
printLabel2({ label: '123' });
function createSquare(obj) {
    var newSquare = {
        color: '#fff',
        width: '20px',
        height: '5px'
    };
    if (obj.color) {
        newSquare.color = obj.color;
    }
    if (obj.width) {
        newSquare.width = obj.width;
    }
    return newSquare;
}
console.log(createSquare({})); // 如果可能是个空对象，要加一个问号 createSquare(obj?: SquareConfig)
console.log(createSquare({ color: 'red', width: '10px' }));
var p1 = { x: 123, y: 321 };
// p1.x = 321;          // error
var a = [123];
// a = 123              // error，只能是 array 类型的
// ReadonlyArray 确保数组创建后再也不能被修改
var ro = a;
// ro[0] = 123123       // error
// 可以用类型断言重写：
a = ro;
console.log(a);
function squareFn(arg) {
    return {
        color: arg.color || '#fff',
        width: arg.width || 20
    };
}
console.log(squareFn({ label: 123 }));
var mySearch;
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
mySearch = function (s, su) {
    // 查找 subString 是否 存在 source 中
    return s.search(su) > -1; // 函数的返回值类型是通过其返回值推断出来的
};
console.log(mySearch('abcd', 'a'));
var myArray;
// myArray = [1,2];        // error
myArray = ['1', '2'];
var myArray1 = myArray[0];
console.log(myArray1);
var myArray2 = ['123', '1'];
// myArray2[2] = 'my2';        // error
console.log(myArray2); // 索引签名是只读的
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var Clock2 = /** @class */ (function () {
    function Clock2(h, m) {
    }
    Clock2.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock2.prototype.getTime = function () {
        return this.currentTime;
    };
    return Clock2;
}());
var clock = new Clock2(12, 34);
clock.setTime(new Date());
console.log(clock.getTime());
