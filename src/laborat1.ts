// Лабораторная работа № 1, В-2, Халитов Илья, ЦК-FR-92
//2
const concatenation = (first: string, second: string, third: string): string => first + second + third;
let first: string = 'ты ничего';
let second: string = ' не знаешь,';
let third: string = ' Джон Сноу';
console.log(concatenation(first, second, third));

//3
const e: number = 2.7;
let userPassword: string = '0123456789';
let trueOrFalse: boolean = true;
let random : any = 0;
let obj : object = {age: 19, name: 'Ilya'}

//4
interface Entity {
    id: number;
}
interface ToJsonStringify extends
    Entity {
    e1?: string;
    e2: string;
}
const data: ToJsonStringify = {
    id: 2,
    e2: "Поле 2"
}
let json = JSON.stringify(data);
console.log(json)