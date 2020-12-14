// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';
// Part 1: Declare (5) Variables With Type
let spacecraftName: string= 'Determination';
let speedMph: number= 17500;
let kilometersToMars: number= 225000000;
let kilometersToTheMoon: number= 384400;
let milesPerKilometer: number= 0.621;


// Part 2: Print Days to Mars
let milesToMars: number= kilometersToMars * milesPerKilometer
let hoursToMars: number= milesToMars / speedMph
let daysToMars: number= hoursToMars / 24
console.log(`${spacecraftName} will take ${daysToMars} days to get to Mars`)


// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")

function getDaysToLocation(kilometersAway:number):number {
    let milesAway = kilometersAway * milesPerKilometer;
    let hoursToLocation = milesAway / speedMph;
    let daysToLocation = hoursToLocation / 24;
    return daysToLocation; 
};
console.log(getDaysToLocation(100))

// Move your output statement from part 2 here. Update the template literal to call
console.log(`${spacecraftName} will take  ${getDaysToLocation(kilometersToMars)} days to get to Mars`)
console.log(`${spacecraftName} will take  ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon`)


class Spacecraft{
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name: string, speedMph:number){
        this.name = name;
        this.speedMph = speedMph;
    };
     getDaysToLocation(kilometersAway:number):number {
        let milesAway = kilometersAway * this.milesPerKilometer;
        let hoursToLocation = milesAway / this.speedMph;
        let daysToLocation = hoursToLocation / 24;
        return daysToLocation; 
    };
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     };
};
let spaceShuttle = new Spacecraft('Determination', 17500);
// console.log(`${spacecraftName} will take  ${getDaysToLocation(kilometersToMars)} days to get to Mars`)
// console.log(`${spacecraftName} will take  ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon`)
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
