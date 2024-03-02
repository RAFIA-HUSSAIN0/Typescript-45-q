//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface person {
    name : string,
    age : number,
    student :boolean, 
    nationality : string,
}
let person :person = {
    name : "Rafia",
    age : 42,
    student :true,
    nationality : "pakistan",
}


console.log(person);