const greeting: string = 'Hello, TypeScript!';
console.log(greeting);


// Explicit typeof variable 
let age:number 
age=24
console.log(age);

//  with union
let age2:(number|string)
age2=24
age2 ='siam'
console.log(age2);

 // Explicit typeof array 
let x:string[]=[];
x.push('siam')
x.push('siam2')
console.log(x);

// with union
let y:(string| number)[]=[];
y.push('siam')
y.push(24)
console.log(y);


// object

let c: {
    name: string,
    age: number
};
c = {
    name: '$toma',
    age: 27
}
console.log(c);

let b: object;
b = [1, 2, 3, 4, 5, 6] //array is a type of object in js
console.log(b);







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
