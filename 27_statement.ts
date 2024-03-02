//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.//Create a variable called alien_color and assign it a value of 'green', 
let alien_color : string = "green";

//print a message that the player just earned 5 points.
    if(alien_color === "green"){
        console.log(" player just earned 5 points.")
    }
    //• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
    else if(alien_color === "yellow"){
        console.log(" player just earned 10 points.")
    }
    else if(alien_color === "red"){
        console.log(" player just earned 15 points.")
    }

    else{
        console.log(" player just earned 0 points.")
    }

    