"use strict";
// Лабораторная работа № 2, В-2, Халитов Илья, ЦК-FR-92
//1
let array = [6.7, 9, 0.1, 98.8, -5.6, -10.8];
const minValue = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};
console.log(minValue(array));
let matrix = [
    [0, 1, 2],
    [9, 0, 7],
    [9, 7, 0],
    [0, 1, 2]
];
const countZero = (matrix) => {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                count++;
            }
        }
    }
    return count;
};
console.log(countZero(matrix));
//2
let tuple = ['wind ', 'of ', 'change'];
const concat = (tuple) => {
    let resultString = '';
    for (let i = 0; i < tuple.length; i++) {
        resultString += tuple[i];
    }
    return resultString;
};
console.log(concat(tuple));
//3
var Printers;
(function (Printers) {
    Printers["lazer"] = "\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439";
    Printers["matrix"] = "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0439";
    Printers["jet"] = "\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439";
    Printers["sublimation"] = "\u0421\u0443\u0431\u043B\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439";
})(Printers || (Printers = {}));
;
console.log(Printers.lazer);
//4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
let petInfo = (pet) => {
    const info = {
        name: pet.name,
        age: pet.age,
        speak: pet.speak()
    };
    if (pet instanceof Dog) {
        info.label = pet.label;
    }
    return info;
};
let myCat = new Cat();
let myDog = new Dog();
console.log(petInfo(myCat));
console.log(petInfo(myDog));
let lazerPrinter = {
    type: Printers.lazer,
    price: 9000,
    colored: true,
    paperFormat: 'A4',
    printSpeed: 20
};
console.log(JSON.stringify(lazerPrinter));
