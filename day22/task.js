let tasks = [];

// Add Task
function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
}

// Mark as Completed
function completeTask(index) {
    tasks[index].completed = true;
}

// Remove Task
function removeTask(index) {
    tasks.splice(index, 1);
}

// Show All Tasks
function showTasks() {
    console.log("All Tasks:");
    tasks.forEach((task, i) => {
        console.log(i + ": " + task.name + " - " + (task.completed ? "Done" : "Pending"));
    });
}

// Filter Completed Tasks (callback concept)
function filterTasks(callback) {
    return tasks.filter(callback);
}

addTask("Learn JS");
addTask("Practice Coding");
addTask("Build Project");
addTask("Review Code");

completeTask(0);

showTasks();

let completed = filterTasks(t => t.completed);
console.log("Completed Tasks:", completed);