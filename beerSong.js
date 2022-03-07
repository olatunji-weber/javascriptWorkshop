function beer( numberOfBottles ){
    var output = "";
    
    while( numberOfBottles > 0 ){
        output += numberOfBottles + " bottles of beer on the wall, numberOfBottles bottles of beer.\n";
        output += "Take one down and pass it around, " + numberOfBottles-- + " bottles of beer on the wall.\n\n";
    }
    output += "No more bottles of beer on the wall, no more bottles of beer.\n";
    output += "Go to the store and buy some more," + numberOfBottles + " bottles of beer on the wall.\n\n";
    return output;
}

console.log(beer(99));