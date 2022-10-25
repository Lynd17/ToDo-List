window.addEventListener("load", () => {
  const form = document.querySelector("#newTaskForm");
  const input = document.querySelector("#newTaskInput");
  const listElement = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");

    taskElement.appendChild(taskContentElement);

    const taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");

    taskContentElement.appendChild(taskInputElement);

    const taskActionsElement = document.createElement("div");
    taskActionsElement.classList.add("actions");

    const taskEditElement = document.createElement("button");
    taskEditElement.classList.add("edit");
    taskEditElement.innerHTML = "Edit";

    const taskDeleteElement = document.createElement("button");
    taskDeleteElement.classList.add("delete");
    taskDeleteElement.innerHTML = "Delete";

    taskActionsElement.appendChild(taskEditElement);
    taskActionsElement.appendChild(taskDeleteElement);

    taskElement.appendChild(taskActionsElement);

    listElement.appendChild(taskElement);

    input.value = "";

    taskEditElement.addEventListener("click", () => {
      if (taskEditElement.innerText.toLowerCase() == "edit") {
        taskInputElement.removeAttribute("readonly");
        taskInputElement.focus();
        taskEditElement.innerText = "Save";
      } else {
        taskInputElement.setAttribute("readonly", "readonly");
        taskEditElement.innerText = "Edit";
      }
    });

    taskDeleteElement.addEventListener("click", () => {
      listElement.removeChild(taskElement);
    });
  });
});
