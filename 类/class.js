/*
* document【https://www.tslang.cn/docs/handbook/classes.html】
*
* */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return Greeter;
}());
console.log(new Greeter('class').greet());
// tips: 这个类有3个成员：一个叫做 greeting的属性，一个构造函数和一个 greet方法。
// 继承
// 在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move();
dog.move(10);
dog.move(11);
dog.bark();
// tips: 类从基类中继承了属性和方法。 这里， Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字。
// 派生类通常被称作 子类，基类通常被称作 超类。
// 复杂例子
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName; // 而且，在构造函数里访问 this的属性之前，一定要调用 super()。
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters);
    };
    return Animal2;
}());
// 使用 extends 关键字创建了 Animal2 的两个子类(派生类)： Horse和 Snake。
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        // 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        // console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        // 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        // console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(33);
// 公共，私有与受保护的修饰符
// 在TypeScript里，成员都默认为 public
// ...
// private 私有的，不能在声明它的类的外部访问
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    return Animal3;
}());
var animal3 = new Animal3('wx');
// console.log(animal3.name);      // error
// 接口继承类
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法）
/*class Img implements SelectableControl {
    state = 123;
    select(){}
}*/
var Animal4 = /** @class */ (function () {
    function Animal4(name) {
        this.name = name;
    }
    return Animal4;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
        // this.name = 123;        // error，基类私有的
    }
    return Rhino;
}(Animal4));
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
var animal = new Animal4('Goat');
var rhino = new Rhino();
var employee = new Employee('Bob');
animal = rhino;
// animal = employee;      // error
// 理解 protected
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类(子类)中仍然可以访问
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        // 子类可以访问基类的 protected(受保护) 的属性
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person));
var howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);           // error
