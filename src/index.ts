import { IsPlayer } from './interfaces/IsPlayer';
import { Player } from "./classes/Player.js";

const greeting: string = 'Hello, TypeScript!';
console.log(greeting);


// Interfaces

interface RectOptions {
    width: number;
    height: number;
}

function drawRect(options: RectOptions) {
    let width = options.width;
    let height = options.height;
    console.log(options);
    console.log(width * height);
}

let threeDims = { width: 30, height: 15, zAxis: 5 }
drawRect(threeDims)



// module classes 

const azam = new Player("Babar Azam", 44, 'Pakistan');
let musi: IsPlayer;
musi= new Player("Musfiqur Rahim", 44, 'Bangladesh');

const players: IsPlayer[] = [];

players.push(azam)
players.push(musi)

// players[0].play();





// // function signature

// let myFunc: () => void;

// let add: (x: number, y: number) => number;
// add = (a: number, b: number) => {
//     return a + b
// }


// let calc: (x: number, y: number, z: string) => number;

// calc = (a: number, b: number, c: string) => {
//     if (c === 'add') return a + b
//     else if (c === 'sub') return a - b
//     else return 0;
// }

// console.log(calc(15, 5, 'sub'));



// // type Aliases

// type stringOrNumber =  number | string;
// type userType =  { name: string, age: number };

// const userDetails = (
//     id: stringOrNumber,
//     user: userType
// ) => {
//     console.log(`user id= ${id}, name= ${user.name} and age= ${user.age}`);
// }
// userDetails(121,{name:'siam',age:25})

// const sayHello=(user: userType)=>{
//     console.log(`Hello ${user.age>50?'sir':'mr'}.${user.name}`);
// }

// sayHello({name:'Siam',age:25})
// sayHello({name:'Chu',age:65})




















// // function with types
// let myFun: Function;
// myFun=(a:string,b?:string, c:string='default man')=>{
//     console.log(`hello ${a}, ${b} and ${c}`);
// }
// // b? mean its optional where c optional
// myFun('p1','j7')

// let sum=(a:number,b:number=10,):number=>{
//     return(a+b);
// }
// console.log(sum(20,40));


// // dynamic type or any
// // this is not recommended approach , act as vanilla js

// let a: any; //same as let a;
// a =15;
// a= 'this is string '
// console.log(a);
// // arr
// let b: any[]=[];
// b.push("Bangladesh")
// b.push(24)
// console.log(b);

// // object
// let c:{
//     name:any,
//     age:any
// }
// c={
//     name: "Siam",
//     age:24
// }
// console.log(c);



// // Explicit typeof variable
// let age:number
// age=24
// console.log(age);

// //  with union
// let age2:(number|string)
// age2=24
// age2 ='siam'
// console.log(age2);

//  // Explicit typeof array
// let x:string[]=[];
// x.push('siam')
// x.push('siam2')
// console.log(x);

// // with union
// let y:(string| number)[]=[];
// y.push('siam')
// y.push(24)
// console.log(y);


// // object

// let c: {
//     name: string,
//     age: number
// };
// c = {
//     name: '$toma',
//     age: 27
// }
// console.log(c);

// let b: object;
// b = [1, 2, 3, 4, 5, 6] //array is a type of object in js
// console.log(b);







// // object

// let person = {
//     name: "Siam",
//     age:25,
//     premium:true
// }
// person.age=26
// console.log(person);


// // array

// let fruit =['apple',5,'banana',false]
// fruit.push(true)
// console.log(fruit);


// //function

// function multiply(a:number,b:number){
//     return a+b;
// }
// console.log(multiply(4,5));
