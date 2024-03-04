/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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