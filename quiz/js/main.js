let Answers = new Array(data.length).fill("");

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const FSBtn = document.getElementById("FSubmit");

let currentQuiz = 0;
let score = 0;
beforeQuestion = 0;

const ActiveButton = () => {
  current = currentQuiz + 1;

  const butto = document.querySelectorAll(".btn-row-second");
  butto.forEach((item) => item.classList.remove("active"));
  var last = current.toString().slice("-1");
  const btn = document.getElementById(`p-${last}`);
  btn.classList.add("active");

  const pOne = document.getElementById("p-one");
  const pTwo = document.getElementById("p-two");
  const pThree = document.getElementById("p-three");
  if (current <= 10) {
    pOne.classList.add("active");
    pTwo.classList.remove("active");
    pThree.classList.remove("active");
  } else if (current <= 20 && current > 10) {
    pTwo.classList.add("active");
    pOne.classList.remove("active");
    pThree.classList.remove("active");
  } else {
    pThree.classList.add("active");
    pOne.classList.remove("active");
    pTwo.classList.remove("active");
  }
};

function loadQuiz() {
  deSelectAnswer();
  const currentQuizData = data[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  if (beforeQuestion !== 0) {
    const questionBefore = document.getElementById(`${beforeQuestion}`);
    questionBefore.classList.remove("active");
  }

  const button = document.getElementById(`${currentQuiz + 1}`);
  button.classList.add("active");

  beforeQuestion = currentQuiz + 1;
  ActiveButton();
  CheckButtonsForDisable();
}
function selectQuestion(id) {
  currentQuiz = id - 1;
  loadQuiz();
}
function deSelectAnswer() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}
function getSelected() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
// submit
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (
      answer === data[currentQuiz].answer &&
      Answers[currentQuiz].answer !== answer
    ) {
      score++;
    }
    let item = { id: currentQuiz, answer: answer };
    Answers[currentQuiz] = item;
    currentQuiz++;
    if (currentQuiz < data.length) {
      loadQuiz();
    }
  }
});
// timer
var intervalFun = setInterval(myTimer, 1000);

const timeText = document.querySelector(".time");
const startingMinutes = 3;
let time = startingMinutes * 60;

function myTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timeText.innerHTML = `${minutes} : ${seconds}`;
  time--;
  if (time === 0) {
    quiz.innerHTML = `<div class="result"><h2 class="text-center text-danger d-block">You answered ${score} / ${data.length} questions correctly   </h2>
   <button onclick="location.reload()" class="btn btn-custom d-block ">Try again</button></div>`;
    timeText.innerHTML = `00 : 00`;
    clearInterval(intervalFun);
  }
}
// end Timer
const BtnNext = document.getElementById("next");
const BtnBefore = document.getElementById("before");
const CheckButtonsForDisable = () => {
  if (currentQuiz < 29) {
    BtnNext.classList.remove("disabled");
  } else {
    BtnNext.classList.add("disabled");
  }
  if (currentQuiz !== 0) {
    BtnBefore.classList.remove("disabled");
  } else {
    BtnBefore.classList.add("disabled");
  }
};
//next Button
function next() {
  if (currentQuiz + 1 < data.length) {
    currentQuiz++;
    loadQuiz();
    checkedInput();
  }
}

//previous Button
function before() {
  if (currentQuiz + 1 > 1) {
    currentQuiz--;
    loadQuiz();
    checkedInput();
  }
}
//Checked Input
function checkedInput() {
  if (Answers[currentQuiz] !== "") {
    const ans = Answers[currentQuiz].answer;
    document.getElementById(ans).checked = true;
  }
}
loadQuiz();

//Fs Btn submit
FSBtn.addEventListener("click", () => {
  quiz.innerHTML = `<div class="result"><h2 class="text-center text-danger d-block">You answered ${score} / ${data.length} questions correctly   </h2>
    <button onclick="location.reload()" class="btn btn-custom d-block ">Try Again</button></div>`;
});

//change theme
const toggleTheme = () => {
  let theme = quiz.getAttribute("data-bs-theme");
  if (theme === "dark") {
    quiz.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    quiz.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
};

//local Storage
const localSt = () => {
  const th = localStorage.getItem("theme");
  quiz.setAttribute("data-bs-theme", th);
};
localSt();
