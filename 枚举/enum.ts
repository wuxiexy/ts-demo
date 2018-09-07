/*
* 枚举
* document【https://www.tslang.cn/docs/handbook/enums.html】
*
* 类型推论
* document【https://www.tslang.cn/docs/handbook/type-inference.html】
*
* */


// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。
// TypeScript支持数字的和基于字符串的枚举。


// 数字枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]




let x:number[]|null[] = [0, 1, null];
console.log(typeof x);


















