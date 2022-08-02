const input = document.getElementById("task_input");
const save = document.getElementById("save_task");
const u_list = document.getElementById("u_list");

const fun_checked = (e) => {
  const checkbox = e.target.nextElementSibling;
  checkbox.classList.toggle("checked");
};
const fun_delete = (e) => {
  const li = e.target.parentElement;
  const label = li.querySelector("label");
  const text = label.innerText;
  let list_tasks = JSON.parse(localStorage.getItem("todos"));
  list_tasks.splice(list_tasks.indexOf(text), 1);
  localStorage.setItem("todos", JSON.stringify(list_tasks));
  u_list.removeChild(li);
};
const create_element = (text) => {
  //create Element
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const label = document.createElement("label");
  label.innerText = text;

  const button = document.createElement("button");
  button.classList.add("button_delete");
  button.innerText = "Delete";

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);
  u_list.appendChild(li);

  button.addEventListener("click", fun_delete);
  checkbox.addEventListener("click", fun_checked);
  label.addEventListener("dblclick", editTask);
};
const editTask = (e, old_value) => {
  console.log(old_value);
  let label = e.target;
  let edit_value = label.innerText;
  const edit_input = document.createElement("input");
  edit_input.type = "text";
  edit_input.value = edit_value;
  edit_input.classList.add("add_task");
  label.parentElement.replaceChild(edit_input, label);

  edit_input.addEventListener("keyup", (e) => update_task(e, edit_value));
};
const update_task = (e, old_value) => {
  if (e.keyCode === 13) {
    let input = e.target;
    let edit_value = input.value;
    const edit_label = document.createElement("label");
    edit_label.innerText = edit_value;
    input.parentElement.replaceChild(edit_label, input);
    list_storage = JSON.parse(localStorage.getItem("todos"));
    list_storage.splice(list_storage.indexOf(old_value), 1, edit_value);
    localStorage.setItem("todos", JSON.stringify(list_storage));
    edit_label.addEventListener("dblclick", editTask);
  }
};
const add_task = () => {
  let val = input.value;
  if (val === "") {
    alert("Add Task");
    return;
  }

  create_element(val);
  let todo_list = [];
  todo_list = JSON.parse(localStorage.getItem("todos"));
  if (todo_list) {
    todo_list.push(val);
  } else {
    todo_list.push([]);
  }
  localStorage.setItem("todos", JSON.stringify(todo_list));

  input.value = "";
};
const initialPage = () => {
  const storage = JSON.parse(localStorage.getItem("todos"));
  if (storage) {
    storage.forEach((item) => {
      create_element(item);
    });
  } else {
    let emp = [];
    localStorage.setItem("todos", JSON.stringify(emp));
  }
};
document.addEventListener("DOMContentLoaded", function () {
  initialPage();
});
const save_by_enter = (e) => {
  if (e.keyCode === 13) {
    add_task();
  }
};
save.addEventListener("click", add_task);
input.addEventListener("keyup", save_by_enter);
