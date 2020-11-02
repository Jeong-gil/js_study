// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name (prams1, prams2) { body... return; }
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');


// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const jg = { name : 'jg' };
changeName(jg);
console.log(jg);


//  3. Default parameters (added in ES6)
// 이렇게 작성하면, 전달하지 않은 파라미터인 from은
// undefined 로 출력 된다.
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 예전에는 이렇게 코드를 작성했다.
function showMessage2(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage2('Hello!');

// 지금은 이렇게도 작성이 가능하다.
// 원하는 default 값을 지정할 수 있다.
// 사용자가 파라미터 값을 전달하지 않을 경우, default 값으로 대체된다.
function showMessage3(message, from = 'unknown..') {
    console.log(`${message} by ${from}`);
}
showMessage3('Hey');


// Rest Parameters (added in ES6)
// ... (점이 세개가 작성되면 Rest Parameters 라고 부름)
// 배열 형태로 전달되게 된다.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 간단한 for 문법
    for (const arg of args) {
        console.log(arg);
    }

    // 더 간단한 문법 forEach문
    args.forEach( (arg) => console.log(arg) );
}
printAll('Dream', 'coding', 'jeonggil');


// 5. Local scope
// 밖에서는 안이 보이지 않고, 
// ***** 안에서만 밖을 볼 수 있다. *****
let globalMessage = 'global';  // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);  // local variabel
    console.log(globalMessage);
    function printAnoter(message) {  // 안에서는 밖을 볼 수 있다. (가능)
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // 밖에서는 안을 볼 수 없다. (불가능. 에러 발생)
}
printMessage();
// console.log(massage);  // 지역변수라 에러발생
// 이렇게 중첩된 함수에서 자식의 함수가 부모 함수에 정의된 변수들에 
// 접근이 가능한 것들이 클로저(?)이다. 이 부분은 추후에 다룰 예정.


// 6. Return a value
// return 타입이 없는 함수도 사실은 return undefined; 이 생략되어 있음.
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum(1, 2) : ${sum(1,2)}`);


// 7. Early return, Early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
// 조건이 맞지 않을 경우, 빨리 리턴을 해서 함수를 종료하고, 
// 그 다음에 조건이 맞을 때, 필요한 로직들을 작성하는 것이 더 좋다.
function upgradeUser2(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// first-class function
// functions are treated like any other variable
// can be assignde as a value to variabel
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the excution reaches it.
const print = function () {  // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};
const simplePrint2 = () => console.log('simplePrint2!');

const add = function (a, b) {
    return a + b;
};
const add2 = (a, b) => a + b;

// 한 줄인 경우, 블록 없이 작성이 가능하다.
// 한 줄 이상인 경우 블록을 넣어서 표현이 가능하지만, return 키워드를 생략할 수 없다.
const simpleMutiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// JS에서 함수를 작성함과 동시에 바로 호출하고 싶을 때, 이렇게 가능하다.
(function hello() {
    console.log('IIFE');
})();


// Fun Quiz
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 1, 2));
