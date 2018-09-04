/*
*
* 泛型 https://www.tslang.cn/docs/handbook/generics.html
*
* */
// 传入的类型与返回的类型应该是相同的
// 可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
function identity(arg) {
    return arg;
}
console.log(identity(123));
// 这里使用了【类型变量】，它是一种特殊的变量，只用于表示类型而不是值。
// 我们给identity添加了类型变量T（当然可以随意定义）。
// T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
// 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。
// 这允许我们跟踪函数里使用的类型的信息。
function identity2(arg) {
    return arg;
}
// 这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()
console.log(identity2(123));
console.log(identity2('aaa123'));
// 利用类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型, 而不用在调用时候用【<>】指定类型
console.log(identity2(123));
// T类型的数组
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity([123]));
// 使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
// let myIdentity = identity2;
var myIdentity = identity2;
console.log(myIdentity([1234]));
// 可以使用带有调用签名的对象字面量来定义泛型函数：
var myIdentity2 = identity2;
console.log(myIdentity2([12345]));
var myIdentity3 = identity2;
console.log(myIdentity3([123456]));
var myIdentity4 = identity2;
console.log(myIdentity4(1234567));
// 泛型类
// 泛型类使用（ <>）括起泛型类型，跟在类名后面
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.value = 123;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(2, 3));
var myGenericNumber2 = new GenericNumber();
myGenericNumber2.value = '123321';
myGenericNumber2.add = function (x, y) {
    return x + '--' + y;
};
console.log(myGenericNumber2.add('ab', 'cd'));
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.name = 'w';
var p = new Person('wx', 123);
console.log(p);
// console.log(p.hasOwnProperty('name'));
// console.log(p.name);
// delete p.name;
// p.name = null;
console.log(p.name);
// console.log(Object.getPrototypeOf(p.name));
var a = Object.create(p, ['ww', 123]);
console.log(a);
