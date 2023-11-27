  // Quiz questions function
  const questions = [
    {
      question: "Who is often referred to as the 'Queen of Pop'?",
      answers: [
        { text: "Madonna", correct: true},
        { text: "Beyonce", correct: false},
        { text: "Taylor Swift", correct: false},
        { text: "Rihanna", correct: false},
      ]
    },
    {
      question: "Who sang the most streamed song of 2021 'Love Nwantiti'?",
      answers: [
        { text: "The Weekend", correct: false},
        { text: "Ed Sheeran", correct: false},
        { text: "Ckay", correct: true},
        { text: "Billie Eilish", correct: false},
      ]
    },
    {
      question: "Who is known for the song 'Happy' and his role as a judge on 'The Voice'",
      answers: [
        { text: "The Weekend", correct: false},
        { text: "Bruno Mars", correct: false},
        { text: "Justin Bieber", correct: false},
        { text: "Pharrell Williams", correct: true},
      ]
    },
    {
      question: "In what year did Olivia Rodrigo release the grammy ward winning album 'Sour'",
      answers: [
        { text: "2019", correct: false},
        { text: "2021", correct: true},
        { text: "2020", correct: false},
        { text: "2022", correct: false},
      ]
    }
  ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  })
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();





  