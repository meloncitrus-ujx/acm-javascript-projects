/*
    ALGORITHM: To-Do List Tracker (Data & LocalStorage Driven)

    1. SETUP:
       - Load the to-do list array from LocalStorage using `JSON.parse(localStorage.getItem('todoList'))`.
       - If no saved data exists, initialize `todoList` with a default array of task objects (each having `name` and `dueDate`).
       - Get the task name input element, due date input element, "Add" button, and task container `<div>`.

    2. RENDER FUNCTION (`renderTodoList()`):
       - Initialize an empty HTML string `todoListHTML = ''`.
       - Loop through `todoList` using `.forEach((todoObject, index) => { ... })`:
           - Destructure `name` and `dueDate` from `todoObject`.
           - Generate HTML elements for the task name, date, and a "Delete" button containing class `js-delete-todo-button`.
           - Append the generated HTML to `todoListHTML`.
       - Set the task container's `.innerHTML` to `todoListHTML`.
       - Select all delete buttons using `document.querySelectorAll('.js-delete-todo-button')`.
       - Attach a click event listener to each delete button:
           - Remove the task at that `index` using `todoList.splice(index, 1)`.
           - Save updated array to LocalStorage.
           - Call `renderTodoList()` to refresh the screen.

    3. ADD TASK LOGIC:
       - When "Add" button is clicked:
           - Read values from the name and due date inputs.
           - If task name is empty, stop execution.
           - Push new object `{ name, dueDate }` into `todoList`.
           - Clear input fields.
           - Save updated `todoList` to LocalStorage with `JSON.stringify()`.
           - Call `renderTodoList()` to refresh the screen.

    4. INITIALIZATION:
       - Call `renderTodoList()` once on startup.
*/

// WRITE YOUR CODE BELOW:

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM" ;
    hours = hours % 12 || 12; //if 0 use 12
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    let clock = document.querySelector(".clock");
    if (clock) 
        {clock.textContent = timestring;}
    if(!clock) return;
} //since other html didnt have this, stopwatch wasnt working

updateClock();
setInterval(updateClock, 1000);

//PRECISION STOPWATCH 

const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let lastLapTime = 0; 
let lapNum = 0 ; 

const start = document.getElementById("startbtn");
const reset = document.getElementById("resetbtn");
const stop = document.getElementById("stopbtn");
const lap = document.getElementById("lapbtn");

start.onclick = function (){
        if(!isRunning){
            startTime = Date.now() - elapsedTime;  //time passed in millisec since epoch 
            timer = setInterval(update, 10);
            isRunning = true;
        }
}

stop.onclick = function (){
        if(isRunning){
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRunning = false;
        }
}

lap.onclick = function (){
    if (isRunning){
        const currentLapTime = Date.now() - startTime;
        const lapTime = currentLapTime - lastLapTime;
        lapNum++; 

        const totalF = formatTime(currentLapTime);
        const lapF = formatTime(lapTime);

        let lapRow = document.createElement("div");
        lapRow.innerHTML = `
           <span> Lap ${lapNum} </span>
           <span> ${lapF} </span>
           <span> ${totalF} </span>
        `;
        lapRow.style.fontFamily = "monospace";
        laps.appendChild(lapRow);

        lastLapTime = currentLapTime;        
    }
}

reset.onclick = function (){
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning = false;
        lastLapTime = 0;
        lapNum = 0;
        display.textContent = "00:00:00:00";
        laps.innerHTML = `
            <div class = "lap-header">
              <span>Lap</span>            
              <span>Lap Time</span>
              <span>Total Time</span>
            </div>
        `;
}

function update(){
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        display.textContent = formatTime(elapsedTime);
}

function formatTime(time){
        let hours = Math.floor(time / (1000 * 60 * 60));
        let mintutes = Math.floor(time / (1000 * 60) % 60);
        let seconds = Math.floor(time / 1000 % 60);
        let milli = Math.floor(time % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        mintutes = String(mintutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milli = String(milli).padStart(2, "0");

        return `${hours}:${mintutes}:${seconds}:${milli}` 
}