const task_value = document.querySelector("#task-value");
const add_task  = document.querySelector("#add-task");
const new_list = document.querySelector("#new-list");


// add li dynamically
function addItem(){
    const addNewList = document.createElement("li");
    new_list.appendChild(addNewList);
    addNewList.textContent = `${task_value.value}`;
    task_value.value = "";

    deleteTask(addNewList);
}

// delete task
function deleteTask (addNewList){
    const span = document.createElement("span");
    span.textContent = "❌";
    addNewList.appendChild(span);
    span.style.cursor = "pointer";

    span.onclick = function(){
        addNewList.remove();
    }
}

// add event listener
add_task.addEventListener("click", addItem);