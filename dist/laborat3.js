"use strict";
// Лабораторная работа № 3, Халитов Илья, ЦК-FR-92
//1
var Documents;
(function (Documents) {
    Documents["passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    Documents["birth_certificate"] = "\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438";
    Documents["seaman_passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442 \u043C\u043E\u0440\u044F\u043A\u0430";
    Documents["id_card_soldier"] = "\u041A\u0430\u0440\u0442\u0430 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0432\u043E\u0435\u043D\u043D\u043E\u0441\u043B\u0443\u0436\u0430\u0449\u0435\u0433\u043E";
    Documents["foreign_passport"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
})(Documents || (Documents = {}));
class Vehicle {
    constructor(mark, model, yearRelease, VIN, regNumber, ownerInfo) {
        this._mark = mark;
        this._model = model;
        this._yearRelease = yearRelease;
        this._VIN = VIN;
        this._regNumber = regNumber;
        this._ownerInfo = ownerInfo;
    }
    printProperty() {
        console.log("Марка:", this._mark);
        console.log("Модель:", this._model);
        console.log("Дата выпуска:", this._yearRelease);
        console.log("VIN номер:", this._VIN);
        console.log("Номер Регистрации:", this._regNumber);
        console.log('');
    }
    get mark() {
        return this._mark;
    }
    set mark(value) {
        this._mark = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get yearRelease() {
        return this._yearRelease;
    }
    set yearRelease(value) {
        this._yearRelease = value;
    }
    get VIN() {
        return this._VIN;
    }
    set VIN(value) {
        this._VIN = value;
    }
    get regNumber() {
        return this._regNumber;
    }
    set regNumber(value) {
        this._regNumber = value;
    }
    get ownerInfo() {
        return this._ownerInfo;
    }
    set ownerInfo(value) {
        this._ownerInfo = value;
    }
}
class Owner {
    constructor(firstName, lastName, patronymic, dateOfBirth, typeDoc, seriesDoc, numberDoc) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._dateOfBirth = dateOfBirth;
        this._typeDoc = typeDoc;
        this._seriesDoc = seriesDoc;
        this._numberDoc = numberDoc;
    }
    printProperty() {
        console.log("Фамилия:", this._lastName);
        console.log("Имя:", this._firstName);
        console.log("Отчество:", this._patronymic);
        console.log("Дата рождения:", this._dateOfBirth);
        console.log("Тип документа:", this._typeDoc);
        console.log("Серия документа:", this._seriesDoc);
        console.log("Номер документа:", this._numberDoc);
        console.log('');
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get patronymic() {
        return this._patronymic;
    }
    set patronymic(value) {
        this._patronymic = value;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    get typeDoc() {
        return this._typeDoc;
    }
    set typeDoc(value) {
        this._typeDoc = value;
    }
    get seriesDoc() {
        return this._seriesDoc;
    }
    set seriesDoc(value) {
        this._seriesDoc = value;
    }
    get numberDoc() {
        return this._numberDoc;
    }
    set numberDoc(value) {
        this._numberDoc = value;
    }
}
const owner = new Owner("Иван", "Иванов", "Иванович", "1980-01-01", Documents.passport, 1234, 567890);
owner.printProperty();
owner.lastName = 'Симонов';
owner.printProperty();
const vehicle = new Vehicle('Опель', 'Астра', '04.09.2012', 539589353, 24902424242, 'Владислав 5 лет');
vehicle.printProperty();
vehicle.model = 'Corsa';
vehicle.printProperty();
var CarBodyType;
(function (CarBodyType) {
    CarBodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    CarBodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    CarBodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    CarBodyType["Convertible"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
    CarBodyType["Pickup"] = "\u041F\u0438\u043A\u0430\u043F";
})(CarBodyType || (CarBodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["A"] = "\u041A\u043B\u0430\u0441\u0441 \u0410";
    CarClass["B"] = "\u041A\u043B\u0430\u0441\u0441 B";
    CarClass["C"] = "\u041A\u043B\u0430\u0441\u0441 C";
    CarClass["D"] = "\u041A\u043B\u0430\u0441\u0441 D";
    CarClass["E"] = "\u041A\u043B\u0430\u0441\u0441 E";
    CarClass["F"] = "\u041A\u043B\u0430\u0441\u0441 F";
})(CarClass || (CarClass = {}));
class Car {
    constructor(carClass, typeBody, mark, model, yearRelease, VIN, regNumber, ownerInfo) {
        this.carClass = carClass;
        this.typeBody = typeBody;
        this.mark = mark;
        this.model = model;
        this.yearRelease = yearRelease;
        this.VIN = VIN;
        this.regNumber = regNumber;
        this.ownerInfo = ownerInfo;
    }
    printProperty() {
        console.log("Марка:", this.mark);
        console.log("Модель:", this.model);
        console.log("Дата выпуска:", this.yearRelease);
        console.log("VIN номер:", this.VIN);
        console.log("Номер Регистрации:", this.regNumber);
        console.log('Тип кузова:', this.typeBody);
        console.log('Класс авто:', this.carClass);
        console.log('');
    }
}
class Motorbike {
    constructor(typeFrame, forSport, mark, model, yearRelease, VIN, regNumber, ownerInfo) {
        this.typeFrame = typeFrame;
        this.forSport = forSport;
        this.mark = mark;
        this.model = model;
        this.yearRelease = yearRelease;
        this.VIN = VIN;
        this.regNumber = regNumber;
        this.ownerInfo = ownerInfo;
    }
    printProperty() {
        console.log("Марка:", this.mark);
        console.log("Модель:", this.model);
        console.log("Дата выпуска:", this.yearRelease);
        console.log("VIN номер:", this.VIN);
        console.log("Номер Регистрации:", this.regNumber);
        console.log('Спортивный:', this.forSport);
        console.log('Тип рамы:', this.typeFrame);
        console.log('');
    }
}
const car = new Car(CarClass.F, CarBodyType.Sedan, 'Опель', 'Астра', '04.09.2012', 539589353, 24902424242, 'Владислав 5 лет');
car.carClass = CarClass.D;
car.printProperty();
const motorbike = new Motorbike('Монокок', false, 'Опель', 'Астра', '04.09.2012', 539589353, 24902424242, 'Владислав 5 лет');
motorbike.printProperty();
class VehicleStorage {
    constructor() {
        this.dataReleaseStorage = new Date();
        this._vehicles = [];
    }
    get vehicles() {
        return this._vehicles;
    }
    addVehicle(vehicle) {
        this._vehicles.push(vehicle);
    }
    printVehicles() {
        return this._vehicles;
    }
}
const storage = new VehicleStorage();
storage.addVehicle(motorbike);
storage.addVehicle(car);
console.log(storage.printVehicles());
