// Лабораторная работа № 2, В-2, Халитов Илья, ЦК-FR-92
//1
let array : Array<number> = [6.7, 9, 0.1, 98.8, -5.6, -10.8]
const minValue = (array: number[]): number  =>{
    let min: number = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;
}
console.log(minValue(array))


let matrix: number[][] = [
    [0,1,2],
    [9,0,7],
    [9,7,0],
    [0,1,2]];
const countZero = (matrix: number[][]) : number => {
    let count: number = 0;
    for (let i = 0; i < matrix.length; i++){
        for ( let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === 0){
                count++;
            }
        }
    }
    return count;
}
console.log(countZero(matrix))

//2
let tuple : [string, string, string] = ['wind ', 'of ', 'change'];
const concat = (tuple : string[]): string =>{
    let resultString = '';
    for (let i = 0; i < tuple.length; i++){
        resultString+= tuple[i];
    }
    return resultString;
}
console.log(concat(tuple));

//3
enum Printers{
    lazer = 'Лазерный',
    matrix = 'Матричный',
    jet = 'Струйный',
    sublimation =  'Сублимационный'
};
console.log(Printers.lazer)


//4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}

let petInfo = <DogOrCat extends Pet>(pet: DogOrCat): object =>{
    const info: any = {
        name: pet.name,
        age: pet.age,
        speak: pet.speak()
    };

    if (pet instanceof Dog) {
        info.label = pet.label;
    }

    return info;
}
let myCat = new Cat();
let myDog = new Dog();
console.log(petInfo(myCat));
console.log(petInfo(myDog));

//5
type Printer = {
    type : Printers,
    price : number,
    colored : boolean,
    paperFormat : string
    printSpeed: number
}

let lazerPrinter: Printer = {
    type : Printers.lazer,
    price : 9000,
    colored : true,
    paperFormat : 'A4',
    printSpeed : 20
}
console.log(JSON.stringify(lazerPrinter));