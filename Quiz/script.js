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

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuiz++;
}