//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//equality and inequality test 1
console.log("equality test with string:" , "Apple" === "Apple");
//equality and inequality test 2
console.log("inequality test with string:" , ("Apple"as  string) != "orange");

//• Tests using the lower case function
console.log("lower case function test:", "HELLO".toLowerCase() === "hello");

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("equality test with number:" , 26 === 26);
//• Numerical tests involving inequality, 
console.log("inequality test with number:" , 26 as number != 35);

//greater than test
console.log("greater than and equal to:", 10 > 4);
//less than test
console.log("less than and equal to:" , 2 < 5);

//greater than or equal to test
console.log("greater than and equal to:", 35 >= 35);
//less than or equal to test
console.log("less than and equal to:" , 1 <= 6);

//• Tests using "and" and "or" operators
console.log("and operator test:", 5===5 && 10>5);
console.log("or operator test:", 5===5 || 10<5);

//• Test whether an item is in a array
const fruits:string[] = ["Nashpati","banana","amroad"];
console.log('test "Nashpati" in the array:' , fruits.includes("Nashpati"));

//• Test whether an item is not in a array
console.log('testing "apple" is not in array:', !fruits.includes('apple'));

