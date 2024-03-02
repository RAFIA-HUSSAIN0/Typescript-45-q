/*
Pizzas: Think of at least three kinds of your favorite pizza. store these pizza names in an array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/

//define the array of favorite pizza
let favorite_pizzas:string[] =["pepperoni","margherita", "BBQ Chicken"];

console.log("my favorite pizza are:");
for (let i=0; i < favorite_pizzas.length;i++){
    console.log(favorite_pizzas[i]);
}
console.log("\ni like these pizzas:");
for (let i=0; i < favorite_pizzas.length;i++){
    console.log(`i like ${favorite_pizzas[i]} pizza.`);
}
console.log(`\ni really love pizza! \nit is delicious.`)