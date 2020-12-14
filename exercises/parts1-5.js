"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
console.log(spacecraftName + " will take " + daysToMars + " days to get to Mars");
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hoursToLocation = milesAway / speedMph;
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
;
console.log(getDaysToLocation(100));
// Move your output statement from part 2 here. Update the template literal to call
console.log(spacecraftName + " will take  " + getDaysToLocation(kilometersToMars) + " days to get to Mars");
console.log(spacecraftName + " will take  " + getDaysToLocation(kilometersToTheMoon) + " days to get to the Moon");
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    ;
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    ;
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    ;
    return Spacecraft;
}());
;
var spaceShuttle = new Spacecraft('Determination', 17500);
// console.log(`${spacecraftName} will take  ${getDaysToLocation(kilometersToMars)} days to get to Mars`)
// console.log(`${spacecraftName} will take  ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon`)
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
