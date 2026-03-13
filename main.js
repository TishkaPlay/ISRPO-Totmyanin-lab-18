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


//Явное преобразование типов:
//В строку
let num = 42;
let str = String(num);
let str2 = num.toString();
let str3 = "" + num;
//В число
let strNum = "123";
let int = Number(strNum);
let int2 = parseInt("42.5");
let float = parseFloat("3.14");
let int3 = +"99";
//В булево значение
let bool1 = Boolean(1);
let bool2 = !!1;
let bool3 = Boolean(0);
let bool4 = Boolean("");


//Неявное преобразование (coercion):
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log(true + 1);
console.log(false + 1);
console.log(null + 1);
console.log(undefined + 1);


//Строгое и нестрогое сравнение
console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

let obj1 = { name: "John" }
let obj2 = { name: "John" }

console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = obj1;
console.log(obj1 === obj3);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);


//11.4 Практическое задание
let a2 = 10;
let b2 = 5;

console.log(a2 + b2);
console.log(a2 - b2);
console.log(a2 * b2);
console.log(a2 / b2);


//Оператор if / else
let urAge = 18;

if (urAge >= 18) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}


//12.3. Практическое задание
let temp = 20;

if (temp >= 20) {
    console.log("Тепло");
} else if (temp > 0 && temp < 20) {
    console.log("Прохладно");
} else {
    console.log("Холодно");
}


//12.5. Практическое задание
let isLoggedIn = true;
let isAdmin = true;

if (isAdmin === true && isLoggedIn === true) {
    console.log("Полный доступ");
} else if (isAdmin === false && isLoggedIn === true) {
    console.log("Ограниченный доступ");
} else {
    console.log("Доступ запрещён");
}


//12.6. Практическое задание
let a3 = 10;
let b3 = "10";

if (ms1 = a3 == b3) {
    console.log(ms1);
} else if (ms2 = a3 === b3) {
    console.log(ms2);
} else if (ms3 = b3 == a3) {
    console.log(ms3);
} else if (ms4 = b3 === a3) {
    console.log(ms4);
}


//Конструкция switch / case
let day = 3;
switch (day) {
    case 1: console.log("Понедельник"); break;
    case 2: console.log("Вторник"); break;
    case 3: console.log("Среда"); break;
    default: console.log("Неизвестный день");
}


//12.9. Практическое задание
let monthNumber = 10;
switch (monthNumber) {
    case 1: console.log("Январь"); break;
    case 2: console.log("Февраль"); break;
    case 3: console.log("Март"); break;
    case 4: console.log("Апрель"); break;
    case 5: console.log("Май"); break;
    case 6: console.log("Июнь"); break;
    case 7: console.log("Июль"); break;
    case 8: console.log("Август"); break;
    case 9: console.log("Сентябрь"); break;
    case 10: console.log("Октябрь"); break;
    case 11: console.log("Ноябрь"); break;
    case 12: console.log("Декабрь"); break;
    default: console.log("Неизвестный месяц");
}