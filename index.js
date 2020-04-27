const clock = document.querySelector(".clock");

const getTime = () => {
  const now = new Date();
  const time = {
    h: now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`,
    m: now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`,
    s: now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`,
  };
  clock.innerHTML = `${time.h}:${time.m}:${time.s}`;
};

const init = () => {
  getTime();

  setInterval(getTime, 1000);
};

init();
