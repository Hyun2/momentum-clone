// clock part
const getTime = () => {
  const clock = document.querySelector(".clock");
  const now = new Date();
  const time = {
    h: now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`,
    m: now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`,
    s: now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`,
  };
  clock.innerHTML = `${time.h}:${time.m}:${time.s}`;
};

// name part
const nameForm = document.querySelector("form.name");
const input = document.querySelector("input.name");

const handleNameSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("currentUser", input.value);
  getUser();
};

const getUser = () => {
  const greeting = document.querySelector(".greeting");
  const user = localStorage.getItem("currentUser");
  if (user) {
    input.classList.add("hidden");
    greeting.innerHTML = `Hello ${user}`;
    greeting.classList.remove("hidden");
  }
};

// to do list part
const todoForm = document.querySelector("form.todo");
const todoUl = document.querySelector("ul.todo");
const todoInput = document.querySelector("input.todo");
let todoArray = JSON.parse(localStorage.getItem("todo")) || [];

const addItemToList = (itemArray) => {
  itemArray.map((item) => {
    const li = document.createElement("li");
    li.id = item.id;
    li.innerText = item.text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.addEventListener("click", () => {
      todoUl.removeChild(li);
      todoArray = todoArray.filter((todo) => todo.id !== parseInt(li.id));
      localStorage.setItem("todo", JSON.stringify(todoArray));
    });
    li.append(delBtn);

    todoUl.appendChild(li);
    todoArray.push(item);
    localStorage.setItem("todo", JSON.stringify(todoArray));
  });
};

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const item = {
    id: new Date().getTime(),
    text: todoInput.value,
  };
  addItemToList([item]);

  todoInput.value = "";
};

// init
const init = () => {
  getTime();
  nameForm.addEventListener("submit", handleNameSubmit);
  todoForm.addEventListener("submit", handleTodoSubmit);
  getUser();
  addItemToList(todoArray);

  setInterval(getTime, 1000);
};

init();
