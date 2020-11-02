'use strict';
// Object-oriendted programming
// class: template
// Object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const jeonggil = new Person('jg', 26);
console.log(jeonggil.name);
console.log(jeonggil.age);
jeonggil.speak();


// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative'); 
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'Jobs', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!  도입된지 얼마 안돼서 아직까지 잘 쓰이진 않는다
// (많은 브라우저들이 아직은 지원하지 않는다)
class Experiment {
    publicFiled = 2;
    #privateFiled = 0;
}
const experiment = new Experiment();
console.log(experiment.publicFiled);
console.log(experiment.privateFiled);



// 4. Static properties and methods
// Too soon!  도입된지 얼마 안돼서 아직까지 잘 쓰이진 않는다
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
