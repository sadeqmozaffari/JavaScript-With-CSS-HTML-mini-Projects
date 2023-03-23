let data = JSON.parse(localStorage.getItem("task"));
let tasks = [];
if (Array.isArray(data)) {
  tasks = data;
}
// console.log(tasks);

// delete
funDelete = (id) => {
  console.log(id);
};

//render to view
render = () => {
  const list = document.getElementById("list");
  list.innerHTML = " ";
  tasks.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("flex-row");
    div.innerHTML = `<input type="checkbox" id=${item.id} /> <span class="task">${item.title}</span> <button onclick=funDelete(${item.id})>delete</button>`;
    list.prepend(div);
  });
};
render();

//update local Storage
updateLocalStorage = () => {
  localStorage.setItem("task", JSON.stringify(tasks.reverse()));
};
//add Task
addTask = () => {
  let date = new Date();
  let input = document.getElementById("inputText");

  if (input.value !== " ") {
    newTask = {
      id: date.getUTCMilliseconds(),
      title: input.value,
      done: "false",
    };
    tasks.push(newTask);
    render();
    input.value = " ";
    updateLocalStorage();
  }
};
