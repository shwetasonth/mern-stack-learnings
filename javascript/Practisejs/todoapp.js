// Todo App

// 1)list-to show all todos
// 2)add-to add a todo
// 3)delete-to delete a task
// 4)to exit the todo

let tasks = ["f", "e"];
let req = prompt("enter your request and quit to exit ");

while (true) {
  if (req == "quit") {
    console.log("quiting app");
    break;
  } else if (req == "list") {
    console.log("=========");
    for (let i=0;i<tasks.length;i++) {
      console.log(i,tasks[i]);
    }
    console.log("=========");
  } else if (req == "add") {
    let task = prompt("Enter the task to add");
    tasks.push(task);
    console.log("task addd")
  } else if (req == "delete") {
    let idx = prompt("enter the index of task you want to delete");

    let res = tasks.splice(idx, 1);
    alert(`${res} deleted successfully from list`);
  }
  req = prompt("enter your request and quit to exit ");
}
