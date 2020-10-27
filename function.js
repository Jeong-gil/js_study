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
