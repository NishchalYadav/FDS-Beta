const beginnerQuestions = [
  { question: "What is the Hiragana for 'a'?", answers: ["あ", "い", "う", "え"], correct: "あ" },
  { question: "What does 'ありがとう' mean?", answers: ["Hello", "Goodbye", "Thank you", "Please"], correct: "Thank you" },
  { question: "What is the Kanji for 'mountain'?", answers: ["川", "山", "木", "田"], correct: "山" },
];

const intermediateQuestions = [
  { question: "What is the meaning of '友達'?", answers: ["Friend", "Book", "Teacher", "Car"], correct: "Friend" },
  { question: "How do you say 'delicious' in Japanese?", answers: ["面白い", "楽しい", "美味しい", "暑い"], correct: "美味しい" },
  { question: "What is the Kanji for 'water'?", answers: ["火", "木", "水", "空"], correct: "水" },
];

const advancedQuestions = [
  { question: "What is the Kun-yomi reading for '食'?", answers: ["たべる", "ショク", "のむ", "くう"], correct: "たべる" },
  { question: "What does '頑張ってください' mean?", answers: ["Good luck!", "Take care!", "See you!", "Welcome!"], correct: "Good luck!" },
  { question: "What is the Kanji for 'Japanese language'?", answers: ["日本語", "中国語", "英語", "韓国語"], correct: "日本語" },
];

let currentLevel = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(level) {
  switch (level) {
      case "beginner":
          currentLevel = beginnerQuestions;
          break;
      case "intermediate":
          currentLevel = intermediateQuestions;
          break;
      case "advanced":
          currentLevel = advancedQuestions;
          break;
  }
  document.querySelector(".level-buttons").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  displayQuestion();
}

function displayQuestion() {
  const question = currentLevel[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("answer");
      button.onclick = () => checkAnswer(answer);
      answersDiv.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = currentLevel[currentQuestionIndex].correct;
  if (selectedAnswer === correctAnswer) {
      score++;
  }
  if (currentQuestionIndex < currentLevel.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
  } else {
      endQuiz();
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentLevel.length) {
      displayQuestion();
  } else {
      endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");
  document.getElementById("score").textContent = score;
  document.getElementById("total").textContent = currentLevel.length;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result").classList.add("hidden");
  document.querySelector(".level-buttons").classList.remove("hidden");
}
