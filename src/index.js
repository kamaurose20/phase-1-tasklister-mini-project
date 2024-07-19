document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskButtons = document.querySelectorAll("input")
  let taskDesc = taskButtons[0]
  let dueDate = taskButtons[1]
  let submitButton = taskButtons[2]
  let taskList = document.getElementById("tasks")

  function addTask(event) {
    event.preventDefault();

    let taskItem = document.createElement("li")

    let priority = document.getElementById("task-priority").value;
    taskItem.classList.add(priority);

    let taskText = document.createTextNode(`${taskDesc.value} - Due: ${dueDate.value}`)
    taskItem.appendChild(taskText);

    let deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
    deleteButton.textContent = 'X'
    deleteButton.onclick = function() {
      taskItem.remove()
    }
    taskItem.appendChild(deleteButton)
    taskList.appendChild(taskItem);
    taskDesc.value = ""
    dueDate.value = ""
  }

  submitButton.addEventListener("click", addTask)

});
