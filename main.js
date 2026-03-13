console.log("Hello, JavaScript");

let age = 20;
let name = "Denis";
let isStudent = true;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Is student: ", isStudent);


//изменение типа переменной
let value = 10;
console.log(value);
value = "Теперь это строка";
console.log(value);
value = true;
console.log(value);


//примитивные типы
let userName = "Алексей";
console.log(`Привет, ${userName}!`);
//дробное число
let price = 99.99;
//отрицательное число
let temperature = -15;
//infinity
let infinity = 1 / 0;
//NaN (Not a Number)
let notANumber = 0 / 0;
//0.30000000000000004 (особенность JS)
console.log(0.1 + 0.2);


//BigInt (большие целые числа)
let bigNumber = 9007199254740991n;
let huge = BigInt("123456789012345678901234567890");
//Boolean (логический тип)
let isAlive = true;
let isWorking = false;
let isAdult = age >= 18;
//Undefined (не определено)
let x;
let y = undefined;
//Null
let userData = null;
//Symbol
let id = Symbol("id");
//Object
let person = {
    name: "Станислав",
    age: 30,
    isStudent: false,
    sayHello: function () {
        console.log("Привет!");
    },
};
console.log(person.name);
//Array
let fruits = ["apple","banan","orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];
//func
function sum(a, b) {
    return a + b;
}
let multiply = function (x, y) {
    return x * y;
};
console.log(sum(5, 3));
//Date
let now = new Date();
let birthday = new Date("1999-01-01");
//Арифметические операции
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
//Особенность JS
console.log(10 + "5");
console.log("10" - 5);


//const
const numbersArray = [1, 2, 3];
numbersArray[0] = 10;
console.log(numbersArray);
//numbersArray = [5, 6 ,7];
//objects
const persons = { name: "Denis", age: 18 };
persons.age = 20;
persons.city = "Volgograd";
console.log(persons);
person = { name: "Stas" };


//проверка типов
console.log(typeof "text");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let numberX = null;
console.log(numberX === null);


//практическое задание
let newPrice = 21;
console.log(newPrice)
console.log(typeof  newPrice);
newPrice = "Теперь это строка";
console.log(newPrice)
console.log(typeof  newPrice);