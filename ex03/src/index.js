// Create myPetsArray here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    // Only change code below this line
    myNewPets.push("Bird", "Fish");

    var firstPet = myNewPets.pop();
    var lastPet = myNewPets.shift();

    myNewPets.unshift("Lion");


    return myNewPets;
    // Only change code above this line
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;