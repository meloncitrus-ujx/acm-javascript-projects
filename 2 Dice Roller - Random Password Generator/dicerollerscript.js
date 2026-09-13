/*
    ALGORITHM: Dice Roller & Random Password Generator

    PART 1: Dice Roller
    1. SETUP:
       - Get the number input element for the number of dice.
       - Get the "Roll Dice" button element.
       - Get the text result display element and image container element.

    2. ROLL LOGIC (inside roll button click handler):
       - Read the number of dice from the input field.
       - Create two empty arrays: `values` (for numbers) and `images` (for HTML <img> strings).
       - Run a for-loop from 0 up to the number of dice:
           - Generate a random integer between 1 and 6: `Math.floor(Math.random() * 6) + 1`.
           - Push the number to `values`.
           - Push an `<img>` tag with the corresponding dice image source into `images`.
       - Display the joined numbers in the text result element.
       - Set the `.innerHTML` of the image container to the joined images array.

    PART 2: Random Password Generator
    1. SETUP:
       - Define character set strings: lowercase, uppercase, numbers, and symbols.
       - Define helper function `generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols)`.

    2. GENERATOR LOGIC:
       - Create an empty string `allowedChars` and an empty string `password`.
       - Based on boolean flags, append matching character sets to `allowedChars`.
       - If `length <= 0`, return an error message.
       - If `allowedChars.length === 0`, return an error message stating at least one set must be chosen.
       - Loop `length` times:
           - Generate a random index between 0 and `allowedChars.length - 1`.
           - Append the character at that random index to `password`.
       - Return the generated `password`.
*/

// WRITE YOUR CODE BELOW:

import { clearvalue } from "../1 Interactive Counter - Temperature Converter/function.js";
console.log(clearvalue);
   clearvalue(numofdice);

function rollDice(){
   const numofdice = document.getElementById("numofdice");
   const diceresult = document.getElementById("result");
   const diceimages = document.getElementById("images");
   const values =[];
   const images =[];


   for(let i = 0; i < numofdice.value; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="../../images/dice${value}.png" alt="Dice ${value}"> `);
      //alternative if image doesnt load, good for troubleshooting
   }

   diceresult.textContent = `dice: ${values.join(', ')}`;
   diceimages.innerHTML = images.join('');
}
document.querySelector('.js-btn').addEventListener('click', rollDice);