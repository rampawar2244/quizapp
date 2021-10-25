const quizData = [
  {
    question: "how old is florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "what is most used programming language in 2019?",
    a: "java",
    b: "c",
    c: "python",
    d: "javacsript",
    correct: "a",
  },
  {
    question: "what is the HTML?",
    a: "HTML",
    b: "Webpage desiner",
    c: "python",
    d: "javacsript",
    correct: "a",
  },
  {
    question: "what is most used programming language in 2019?",
    a: "java",
    b: "c",
    c: "python",
    d: "javacsript",
    correct: "a",
  },
  {
    question: "what is most used programming language in 2019?",
    a: "java",
    b: "c",
    c: "python",
    d: "javacsript",
    correct: "a",
  },
];
 
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
 

loadQuiz();

function loadQuiz(){
    deselectedAnswer();
  const currentQuizData = quizData[currentQuiz];
   
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected(){
 
    let answer = undefined;
    answerEls.forEach((answerEls) => {
        if(answerEls.checked){
answer = answerEls.id;
        }

});
return answer;
}

function deselectedAnswer(){
    answerEls.forEach((answerEls) => {
  answerEls.checked = false;
        
    }); 
}
submitBtn.addEventListener("click", () => {
    //check to see the answer
   
    const answer = getSelected();
    console.log(answer);
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++; 
        if(currentQuiz < quizData.length){
            loadQuiz();
        
        }else{
             quiz.innerHTML = `<h2>You answerd is correctoly
             ${score}/${quizData.length} question.</h2><button onclick="location.reload()">
             Reload</button>`;
        }
    }
});
