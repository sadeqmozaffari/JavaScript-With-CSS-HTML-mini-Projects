let alarmTime;
const contentDisable = document.querySelector(".main-content");
const ringtone = new Audio("./music/ringtone.mp3");
const selectMenu = document.querySelectorAll("select");
for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value=${i}>${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value=${i}>${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
/////////////////////////////////////////
const time = document.querySelector(".time");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  let second = date.getSeconds();
  second = second < 10 ? "0" + second : second;
  time.innerHTML = `${hour} : ${minute} : ${second}`;

  if (alarmTime == `${hour} : ${minute}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);
///////////////////////////////////////////////////
let Alarm = document.querySelector(".btn-click");
Alarm.addEventListener("click", () => {
  alarmTime = `${selectMenu[0].value} : ${selectMenu[1].value}`;
  if (alarmTime.includes("Hour") || alarmTime.includes("Minute")) {
    time.innerHTML = `Please choose the Correct time`;
  } else if (Alarm.innerHTML === "Reset Alarm") {
    ringtone.pause();
    alarmTime = "";
    contentDisable.classList.remove("disable");
    Alarm.innerHTML = "Set Alarm";
  } else {
    contentDisable.classList.add("disable");
    Alarm.innerHTML = "Reset Alarm";
  }
});
