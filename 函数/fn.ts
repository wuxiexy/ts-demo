/*
* document【https://www.tslang.cn/docs/handbook/functions.html】
*
* */




// TypeScript能够根据返回语句自动推断出返回值类型，
// 函数类型包含两部分：参数类型和返回值类型。

let myAdd: (x: number, y: number) => number = (x: number, y: number): number => x + y;
console.log(myAdd(1,2));




// 函数的类型只是由参数类型和返回值组成的。





// 可选参数
// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。
// 在TypeScript里我们可以在参数名旁使用 ? 实现可选参数的功能。
function buildName(fn: string, ln?: string):string {            // ln 为可选参数，可不传
    return ln?fn+"-"+ln:fn;
}
console.log(buildName('w'));
console.log(buildName('w','x'));

// ************ 可选参数必须跟在必须参数后面 ************





// 默认参数
// 在TypeScript里，可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。
function buildName2(fn: string = 'fnn', ln: string = 'Smith') {
    return fn+"-"+ln;
}
console.log(buildName2());                           // 有默认参数，就可以  可传可不传
console.log(buildName2(undefined,'xx'));    // 带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
console.log(buildName2('w','x'));
// tips: 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。






// 剩余参数
// 可以把所有参数收集到一个变量里
function buildName3(fn: string, ...restName: string[]) {
    return fn+' '+restName.join(' ');
}
let bn3 = buildName3('a','b','c','d');
console.log(bn3);
// tips: 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。

let bN3:(fn:string,...rest:string[]) => string = buildName3;




// this和箭头函数
// this的值在函数被调用的时候才会指定。
// ************ 箭头函数能保存函数创建时的 this值，而不是调用时的值 ************
let deck = {
    suits: ['a', 'b', 'c', 'd'],
    createCard: function () {
        return ()=>{
            let c = Math.floor(Math.random()*52)
                , s = Math.floor(c/13)
            ;
            return {
                suit: this.suits[s]
                , card: c%13
            }
        }
    }
};
let cp = deck.createCard()();
console.log(cp);







interface Card {
    suit: string;
    card: string;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this:Deck): ()=>Card;
}
/*
let deck2:Deck = {
    suits: ['a', 'b', 'c', 'd']
}
*/




















