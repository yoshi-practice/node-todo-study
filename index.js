'use strict';

// key: tasks words
// value: isDone:true/false 
const tasks = new Map();

// Add task
function todo(tasks){
    tasks.set(task, false);
}

// isDone?
function isDone(taskAndIsDonePair){
    return taskAndIsDonePair[1]; // true/false
}

module.exports = { todo };