// 1. Use strict
//added ES 5
// Use this for valina Javascript
'use strict';

// 2. Variable
// let (added in ES6)

// global한 변수들은 어플리케이션이 실행되고 끝날 때까지,
// 항상 메모리에 탑재되어 있음.
// 그래서 가능하면 최소한으로 사용하는 것이 좋다.
let globalName = 'gobal name';
{
    let name = 'jeong gil';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// js에서 변수를 선언할 수 있는 키워드는 let 하나이다.
// 예전에는 var 라는 키워드를 사용했지만, 지금은 쓰지말자.
// var는 값을 선언하기도 전에도 사용할 수 있다. (너무 유연해서 단점이 된다)
// 이것을 var hoisting 이라고 한다.
// 호이스팅은 어디에 선언했는가에 상관없이, 선언문을 항상 제일 위로 끌어올려주는 것을 말함.

// 또한 var 는 block scope가 없다. (블록을 무시한다)


// Constant (immutable data type)
// 한 번 할당하면 값이 절대 바뀌지 않음.
// 원래 변수는 값을 가르키는 포인터가 계속 바뀐다. (mutable data type)
// 하지만 constant 는 값을 가르키는 포인터가 잠겨서 포인터를 바꿀 수 없는 것이다.
// 무엇을 위해?
// 1. 보안 2. 쓰레드 안정성 3. 사람의 실수를 줄이기 위해, 등등!
// 변경되어야할 좋은 이유가 없다면 const 를 사용하는 것이 바람직하겠다.


// 4. variable types
// primitive, single itme (더이상 작은 단위로 나누어질 수 없는, 한가지의 아이템) : 
// number, string, boolean, null, undefine, symbol
// object, box container
// function, first-class function

const count = 17;  // integer
const size = 17.1;  // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);


// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'Not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigint (fairly new, don't use yet)
const bigInt = 1234567890123456789012345678901234567890n;
// js에서 숫자는 -2의 53승에서 2의 53승까지 표현 가능
// 하지만 최근에 bigInt 라는 타입이 추가되었고, 숫자 뒤에 n을 붙히면 사용 가능

console.log(`value : ${bigInt}, type : ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


// string
// js에서는 다른 언어에서 사용하는 char가 없고 전부 string type 으로 선언 가능하다
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBab = `hi ${brendan}!`;  // template literals (string)
console.log(`value : ${helloBab}, type : ${typeof helloBab}`);


// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

const canRead = true;
const test = 3 < 1;  // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);


// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);


// undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`);


// Symbol, create unique identifiers for objects
// Map 이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시다발적으로 일어나는
// 일에서 우선순위를 주고 싶을 때 사용되어짐.
// Symbol 은 동일한 string 으로 작성되어도 다른 Symbol 로 만들어짐.
// 그래서 주어진 string 에 상관없이 고유한 식별자를 만들 때 사용된다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol1);
console.log(symbol1 === symbol2);

// string 값이 똑같을 때, 동일한 Symbol 을 만들고 싶다면?
// Symbol.for() 사용하면 된다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol1);
console.log(gSymbol1 === gSymbol2);

// Symbol type 은 바로 출력을 하게 되면 에러가 발생함
// 출력하고 싶다면 .description 을 사용해서, string 으로 변환해서 출력해야 함.
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);
const jeongGil = {name : 'jeong-gil', age : 26};
// 현재 jeonGil object 는 const 로 선언되었기 때문에, 다른 object 로 변경이 불가능.
// jeonGil 이 가르키고 있는 레퍼런스(객체의 정보의 주소를 담고 있는 메모리)는 const로 선언 되었기에 잠겨 있다.
// 하지만 레퍼런스에 연결되어 있는 객체의 속성 등, 값들은 잠겨있지 않기 때문에 값 변경이 가능하다.
// jeonGil.age = 25; 가 가능하다!


// object, real- life object, data stucture
// object 는 우리가 일상에 볼 수 있는 물체(?)를 대표할 수 있는 박스 형태를 말함.


// 5. Dynamic typing : dynamically type language
// C나 Java 같은 언어는 정적 타입 언어, 변수 타입을 미리 선언
// 반면에 Javascript는 타입을 선언하지 않고, 프로그램이 동작할때(런타임),
// 할당된 값에 타입이 변경될 수 있음. (런타임에서 타입이 정해진다)
let text = 'hello';
console.log(text.charAt(0));  // h
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);
