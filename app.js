const menuBtn = document.getElementById("menu-button");
const navContent = document.getElementById("nav-content");
const themeToggle = document.getElementById("theme-toggle");

const practiceBtn = document.getElementById("verba-practice-button");
const practiceContainer = document.getElementById("practice-container");
const verbaContainer = document.getElementById("verba-container");
const testBtn = document.getElementById("verba-test-button");
const verbaNav = document.getElementById("verba");
const practiceNav = document.getElementById("practice");

const answer = document.getElementById("answer-btn");
const card = document.getElementById("card");
const wordCard = document.getElementById("word");
const answerCard = document.getElementById("answer");
const arrowLeft = document.getElementById("card-arrow-left");
const arrowRight = document.getElementById("card-arrow-right");

let randomIndex = "";
let previousIndex = "";

// Get random word from Array
function getPreviousWord() {
    randomIndex--;
    if(randomIndex < 0) {
        randomIndex = verbaWords.length - 1;
    }
    wordCard.textContent = verbaWords[randomIndex].word;
    answerCard.textContent = verbaWords[randomIndex].answer;
    // Checks if the answer card is shown
    if(card.classList.contains("toggle-answer")) {
        card.classList.toggle("toggle-answer");
    }
}

function getRandomVerbaWords()  {
    randomIndex++;
    if(randomIndex === verbaWords.length) {
        randomIndex = 0  
    }
    wordCard.textContent = verbaWords[randomIndex].word;
    answerCard.textContent = verbaWords[randomIndex].answer;
    // Checks if the answer card is shown
    if(card.classList.contains("toggle-answer")) {
        card.classList.toggle("toggle-answer");
    }
}

function wordOnLoad() {
    randomIndex = Math.floor(Math.random() * verbaWords.length);
    wordCard.textContent = verbaWords[randomIndex].word;
    answerCard.textContent = verbaWords[randomIndex].answer;
    previousIndex = randomIndex
}

// Reval answer when btn is clicked
function toggleAnswerPractice() {
    card.classList.toggle("toggle-answer");
}

// Event listeners
menuBtn.addEventListener("click", () => {
    navContent.classList.toggle("toggle-nav-content");
});
window.addEventListener("click", (e) => {
    (e.target === document.querySelector("main") ? navContent.classList.remove("toggle-nav-content") : false)
});
answer.addEventListener("click", toggleAnswerPractice);
arrowRight.addEventListener("click", getRandomVerbaWords);
arrowLeft.addEventListener("click", getPreviousWord);

// On load
wordOnLoad();