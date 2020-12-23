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


//create new instance from task manager class 
const taskManager = new TaskManager(); 

