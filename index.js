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

// ###
const form = document.querySelector("form");
const input = document.querySelector(".name");

const handleSubmit = (e) => {
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

const init = () => {
  getTime();
  form.addEventListener("submit", handleSubmit);
  getUser();
  setInterval(getTime, 1000);
};

init();
