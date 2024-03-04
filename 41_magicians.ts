/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

*/

//array of magicians
let magician_names :string[] = ["harry potter" , "david copper field" , "hermon granger" , "ron weaslay" , "professor albs dumbledore"];


//function show_magicians
function show_magicians(magicians :string[]):void
{
    for(let magician of magicians)
    console.log(magician);
}
show_magicians(magician_names)
