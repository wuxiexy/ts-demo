/*
* document【https://www.tslang.cn/docs/handbook/advanced-types.html】
* 高级类型
*
* */


// 交叉类型（Intersection Types）。交叉类型是将多个类型合并为一个类型。
function extend<T, U>(f: T, s: U): T & U {
    // 相当于 es5 的继承/拷贝
    let res = <T & U>{}
        , id
    ;
    for (id in f) {
        (<any>res)[id] = (<any>f)[id];
    }
    for (id in s) {
        if (!res.hasOwnProperty(id)) {
            (<any>res)[id] = (<any>s)[id];
        }
    }
    return res;
}

class Person {
    constructor(public name: string) {
    }
}

interface Loggable {
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {
        console.log('ConsoleLogger...');
    }
}

let jim = extend(new Person('Jim'), new ConsoleLogger())
    , n = jim.name
;
console.log(n);
jim.log();


// 联合类型（Union Types） 联合类型与交叉类型很有关联，但是使用上却完全不同。
// 偶尔你会遇到这种情况，一个代码库希望传入 number或 string类型的参数。
function padLeft(value: string, padding: any) {
    if(typeof padding==='number'){
        return Array(padding+1).join(' ')+value;
    }
    if(typeof padding === 'string'){
        return padding+value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

















