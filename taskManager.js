//task Manager class responsible for managing the tasks in the application

class TaskManager {
    constructor(currentID = 0) {
        this.tasks = [];
        this.currentID = currentID;
    }

    //add a method to the TaskManager class that will allow us to add tasks to its tasks property

    addTask( name, description, assignTo, dueDate, status){
        const task = {
            id: this.currentID++,
            name: name,
            description: description,
            assignTo: assignTo,
            dueDate: dueDate,
            status: status
        };

        this.tasks.push(task); // push new task as a new nested array in TaskManager.tasks array
        console.log(task);

    }



}

const taskCardHtml = (id, name, description, assignTo, dueDate, status) => {

    const html = ` 
        <div class="card">
            <div id="taskCardName" >
                <div id="statusbadgediv">
                    <span class="badge" id="statusBadge">${status}</span>
                </div>
                <h6 class="card-title" >${name}</h6>
            </div>

            <div class="cardbody">
                <ul class="list-group list-group-flush">

                    <li class="list-group-item"> ${description} </li>
                    <li class="list-group-item"><strong> Assign to: </strong> ${assignTo} </li>
                    <li class="list-group-item"><strong> Due date: </strong>  ${dueDate} </li>
                </ul>

                <div class="d-flex my-2 justify-content-around">
                    <button class="btn btn-outline-success btn-xs"><i class='fas fa-check taskCardIcon'></i></button>
                    <button class="btn btn-outline-warning"><i class='fas fa-pen taskCardIcon'></i> </button>
                    <button class="btn btn-outline-danger"><i class='fas fa-trash taskCardIcon'></i></button>  
                </div>
            </div>
        </div> 
    `;
return html;
};

//create new instance from task manager class 
const taskManager = new TaskManager(); 

