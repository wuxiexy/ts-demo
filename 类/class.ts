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
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);           // error























