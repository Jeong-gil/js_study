// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);
// 스트링 리터럴즈의 좋은 점은 줄바꿈을 하거나,
// 특수 기호인 '''' 이런 것들을 넣어도 그대로 문자열로 변환해준다.
// 스트링 리터럴즈를 사용하지 않고, 줄바꿈이나 특수기호를 사용하고자 하면,
// 특수문자열을 사용하면 된다.


// 2. Numeric operators
console.log(1 + 1);  // add
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // mutiply
console.log(5 % 2);  // remainder
console.log(2 ** 3);  // exponentiation


// 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`)

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement : ${postIncrement}, counter : ${counter}`)
// -- 역시 동일


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;  // x = x + y;
x -= y;
x *= y;
x /= y;


// Comparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  // greater than or equal


// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
const value3 = true;

// || (or), finds the first truthy value
// or 연산자는 true 가 나오는 즉시 다른 boolean 값들은 검사하지 않고, 멈춘다.
// 바로 true 로 결정
// 그래서 연산이 많은 (ex. 함수) 것들을 or 연산자에 먼저 배치하는 것은 매우 좋지 못함!
console.log(`or : ${value1 || value2 || check()}`);
console.log(`or : ${value3 || value2 || check()}`);  // console.log('😒'); 출력 안됨.


// && (and), finds the first falsy value
// and 연산자는 false 가 나오는 즉시 다른 boolean 값들은 검사하지 않고, 멈춘다.
// 바로 false 로 결정
// 그래서 연산이 많은 (ex. 함수) 것들을 and 연산자에 먼저 배치하는 것은 매우 좋지 못함!
console.log(`or : ${value1 && value2 && check()}`);

// often used to compress long if-statment
// nullableObject && nullableObject.something
let nullableObject = null;
if (nullableObject != null) {
    nullableObject.something;
}

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😒');
    }
    return true;
}


// ! (not)
console.log(!value1);


// Equlity
const stringFive = '5';
const numberFive = 5;

// == loose equlity, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//  === stric equlity, no type conversion
// 그래서 웬만하면 === stric equlity 를 사용하는게 좋다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equlity by reference
const jg1 = {name: 'jg'};
const jg2 = {name: 'jg'};
const jg3 = jg1;
console.log(jg1 == jg2);
console.log(jg1 === jg2);
console.log(jg1 === jg3);


// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null ===undefined);


// 8. Conditional operator : if
// if, else if, else
const name = 'jeonggil';
if (name === 'jeonggil') {
    console.log('Wellcom, jeonggil!');
} else if (name === 'coder') {
    console.log('You are amazing coder!');
} else {
    console.log('unknown');
}


// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'jeonggil' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you, too!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is the truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);

// for loop, for (begin; conditon; setep)
// begin 을 처음에 딱 한번만 호출 하고, condition 이 맞는지 검사한 다음, 
// 블록이 다 실행이 되면, step 을 실행하게 됨.
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    console.log(`inline variable for : ${i}`);
}

// nested loops
// 이렇게 네스팅해서 작성하게 되면,
// big O 가 n 의 2승, cpu에 좋지 않음.
// 그래서 되도록이면 작성하지 않는 것이 좋음.
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`i : ${i}, j : ${j}`);
//     }
// }

// break, continue
// 루프 안에서는 break 나 continue 라는 키워드로 루프를 끝낼 수 있다.
// break 는 루프를 완전히 끝내는 것이고, 
// continue 는 현재만 스킵하고 다시 다음 스텝으로 넘어간다.

// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}
// 위 코드는 continue 연습을 위해 작성
// 밑 코드처럼 하는 것이 더 좋음.
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1-1. ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print number until
// reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
