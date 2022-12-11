const selectEasy = document.getElementById("select-easy");
const selectMedium = document.getElementById("select-medium");
const selectHard = document.getElementById("select-hard");

const testContainer = document.getElementById("test-container");
const testStartContainer = document.getElementById("test-start-container");

const testArrowLeft = document.getElementById("test-arrow-left");
const testArrowRight = document.getElementById("test-arrow-right");

const levelImg = document.getElementById("levelImg");
const startTest = document.getElementById("test-start");
const amount = document.querySelectorAll("#test-amount");
const startedTestContainer = document.getElementById("started-test-container");

const answerSelection1 = document.getElementById("answer-selection-1");
const answerSelection2 = document.getElementById("answer-selection-2");
const amountCounter = document.getElementById("amount-counter");
const currentWord = document.getElementById("test-word");

const goBack = document.getElementById("go-back");


let testArray = [];
let testDifficulty = null;
let amountOfWords = "";
let amountAnswer = 0;
let testStarted = false;
let testWord = "";
let numberA = 0;
let numberB = 0;
let amountOfCorrectAnswers = 0;

// Select test
new Glider(document.querySelector('.select-container'), {
    slidesToShow: 1,
    draggable: true,
    scrollLock: true,
    arrows: {
      prev: '.left',
      next: '.right'
    }
});

// Displaying test selected
function selectLevelImg() {
  testContainer.style.display = "none";
  testStartContainer.style.display = "flex";
}

function levelCheck(e) {
    if(e.target === selectEasy) {
      selectLevelImg();
      levelImg.src = "img/easy-space-01.svg";
      testDifficulty = 0;
    } else if (e.target === selectMedium) {
      selectLevelImg();
      levelImg.src = "img/medium-space-01.svg";
      testDifficulty = 1;
    } else {
      selectLevelImg();
      levelImg.src = "img/hard-space-01.svg";
      testDifficulty = 2;
    }
}

// Amount
amount.forEach((index) => {
  index.addEventListener("click", () => {
    testArray = [];
    if(index.textContent === "3") {
      amountOfWords = Number(index.textContent);
    } else if(index.textContent === "6") {
      amountOfWords = Number(index.textContent);
    } else {
      amountOfWords = levelWords[testDifficulty].length;
    }
  });
});

// Starting test
function startTests() {
  if(amountOfWords > "") {
    testStartContainer.style.display = "none";
    startedTestContainer.style.display = "flex";
  }
  amountCounter.textContent = `${amountAnswer}/${amountOfWords}`;
  for(let i = 0; i<amountOfWords; i++) {
    testArray.push(levelWords[testDifficulty][i]);
  }
  getArrayWords();
  setTimeout(timeOutCards, 300)
}

function getArrayWords() {
  testWord = Math.floor(Math.random() * testArray.length);
  currentWord.textContent = testArray[testWord].word;
  // Ranking system to select if answer/wrongAnswer position
  numberA = Math.floor(Math.random() * 10);
  numberB = Math.floor(Math.random() * 10);
  if(numberA > numberB) {
    answerSelection1.textContent = testArray[testWord].answer;
    answerSelection2.textContent = testArray[testWord].wrongAnswer;
  } else {
    answerSelection2.textContent = testArray[testWord].answer;
    answerSelection1.textContent = testArray[testWord].wrongAnswer;
  }
}

function timeOutCards() {
  answerSelection1.classList.toggle("answer-selection-1");
  answerSelection2.classList.toggle("answer-selection-2");
}

function rightOrWrongAnswer(e) {
  if(answerSelection1.textContent === testArray[testWord].answer) {
    answerSelection1.classList.add("right");
    answerSelection2.classList.add("wrong");
  } else {
    answerSelection2.classList.add("right");
    answerSelection1.classList.add("wrong");
  }
  if(e.target.textContent === testArray[testWord].answer) {
    amountOfCorrectAnswers++
  }
  setTimeout(timeOutCards, 1000)
  setTimeout(getNewWord, 1500)
}

// get a new word for test
function getNewWord() {
  amountAnswer++
  amountCounter.textContent = `${amountAnswer}/${amountOfWords}`;
  if(amountAnswer < amountOfWords) {
    let testDump = testArray.splice(testWord, 1)
    resetCards();
    getArrayWords();
    setTimeout(timeOutCards, 300)
  } else {
    currentWord.style.fontSize = "1.6rem"
    currentWord.textContent = `Congratulations you got ${amountOfCorrectAnswers} correct`
    goBack.style.display = "grid"
  }
}

function returnToLevelSelect() {
  startedTestContainer.style.display = "none";
  testContainer.style.display = "grid";
  goBack.style.display = "none"

  amountAnswer = 0;
  amountOfCorrectAnswers = 0;
  resetCards();
}

function resetCards() {
  answerSelection1.classList.remove("right");
  answerSelection1.classList.remove("wrong");
  answerSelection2.classList.remove("right");
  answerSelection2.classList.remove("wrong");
}

selectEasy.addEventListener("click", levelCheck);
selectMedium.addEventListener("click", levelCheck);
selectHard.addEventListener("click", levelCheck);
startTest.addEventListener("click", startTests);
answerSelection1.addEventListener("click", rightOrWrongAnswer);
answerSelection2.addEventListener("click", rightOrWrongAnswer);
goBack.addEventListener("click", returnToLevelSelect)