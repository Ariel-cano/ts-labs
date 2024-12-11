// Лабораторная работа № 3, Халитов Илья, ЦК-FR-92
//1
enum Documents{
    passport = "Паспорт",
    birth_certificate = "Свидетельство о рождении",
    seaman_passport = "Паспорт моряка",
    id_card_soldier = "Карта идентификации военнослужащего",
    foreign_passport = "Загранпаспорт"
}
interface IOwner {
    firstName: string;
    lastName: string;
    patronymic: string,
    dateOfBirth: string;
    typeDoc: Documents,
    seriesDoc: number,
    numberDoc: number,
    printProperty(): void
}
interface IVehicle {
    mark : string,
    model : string,
    yearRelease: string,
    VIN: number,
    regNumber: number,
    ownerInfo: string,
    printProperty(): void
}
class Vehicle implements IVehicle {
    private _mark : string;
    private _model : string;
    private _yearRelease : string;
    private _VIN : number;
    private _regNumber : number;
    private _ownerInfo : string;
    constructor(mark : string, model : string ,yearRelease : string,
                VIN : number, regNumber : number, ownerInfo : string){
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
        console.log('')
    }
    public get mark(): string{
        return this._mark;
    }
    public set mark(value: string){
        this._mark = value;
    }
    public get model(): string{
        return this._model;
    }
    public set model(value: string){
        this._model = value;
    }
    public get yearRelease(): string{
        return this._yearRelease;
    }
    public set yearRelease(value: string){
        this._yearRelease = value;
    }
    public get VIN():number{
        return this._VIN;
    }
    public set VIN(value : number){
        this._VIN = value;
    }
    public get regNumber():number{
        return this._regNumber;
    }
    public set regNumber(value : number){
        this._regNumber = value;
    }
    public get ownerInfo(): string{
        return this._ownerInfo;
    }
    public set ownerInfo(value: string){
        this._ownerInfo = value;
    }
}
class Owner implements IOwner {
    private _firstName : string;
    private _lastName : string;
    private _patronymic : string;
    private _dateOfBirth : string;
    private _typeDoc : Documents;
    private _seriesDoc : number;
    private _numberDoc : number;
    constructor(firstName : string, lastName : string, patronymic : string, dateOfBirth : string,
                typeDoc : Documents, seriesDoc : number, numberDoc : number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._patronymic = patronymic;
        this._dateOfBirth = dateOfBirth;
        this._typeDoc = typeDoc;
        this._seriesDoc = seriesDoc;
        this._numberDoc = numberDoc;
    }
    public printProperty(): void {
        console.log("Фамилия:", this._lastName);
        console.log("Имя:", this._firstName);
        console.log("Отчество:", this._patronymic);
        console.log("Дата рождения:", this._dateOfBirth);
        console.log("Тип документа:", this._typeDoc);
        console.log("Серия документа:", this._seriesDoc);
        console.log("Номер документа:", this._numberDoc);
        console.log('')
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get patronymic(): string {
        return this._patronymic;
    }
    public set patronymic(value: string) {
        this._patronymic = value;
    }
    public get dateOfBirth(): string {
        return this._dateOfBirth;
    }
    public set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }
    public get typeDoc(): Documents {
        return this._typeDoc;
    }
    public set typeDoc(value: Documents) {
        this._typeDoc = value;
    }
    public get seriesDoc(): number {
        return this._seriesDoc;
    }
    public set seriesDoc(value: number) {
        this._seriesDoc = value;
    }
    public get numberDoc(): number {
        return this._numberDoc;
    }
    public set numberDoc(value: number) {
        this._numberDoc = value;
    }
}
const owner: IOwner = new Owner(
    "Иван",
    "Иванов",
    "Иванович",
    "1980-01-01",
    Documents.passport,
    1234,
    567890
);
owner.printProperty()
owner.lastName = 'Симонов';
owner.printProperty()

const vehicle: IVehicle = new Vehicle(
    'Опель',
    'Астра',
    '04.09.2012',
    539589353,
    24902424242,
    'Владислав 5 лет'
);
vehicle.printProperty()
vehicle.model = 'Corsa'
vehicle.printProperty()

enum CarBodyType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    Coupe = "Купе",
    Convertible = "Кабриолет",
    Pickup = "Пикап"
}
enum CarClass {
    A = 'Класс А',
    B = 'Класс B',
    C = 'Класс C',
    D = 'Класс D',
    E = 'Класс E',
    F = 'Класс F',
}
interface ICar extends IVehicle {
    typeBody : CarBodyType,
    carClass: CarClass
}
interface IMotorbike extends IVehicle{
    typeFrame: string,
    forSport: boolean
}
class Car implements ICar {
    public mark : string;
    public model : string;
    public yearRelease : string;
    public VIN : number;
    public regNumber : number;
    public ownerInfo : string;
    public carClass : CarClass;
    public typeBody : CarBodyType;
    constructor(carClass : CarClass, typeBody : CarBodyType,
                mark : string, model : string ,yearRelease : string,
                VIN : number, regNumber : number, ownerInfo : string) {
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
        console.log('')
    }
}
class Motorbike implements IMotorbike {
    public mark : string;
    public model : string;
    public yearRelease : string;
    public VIN : number;
    public regNumber : number;
    public ownerInfo : string;
    public typeFrame : string;
    public forSport : boolean
    constructor(typeFrame : string, forSport : boolean,
                mark : string, model : string ,yearRelease : string,
                VIN : number, regNumber : number, ownerInfo : string) {
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
        console.log('')
    }
}
const car : ICar = new Car(
    CarClass.F,
    CarBodyType.Sedan,
    'Опель',
    'Астра',
    '04.09.2012',
    539589353,
    24902424242,
    'Владислав 5 лет'
)
car.carClass = CarClass.D;
car.printProperty()
const motorbike : IMotorbike = new Motorbike(
    'Монокок',
    false,
    'Опель',
    'Астра',
    '04.09.2012',
    539589353,
    24902424242,
    'Владислав 5 лет'
)
motorbike.printProperty()

//3
interface IStorageVehicle <T extends IVehicle>{
    dataReleaseStorage : Date,
    vehicles : T[],
    printVehicles() : T[],
}
class VehicleStorage<T extends IVehicle> implements IStorageVehicle<T> {
    public dataReleaseStorage: Date;
    private readonly _vehicles: T[];

    constructor() {
        this.dataReleaseStorage = new Date();
        this._vehicles = [];
    }

    public get vehicles(): T[] {
        return this._vehicles;
    }

    public addVehicle(vehicle: T): void {
        this._vehicles.push(vehicle);
    }

    public printVehicles(): T[] {
        return this._vehicles;
    }
}
const storage = new VehicleStorage();
storage.addVehicle(motorbike)
storage.addVehicle(car)
console.log(storage.printVehicles())