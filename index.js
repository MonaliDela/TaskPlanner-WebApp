//add task form validation
const taskform = document.querySelector("#taskform"); 
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const taskAssignTo = document.getElementById("taskAssignTo");
const taskDueDate = document.getElementById("taskDueDate");
const taskStatus = document.getElementById("taskStatus");

taskform.addEventListener("submit", (event) => {
    event.preventDefault();

    if(taskName.value.length > 10){
        taskName.classList.add("is-valid");
        taskName.classList.remove("is-invalid");
    } else {
        taskName.classList.add("is-invalid");
        taskName.classList.remove("is-valid");
    }

    if(taskDescription.value.length > 15) {
        taskDescription.classList.add("is-valid");
        taskDescription.classList.remove("is-invalid");
    } else {
        taskDescription.classList.add("is-invalid");
        taskDescription.classList.remove("is-valid");
    }

    if(taskAssignTo.value.length > 3) {
        taskAssignTo.classList.add("is-valid");
        taskAssignTo.classList.remove("is-invalid");
    } else {
        taskAssignTo.classList.add("is-invalid");
        taskAssignTo.classList.remove("is-valid");
    }

    var today = new Date(); //create a new object from date method
    if(today <= Date.parse(taskDueDate.value)) {
        taskDueDate.classList.add("is-valid");
        taskDueDate.classList.remove("is-invalid");
    } else {
        taskDueDate.classList.add("is-invalid");
        taskDueDate.classList.remove("is-valid");
    }

});