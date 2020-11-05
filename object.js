'use strict';
// Objects
// One of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };


// 1. Literals and Properties
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print (person) {
    console.log(person.name);
    console.log(person.age);
}

const jg = { name: 'jeonggil', age: 26 };
print(jg);

// with JavaScript magic (dynamically typed language)
// can add properties later

jg.call = true;
console.log(jg.call);

// can delete properties later
delete jg.call;
console.log(jg.call);


// 2. Computed properties
// key should be always string
console.log(jg.name);
console.log(jg['name']);  // Computed properties, 실시간으로 원하는 키의 값을 받아오고 싶을 경우에 주로 사용한다
jg['call'] = true;
console.log(jg.call);

function printValue(obj, key) {
    console.log(obj.key);
}
printValue(jg, 'name');  // undefined 가 출력된다.

function printValue2(obj, key) {
    console.log(obj[key]);
}
// 이렇게 동적으로 키와 관련된 값들을 받아올 수 있다
printValue2(jg, 'name');
printValue2(jg, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ell', 20);
console.log(person4);

function makePerson(name, age) {
    return {
        name,  // key와 value가 동일하다면 이렇게 생략 가능 (생략전 -> name: name;)
        age
    };
}


// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
const person5 = new Person('lliy', 23);
console.log(person5);


// 5. in operator: property existence check (key in obj)
console.log('name' in Person);
console.log('name' in jg);
console.log('random' in jg);
console.log(jg.ramdom);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in jg) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'wow', age: 24 };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

// 위 코드와 동일한 결과, 다른 코드
const user4_1 = Object.assign({}, user);
console.log(user4_1);

// another example
const fruit1 = { color: 'red', price: 1 };
const fruit2 = { color: 'blue', size: 'big' };
// 뒤에 작성된 파라미터가 동일한 값을 덮어 쓴다.
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
