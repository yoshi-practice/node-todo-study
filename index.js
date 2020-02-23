'use strict';

// key: tasks words
// value: isDone:true/false 
const tasks = new Map();

// Add task
function todo(task){
    tasks.set(task, false);

}

// Done task
function done(task){
    if (tasks.has(task)) {
        tasks.set(task, true);
    }
}

// Delete tasks
function del(task){
    tasks.delete(task);
}

// isDone?
function isDone(taskAndIsDonePair){
    return taskAndIsDonePair[1]; // true/false
}

// isNotDone?
function isNotDone(taskAndIsDonePair){
    return !isDone(taskAndIsDonePair); // true/false
}

// return list
function list() {
    return Array.from(tasks)
            .filter(isNotDone)
            .map(t => t[0]);
}

function doneList() {
    return Array.from(tasks)
        .filter(isDone)
        .map(t => t[0]);
}

module.exports = { todo, list, done, doneList, del };