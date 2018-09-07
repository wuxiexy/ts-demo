/*
* document【https://www.tslang.cn/docs/handbook/advanced-types.html】
* 高级类型
*
* */
// 交叉类型（Intersection Types）。交叉类型是将多个类型合并为一个类型。
function extend(f, s) {
    // 相当于 es5 的继承/拷贝
    var res = {}, id;
    for (id in f) {
        res[id] = f[id];
    }
    for (id in s) {
        if (!res.hasOwnProperty(id)) {
            res[id] = s[id];
        }
    }
    return res;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log('ConsoleLogger...');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('Jim'), new ConsoleLogger()), n = jim.name;
console.log(n);
jim.log();
// 联合类型（Union Types） 联合类型与交叉类型很有关联，但是使用上却完全不同。
// 偶尔你会遇到这种情况，一个代码库希望传入 number或 string类型的参数。
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
