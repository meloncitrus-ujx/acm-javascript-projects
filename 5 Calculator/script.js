/*
    ALGORITHM: On-Screen Evaluator Calculator

    1. SETUP:
       - Get the input/display element (configured as read-only).
       - Select all calculator buttons.

    2. APPEND FUNCTION (`appendToDisplay(input)`):
       - Get the current value of the display.
       - Append the passed character (`input`) to the display value.

    3. CLEAR FUNCTION (`clearDisplay()`):
       - Reset the display value to an empty string `""`.

    4. CALCULATE FUNCTION (`calculate()`):
       - Wrap computation in a `try...catch` block.
       - Inside `try`:
           - Evaluate the arithmetic expression from display using `eval(display.value)`.
           - Update display value with the calculated result.
       - Inside `catch (error)`:
           - Set display value to `"Error"` if the expression is invalid.

    5. EVENT HANDLING:
       - Map button clicks to call `appendToDisplay()`, `clearDisplay()`, or `calculate()` accordingly.
*/

// WRITE YOUR CODE BELOW:

const display = document.getElementById("display");


function appendToDisplay(input){
      display.value += input; 
}

function clearLast(){
      if (display.value.endsWith(" + ") ||
        display.value.endsWith(" - ") ||
        display.value.endsWith(" * ") ||
        display.value.endsWith(" / ")) {
        
        display.value = display.value.slice(0, -3);
    } else {
      display.value = display.value.slice(0,-1);
      }
}

function clearDisplay(){
      display.value = '';
}


function calculate(){
      try{
         display.value = eval(display.value); 
      }
      catch(error){
         display.value = "error";
      }
}