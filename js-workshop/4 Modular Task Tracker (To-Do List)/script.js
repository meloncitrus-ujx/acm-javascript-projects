/*
    ALGORITHM: To-Do List

    1.  SETUP:
        - Get the text input element for new tasks.
        - Get the "Add Task" button element.
        - Get the `<ul>` element where tasks will be displayed.

    2.  EVENT LISTENER:
        - Add a 'click' event listener to the "Add Task" button.

    3.  ADD TASK LOGIC (inside the button's click event handler):
        - Get the text from the input field and remove any leading/trailing whitespace.
        - If the text is empty, stop the function.
        - If the text is not empty:
            - Create a new list item (`<li>`) element.
            - Set the text of the `<li>` to the task text.
            - Create a new button element for deleting the task. Set its text to 'Remove'.
            - Add a 'click' event listener to this new 'Remove' button. When clicked, it should find its parent `<li>` and remove it from the list (`<ul>`).
            - Append the 'Remove' button inside the `<li>`.
            - Append the new `<li>` to the task list (`<ul>`).
            - Clear the text in the input field.
*/

const todoList = [ /*{ 
    name: 'task1',
    date: '2024-06-01'} , 
    { 
        name: 'task2',
        date: '2024-06-02'} , 
    { 
        name: 'task3',
        date: '2024-06-03'}*/

];

function renderTodoList() {
    let todoListHTML= '';

    todoList.forEach((todoObject,index)=> {
           let { name, date } = todoObject;
            let html = `
            <div class="todo-row ${selectedTask===index ? 'selected' : ''}" 
            onclick = "selectTask(${index})"> 
                <div> ${name} </div> 
                <div> ${date} </div>

            <button onclick = " 
                        event.stopPropagation();
                        deleteTask(${index});
                    "
                    class = "delete-todo-button js-delete-todo-button"
            > Delete </button>
            </div> 
            `;
            todoListHTML += html;

    });
        /*for (let i = 0; i < todoList.length; i++) {
            let todoObject = todoList[i];
           /* let name = todoObject.name;
            let date = todoObject.date; 
           let { name, date } = todoObject;
            let html = `
            <div class="todo-row ${selectedTask===i ? 'selected' : ''}" 
            onclick = "selectTask(${i})"> 
                <div> ${name} </div> 
                <div> ${date} </div>

            <button onclick = " 
                        event.stopPropagation();
                        deleteTask(${i});
                    "
                    class = " delete-todo-button"
            > Delete </button>
            </div> 
            `;
          
              /*  <button onclick=" 
                todoList.splice(${i}, 1);
                renderTodoList();
                " 
                class='delete-todo-button'> Delete </button>
            `; 

            todoListHTML += html;*/
        

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
};



let selectedTask = null; 

function selectTask(index) {
    selectedTask = index;
    renderTodoList();
}
function deleteTask(index) {
    todoList.splice(index, 1);
        if (selectedTask === index) {
            selectedTask = null;
        }
        renderTodoList();
    } 

document.querySelector('.js-add-todo-button').addEventListener('click', ()=>{
    addTodo()
});

/*document.querySelector('.js-delete-todo-button').forEach(
    (deleteButton, index) => { 
        deleteButton.addEventListener('click', () => {
            todoList.splice(index,1);
            renderTodoList();   
        });
});*/

function addTodo() { 
    const inputElement = document.querySelector('.js-name-input'); 
    let name = inputElement.value;

    const dateInputElemet = document.querySelector('.js-due-date-input');
    let date = dateInputElemet.value;

    todoList.push({ 
        name,  
        date, 
    } );
   

    inputElement.value = '';
    dateInputElemet.value = '';
    renderTodoList();

}

document.addEventListener( 'keydown', (event)=> {
    if (event.key === 'Delete' && selectedTask !== null) {
        todoList.splice(selectedTask, 1); 
        selectedTask = null;
        renderTodoList();
    }
    if (event.key === 'Escape') {
        selectedTask = null;
        renderTodoList(); 
    }

}); 



