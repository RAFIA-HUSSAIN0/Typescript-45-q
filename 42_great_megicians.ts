/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/

//array of magicians
let magician_names :string[] = ["harry potter" , "david copper field" , "hermon granger" , "ron weaslay" , "professor albs dumbledore"];


//function show_magicians
function show_magicians(magicians :string[]):void
{
    for(let magician of magicians)
    console.log(magician);
}


function make_great(magicians:string[]):string[]{
    let great_magicians:string[]=magicians.map(magician =>`the great ${magician}`);
    return great_magicians;
}
//modify thy array to add "the great" to each magicians names:
let greatmagicianNames:string[] = make_great(magician_names);
console.log("orignal magicians");
show_magicians(magician_names);
 
// call the array to show the orignal magician's names:
console.log("great magicians");
show_magicians(greatmagicianNames);