"use strict";
/*
* document【https://www.tslang.cn/docs/handbook/classes.html】
*
* */

class Greeter {
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    greet():string{
        return "hello, "+this.greeting;
    }
}
console.log(new Greeter('class').greet());
// tips: 这个类有3个成员：一个叫做 greeting的属性，一个构造函数和一个 greet方法。






// 继承
// 在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
class Animal {      // 基类，基类通常被称作 超类。
    move(distanceInMeters:number = 0){  // 没有传参默认是 0
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark(){
        console.log('Woof! Woof!');
    }
}
const dog = new Dog();
dog.bark();
dog.move();
dog.move(10);
dog.move(11);
dog.bark();
// tips: 类从基类中继承了属性和方法。 这里， Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字。
// 派生类通常被称作 子类，基类通常被称作 超类。






// 复杂例子
class Animal2 {
    name:string;
    constructor(theName:string){
        this.name = theName;            // 而且，在构造函数里访问 this的属性之前，一定要调用 super()。
    }
    move(distanceInMeters:number = 0){
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

// 使用 extends 关键字创建了 Animal2 的两个子类(派生类)： Horse和 Snake。
class Snake extends Animal2 {
    constructor(name:string){
        // 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
        super(name);
    }
    move(distanceInMeters = 5){
        // console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal2 {
    constructor(name:string){
        // 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
        super(name);
    }
    move(distanceInMeters = 45){
        // console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom:Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(33);






// 公共，私有与受保护的修饰符

// 在TypeScript里，成员都默认为 public
// ...

// private 私有的，不能在声明它的类的外部访问
class Animal3 {
    private name:string;
    constructor(name:string){
        this.name = name;
    }
}
let animal3 = new Animal3('wx');
// console.log(animal3.name);      // error









// 接口继承类
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select():void;
}
class Button extends Control implements SelectableControl {
    select(){}
}
class TextBox extends Control {
    select(){}
}

// Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法）
/*class Img implements SelectableControl {
    state = 123;
    select(){}
}*/


class Animal4 {
    private name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Rhino extends Animal4 {
    constructor(){
        super("Rhino");
        // this.name = 123;        // error，基类私有的
    }
}

class Employee {
    private name:string;
    constructor(name:string){
        this.name = name;
    }
}
let animal = new Animal4('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

animal = rhino;
// animal = employee;      // error





// 理解 protected
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类(子类)中仍然可以访问
// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
class Person {
    protected name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Employee2 extends Person {
    private department:string;
    constructor(name:string, department:string){
        super(name);        // 它会执行基类的构造函数，初始化 name
        this.department = department;
    }
    public getElevatorPitch(){
        // 子类可以访问基类的 protected(受保护) 的属性
        // 所以这里访问 this.name 正常
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);           // error






// readonly修饰符
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
class Octopus {
    readonly name: string;
    readonly numberLegs:number = 8;
    constructor(name:string){
        this.name = name;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";         // 错误! name 是只读的.
console.log(dad.name);
console.log(dad.numberLegs);





// 参数属性
// 参数属性可以方便地让我们在一个地方定义并初始化一个成员。
class Animal5 {
    constructor(private name:string){}
    move(distance:number){
        console.log(`${this.name} moved ${distance}m.`);
    }
}
let a5 = new Animal5('w');
console.log(a5);
a5.move(123);




// 变量的数据属性和访问器属性
// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
class Employee3 {
    private _fullName: string;
    get fullName():string {
        return this._fullName;
    }
    // 只带有 get不带有 set的存取器自动被推断为 readonly。
    // 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
    set fullName(name:string) {
        this._fullName = name;
    }
}
let e3 = new Employee3();
e3.fullName = '哈哈哈';
console.log(e3.fullName);







// 静态属性
// 可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上
// 使用 Grid.来访问静态属性
class Grid {
    static origin = {x:0,y:0};
    constructor(public scale:number){}
    calculateDistance(point:{x:number,y:number}){
        let xDist = (point.x - Grid.origin.x);          // 使用类名来访问静态属性
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist*xDist + yDist*yDist) / this.scale;
    }
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistance({x:10,y:10}));
console.log(grid2.calculateDistance({x:20,y:20}));






// 抽象类
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
abstract class Animal6 {
    abstract makeSound:void;
    move():void {
        console.log('roaming the each...');
    }
}
// let a6 = new Animal6();     // 不能被直接实例化


// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。
// 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract 关键字并且可以包含访问修饰符。
abstract class Department {
    constructor(public name:string){}
    printName():void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting():void;       // 带有abstract的方法 必须在派生类(子类)中实现
}
class AccountingDepartment extends Department {
    constructor(public name:string){
        super(name);
    }
    printMeeting():void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports():void {    // 这个要删掉
        console.log('Generating accounting reports...');
    }
}
let department:Department;
department = new AccountingDepartment('The Accounting Department meets each Monday at 10am.');
department.printName();
department.printMeeting();
// department.generateReports();   // 错误: 方法在声明的抽象类中不存在





// 当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。




// 把类当做接口使用
// 如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，
class Point {
    x:number;
    y:number;
}
interface Point2 extends Point{
    z:number;
}
let point2:Point2 = {x:1,y:2,z:3};
console.log(point2);




