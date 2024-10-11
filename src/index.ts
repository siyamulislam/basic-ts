const greeting: string = 'Hello, TypeScript!';
console.log(greeting);




// type Aliases 


const userDetails = (
    id: number | string,
    user: { name: string, age: number }
) => {
    console.log(`user id= ${id}, name= ${user.name}  and age= ${user.age}`);
}
userDetails(121,{name:'siam',age:25})

const sayHello=(user: { name: string, age: number })=>{
    console.log(`Hello ${user.age>50?'sir':'mr'}.${user.name}`);
}

sayHello({name:'Siam',age:25})
sayHello({name:'Chu',age:65})




















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
