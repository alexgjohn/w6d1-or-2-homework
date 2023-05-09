//episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
// };

// const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//PREDICTED OUTPUT: `The murderer is Miss Scarlet`.
//WHY: The 'murderer' property is defined, included as part of return for function and then called.


//episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//PREDICTED OUTPUT: `The murderer is Professor Plum`
//WHY: 'murderer' is a const and cannot be reassigned.


//episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//PREDICTED OUTPUT: 'First Verdict: The murderer is Mrs. Peacock.'
//'Second Verdict: The murderer is Professor Plum.'
//WHY: For the first verdict, the declareMurderer() function reassigns the murderer variable to be Mrs. Peacock, but the scope of this reassignment is only that function, so the second verdict will be Professor Plum.


//episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//PREDICTED OUTPUT: 
//`The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.`
//`Suspect three is Mrs. Peacock`
//WHY: In the first output, the function that is being called reassigns the variable suspectThree, so this is within its scope. For the second output, the function declareAllSuspects() is never called, so the variable suspectThree is never reassigned.


//episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//PREDICTED OUTPUT: `The weapon is the Revolver.`
//WHY: scenario is a const, but the properties of this object can still be modified. 


//episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         murderer = 'Mrs. White';
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//PREDICTED OUTPUT: `The murderer is Mrs. White`
//WHY: The changeMurderer() function reassigns the murderer to be Mrs. White, as it also calls the plotTwist() function. 

//episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

//     const plotTwist = function() {
//         let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//PREDICTED OUTPUT: `The murderer is Mr Green`
//WHY: changeMurderer() is called, which calls plotTwist(), BUT plotTwist includes murderer as a let declaration, so nothing from here inwards will be passed up as a new value.

//episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function(room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function(murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');
//     }

//     plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//PREDICTED OUTPUT: `The weapon is Candle Stick`
//WHY: As part of changeScenario(), the room is changed to Dining Room, so the code included in plotTwist's if statement will run, which in turn will cause the if statement in unexpectedOutcome to run. None of these changes are declard as let variables, so will not be confined to their block.

//episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//PREDICTED OUTPUT: I'm going to say... `The murderer is Professor Plum`
//WHY: the if statement will execute, but the let declaration means that the reassignment won't be passed upwards in scope.