const quizData = [ 
        { 
        question: 'Quantos anos tem Florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
        }, {
        question: 'Qual a linguagem mais popular?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'a'
        }, {
        question: 'Quem é o presidente do Brasil',
        a: 'Patrick',
        b: 'Bob Esponja',
        c: 'Bolsonaro',
        d: 'Lula Molusco',
        correct: 'd'
       }, {
        question: 'Quando foi lançada a linguagem Javascript?',
       a: '1996',
       b: '1995',
       c: '1994',
       d: 'Nenhuma das alternativas anteriores',
       correct: 'd'
       }, {
        question: 'O que significa HTML?',
       a: 'Hypertext Markup Language',
       b: 'Cascading Style Sheet',
       c: 'Jason Object Notation',
       d: 'HelicoptMaker Terminals Motorboat Lamborghini',
       correct: 'd'
       }, {
        question: 'Em que ano foi lançado o Javascript?',
       a: '1996',
       b: '1995',
       c: '1994',
       d: 'Nenhuma das alternativas anteriores',
       correct: 'c'
       }
]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("Submit");
let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            return answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click", () => {
    // Check the Answer
    const answer = getSelected();

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO: Show results
            quiz.innerHTML = `<h2>Você terminou! Seu resultado foi ${score}/${quizData.lenth} Pegue seu premio</h2>`;
        }   
    
    }  
});