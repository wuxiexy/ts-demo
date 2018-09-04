
/*
*
* 泛型 https://www.tslang.cn/docs/handbook/generics.html
*
* */

// 传入的类型与返回的类型应该是相同的
// 可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。

function identity(arg:number):number {
    return arg;
}
console.log(identity(123));





// 这里使用了【类型变量】，它是一种特殊的变量，只用于表示类型而不是值。
// 我们给identity添加了类型变量T（当然可以随意定义）。
// T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
// 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。
// 这允许我们跟踪函数里使用的类型的信息。
function identity2<T>(arg: T): T {
    return arg;
}

// 这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()
console.log(identity2<number>(123));
console.log(identity2<string>('aaa123'));

// 利用类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型, 而不用在调用时候用【<>】指定类型
console.log(identity2(123));







// T类型的数组
function loggingIdentity<T>(arg:T[]):T[] {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity([123]));


// 使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
// let myIdentity = identity2;
let myIdentity: <U>(arg: U) => U = identity2;
console.log(myIdentity([1234]));


// 可以使用带有调用签名的对象字面量来定义泛型函数：
let myIdentity2: {<T>(arg: T): T} = identity2;
console.log(myIdentity2([12345]));




// 泛型接口
interface GenericIdentiyFn {
    <T>(arg:T): T;
}
let myIdentity3:GenericIdentiyFn = identity2;
console.log(myIdentity3([123456]));


// 把泛型参数当作整个接口的一个参数
interface GenericIdentiyFn2<T> {
    (arg:T):T;
}
let myIdentity4:GenericIdentiyFn2<number> = identity2;
console.log(myIdentity4(1234567));





// 泛型类
// 泛型类使用（ <>）括起泛型类型，跟在类名后面
class GenericNumber<T> {
    value: T;
    add: (x:T, y:T)=>T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.value = 123;
myGenericNumber.add = function (x, y) {
    return x+y;
};
console.log(myGenericNumber.add(2,3));

let myGenericNumber2 = new GenericNumber<string>();
myGenericNumber2.value = '123321';
myGenericNumber2.add = function (x, y) {
    return x+'--'+y;
};
console.log(myGenericNumber2.add('ab','cd'));







/*function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.name = 'w';

var p = new Person('wx',123);
console.log(p);
// console.log(p.hasOwnProperty('name'));
// console.log(p.name);
// delete p.name;
// p.name = null;
console.log(p.name);
// console.log(Object.getPrototypeOf(p.name));

// var a = Object.create(p,['ww', 123]);
// console.log(a);

console.log(p.hasOwnProperty('name'));*/



// 泛型约束
// 限制函数去处理任意带有.length属性的所有类型
// 使用这个接口和extends关键字来实现约束
interface Lengthwise {
    length: number
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    return arg;
}
console.log(loggingIdentity2([3]));                 // array 本来就有length属性
console.log(loggingIdentity2({name:123,length:1})); // 传入的对象只要带有 length 属性就好




// 在泛型约束中使用类型参数
// 用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束。
/*function getProperty(obj:T, key:K) {
    return obj[key]
}
let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"));   // okay
console.log(getProperty(x, "m"));*/



// 在泛型里使用类类型
function create<T>(c:{new():T}):T {
    return new c();
}
// console.log(create({}));




// 使用原型属性推断并约束构造函数与类实例的关系
/*class BeeKeeper {
    hasMask: boolean
}
class ZooKeeper {
    nameTag: string
}
class Animal {
    numLegs: number
}

class Bee extends Animal {
    keeper: BeeKeeper
}
class Lion extends Animal{
    keeper: ZooKeeper
}

function createInstance<A extends Animal>(c:new () => A):A {
    return new c();
}

console.log(createInstance(Lion).keeper.nameTag);
console.log(createInstance(Bee).keeper.hasMask);*/













