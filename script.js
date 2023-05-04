// Define quiz data
const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who wrote the Harry Potter series?",
      choices: ["J.K. Rowling", "Stephenie Meyer", "George R.R. Martin", "Suzanne Collins"],
      answer: "J.K. Rowling"
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["K2", "Kilimanjaro", "Everest", "Denali"],
      answer: "Everest"
    }
  ];
  
  // Define variables
  const container = document.querySelector(".container");
  const questionEl = document.getElementById("question");
  const choiceEls = document.querySelectorAll("#choices button");
  const scoreEl = document.getElementById("score");
  const nextBtn = document.getElementById("next");
  let currentQuestion = 0;
  let score = 0;
  
  // Load the quiz
  loadQuiz();
  
  // Function to load quiz questions and choices
  function loadQuiz() {
    const quizQuestion = quizData[currentQuestion];
    questionEl.textContent = quizQuestion.question;
    choiceEls.forEach((choiceEl, index) => {
      choiceEl.textContent = quizQuestion.choices[index];
      choiceEl.addEventListener("click", () => {
        if (choiceEl.textContent === quizQuestion.answer) {
          score++;
          scoreEl.textContent = `Score: ${score}`;
        }
        choiceEls.forEach(choice => {
          choice.disabled = true;
        });
        nextBtn.disabled = false;
      });
    });
  }
  
  // Function to go to next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      choiceEls.forEach(choice => {
        choice.disabled = false;
      });
      nextBtn.disabled = true;
      loadQuiz();
    } else {
      endQuiz();
    }
  }
  
  // Function to end the quiz and show the final score
  function endQuiz() {
    container.innerHTML = `
      <h1>Quiz Complete!</h1>
      <p>Final Score: ${score}</p>
    `;
  }
  
  // Event listener for next button
  nextBtn.addEventListener("click", nextQuestion);
  
