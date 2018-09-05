"use strict";
// document 【https://www.tslang.cn/docs/handbook/interfaces.html】

// TypeScript的核心原则之一是对值所具有的结构进行类型检查
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。




// 接口初探
// 该接口需要个 label 属性的对象
function printLabel(obj:{label:string}) {
    console.log(obj.label);
}
printLabel({label: '123'});




// 使用接口来描述
interface PrintLabelInterfase {             // 接口
    label: string
}
function printLabel2(obj:PrintLabelInterfase) {
    console.log(obj.label);
}
printLabel2({label:'123'});





// 可选属性
// 接口里的属性不全都是必需的
interface SquareConfig {
    color?:string;
    width?:string;
}
function createSquare(obj?: SquareConfig):{color:string,width:string} {
    let newSquare = {
        color: '#fff',
        width: '20px',
        height: '5px'
    };
    if(obj.color){newSquare.color = obj.color;}
    if(obj.width){newSquare.width = obj.width;}
    return newSquare;
}
console.log(createSquare({}));      // 如果可能是个空对象，要加一个问号 createSquare(obj?: SquareConfig)
console.log(createSquare({color:'red', width:'10px'}));





// 只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。 readonly
interface PrintOnly {
    readonly x: number;
    readonly y: number;
}
let p1:PrintOnly = {x:123,y:321};
// p1.x = 321;          // error


let a:number[] = [123];
// a = 123              // error，只能是 array 类型的

// ReadonlyArray 确保数组创建后再也不能被修改
let ro: ReadonlyArray<number> = a;
// ro[0] = 123123       // error

// 可以用类型断言重写：
a = ro as number[];
console.log(a);





// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
// 做为变量使用的话用 const，若做为属性则使用readonly。


// 任意数量的其它属性
interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}
function squareFn(arg: SquareConfig2):{color:string,width:number} {
    return {
        color: arg.color || '#fff',
        width: arg.width || 20
    };
}
console.log(squareFn({label:123}));




// 函数类型
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
interface SearchFunc {
    (source:string,subString:string):boolean;
}
let mySearch:SearchFunc;
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
mySearch = function (s: string, su:string) {
    // 查找 subString 是否 存在 source 中
    return s.search(su) > -1;                   // 函数的返回值类型是通过其返回值推断出来的
};
console.log(mySearch('abcd','a'));





// 可索引的类型
// 描述那些能够“通过索引得到”的类型
interface StringArray {
    [index:number]: string;
}

let myArray: StringArray;
// myArray = [1,2];        // error
myArray = ['1','2'];
let myArray1:string = myArray[0];
console.log(myArray1);



// 可以将索引签名设置为只读，这样就防止了给索引赋值：
interface ReadonlyStringArray {
    readonly [index:number]:string;
}
let myArray2: ReadonlyStringArray = ['123','1'];
// myArray2[2] = 'my2';        // error
console.log(myArray2);          // 索引签名是只读的









// 类类型 -- 实现接口
// 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
// implements 实现
interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    constructor(h:number,m:number){}
    currentTime: Date;
}



// 可以在接口中描述一个方法，在类里实现它。接口描述了类的公共部分，而不是公共和私有两部分。
interface ClockInterface2 {
    currentTime:Date;
    setTime(d:Date);        // 这个是要在实例里面实现
    getTime():Date;         // 这个是要在实例里面实现
}
class Clock2 implements ClockInterface2 {
    constructor(h:number,m:number){}
    currentTime: Date;
    setTime(d:Date){
        this.currentTime = d;
    }
    getTime(){
        return this.currentTime;
    }
}
let clock = new Clock2(12,34);
clock.setTime(new Date());
console.log(clock.getTime());






// 类静态部分与实例部分的区别
// 类是具有两个类型的：静态部分的类型和实例的类型












