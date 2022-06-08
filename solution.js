"use strict";

/* 
## Create a program (use function declarations) that will schedule some random tasks.

E.g.
- chilling on Saturday
- dentist on Tuesday
- chilling on Tuesday
- coding on Friday
- dentist on Saturday
- traveling on Sunday
- volunteering on Wednesday

### As you can notice, days and tasks do not have to be unique at this point.
### Activities need to be printed to the console.
### The user can decide how many activities they want to print (it could be just 1 line ore more).
### Each function should perform 1 specific job. 
### You should create around 4 functions.
### Use comments to describe your thinking process. 
 */

let daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "saturday",
];
let tasksArr = [
  "chilling",
  "dentist",
  "chilling",
  "coding",
  "dentist",
  "traveling",
  "volunteering",
];

function randFunc(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return randomNum;
}

function getData(iter) {
  let getTask = tasksArr[randFunc(tasksArr)];
  printConsole(iter, getTask);
}

function printConsole(day, task) {
  console.log(`${day + 1} - ${task} on ${daysArr[day]}`);
}

function weeklyTasks(repetitions) {
  for (let i = 0; i < repetitions; i++) {
    getData(i);
  }
}

weeklyTasks(7);
