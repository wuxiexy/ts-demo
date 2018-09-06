"use strict";
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
/*
* document【https://www.tslang.cn/docs/handbook/classes.html】
*
* */
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
// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
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
        // 所以这里访问 this.name 正常
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person));
var howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);           // error
// readonly修饰符
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.numberLegs = 8;
        this.name = name;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";         // 错误! name 是只读的.
console.log(dad.name);
console.log(dad.numberLegs);
// 参数属性
// 参数属性可以方便地让我们在一个地方定义并初始化一个成员。
var Animal5 = /** @class */ (function () {
    function Animal5(name) {
        this.name = name;
    }
    Animal5.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + "m.");
    };
    return Animal5;
}());
var a5 = new Animal5('w');
console.log(a5);
a5.move(123);
// 变量的数据属性和访问器属性
// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        // 只带有 get不带有 set的存取器自动被推断为 readonly。
        // 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
        set: function (name) {
            this._fullName = name;
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var e3 = new Employee3();
e3.fullName = '哈哈哈';
console.log(e3.fullName);
// 静态属性
// 可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上
// 使用 Grid.来访问静态属性
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistance = function (point) {
        var xDist = (point.x - Grid.origin.x); // 使用类名来访问静态属性
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistance({ x: 10, y: 10 }));
console.log(grid2.calculateDistance({ x: 20, y: 20 }));
// 抽象类
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
var Animal6 = /** @class */ (function () {
    function Animal6() {
    }
    Animal6.prototype.move = function () {
        console.log('roaming the each...');
    };
    return Animal6;
}());
// let a6 = new Animal6();     // 不能被直接实例化
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。
// 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract 关键字并且可以包含访问修饰符。
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department;
department = new AccountingDepartment('The Accounting Department meets each Monday at 10am.');
department.printName();
department.printMeeting();
// department.generateReports();   // 错误: 方法在声明的抽象类中不存在
// 当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。
// 把类当做接口使用
// 如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point2 = { x: 1, y: 2, z: 3 };
console.log(point2);
