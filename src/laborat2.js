var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Лабораторная работа № 2, В-2, Халитов Илья, ЦК-FR-92
//1
var array = [6.7, 9, 0.1, 98.8, -5.6, -10.8];
var minValue = function (array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};
console.log(minValue(array));
var matrix = [[0, 1, 2], [9, 0, 7], [9, 7, 0], [0, 1, 2]];
var countZero = function (matrix) {
    var count = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                count++;
            }
        }
    }
    return count;
};
console.log(countZero(matrix));
//2
var tuple = ['wind ', 'of ', 'change'];
var concat = function (tuple) {
    var resultString = '';
    for (var i = 0; i < tuple.length; i++) {
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
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
var petInfo = function (pet) {
    var info = {
        name: pet.name,
        age: pet.age,
        speak: pet.speak()
    };
    if (pet instanceof Dog) {
        info.label = pet.label;
    }
    return info;
};
var myCat = new Cat();
var myDog = new Dog();
console.log(petInfo(myCat));
console.log(petInfo(myDog));
var lazerPrinter = {
    type: Printers.lazer,
    price: 9000,
    colored: true,
    paperFormat: 'A4',
    printSpeed: 20
};
console.log(JSON.stringify(lazerPrinter));
