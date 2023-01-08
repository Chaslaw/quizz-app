// ELEMENTS ON THE FRONT PAGE

const parentElement = document.querySelectorAll('.butt');
const tOne = document.querySelector('.tool-1');
const tTwo = document.querySelector('.tool-2');
const tThree = document.querySelector('.tool-3');
const results = document.getElementById('results');
const heading = document.getElementById('ansewr-heading');

// AUDIO SOUNDS FOR CLICKS

const auddio = 'https://www.myinstants.com/media/sounds/y2mate_d59ywFq.mp3';
const audioOne = new Audio('mixkit-select-click-1109.wav');
const audioTwo = new Audio('mixkit-classic-click-1117.wav');
// 'mixkit-classic-click-1117.wav'
const audioThree = new Audio('mixkit-single-classic-click-1116.wav');
const audioSuccsess = new Audio('success-sound-effect.mp3');
const audioFaliure = new Audio('mixkit-losing-piano-2024.wav');
 
// TOOLTIPS ON MOUSEENTER AND MOUSE LEAVE

function showBox(e){

    if(e.target.className.includes('bottom')){
        tOne.classList.add('tool-hover');
        audioThree.play();
    }else if (e.target.className.includes('mid')){
        tTwo.classList.add('tool-hover');
        audioThree.play();
    }else if (e.target.className.includes('top')){
        tThree.classList.add('tool-hover');
        audioThree.play();
    }
}

function closeBox(e){
    if(e.target.className.includes('bottom')){
        tOne.classList.remove('tool-hover');
    }else if (e.target.className.includes('mid')){
        tTwo.classList.remove('tool-hover');
    }else if (e.target.className.includes('top')){
        tThree.classList.remove('tool-hover');
    }
}

parentElement.forEach(el => {
       el.addEventListener('mouseenter', showBox);
       el.addEventListener('mouseleave', closeBox);
     }
)

// ACTIVATE POPUP QUIZ

const bottom = document.querySelector('.bottom');
bottom.addEventListener('click', showPopupOne);

const middleField = document.querySelector('.mid'); //eventlistener is in showAlert function

function showPopupOne () {
    audioOne.play();
    let showBox = document.querySelector('.popup-background');
    showBox.classList.add('shouUpPopup');
    let nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', showAlert);
    currentQuiz = 0;
    startQuiz();
};


// CANCLE, NEXT AND X BUTTONS 

let arrAnswers = [];

const cancleButton = document.getElementById('cancle-button');
cancleButton.addEventListener('click', cancleBox);
const cancleX = document.querySelector('.cancle-x');
cancleX.addEventListener('click', cancleBox);
const cancleFinal = document.querySelector('.cancle-final');
cancleFinal.addEventListener('click', cancleBox);
window.addEventListener('keyup', cancleBox, false);

function cancleBox (e) {

    let confirmation = confirm('You are about to close the window, are you sure you want to do that?');

    if(e.keyCode == '27'){
        audioTwo.play();
        let showBox = document.querySelector('.popup-background');
        showBox.classList.remove('shouUpPopup');
        results.classList.remove('result', 'shouUpPopup')
    }else if (e.target == cancleX || e.target == cancleFinal || e.target == cancleButton){
        if(confirmation){
            let showBox = document.querySelector('.popup-background');
            showBox.classList.remove('shouUpPopup');
            results.classList.remove('result', 'shouUpPopup');
            audioTwo.play();
        } else {
            return false;
        }
    }
}

// QUIZ QUESTIONS

const quizDataOne = [
    {
        question: 'Check out the corect result of the folowing operation: 2 + 2',
        a:'5',
        b: '4',
        c: '8',
        d: '0',
        correct: 'b'
    },
    {
        question: 'Check out the corect result of the folowing operation: 2 * 2',
        a:'12',
        b: '4',
        c: '6',
        d: '2',
        correct: 'b'
    },
    {
        question: 'Check out the corect result of the folowing operation: 2 - 2',
        a:'11',
        b: '2',
        c: '4',
        d: '0',
        correct: 'd'
    },
    {
        question: 'Check out the corect result of the folowing operation: 2 / 2',
        a:'13',
        b: '3',
        c: '7',
        d: '1',
        correct: 'd'
    },
];

// const quizDataTwo = [
//     {
//         question: 'Check out the corect result of the folowing operation: 3 + 3',
//         a:'6',
//         b: '4',
//         c: '8',
//         d: '0',
//         correct: 'a'
//     },
//     {
//         question: 'Check out the corect result of the folowing operation: 3 * 3',
//         a:'12',
//         b: '4',
//         c: '9',
//         d: '2',
//         correct: 'c'
//     },
//     {
//         question: 'Check out the corect result of the folowing operation: 3 - 3',
//         a:'11',
//         b: '2',
//         c: '4',
//         d: '0',
//         correct: 'd'
//     },
//     {
//         question: 'Check out the corect result of the folowing operation: 3 / 3',
//         a:'13',
//         b: '3',
//         c: '7',
//         d: '1',
//         correct: 'd'
//     },

// ]

// INPUT RADIO ELEMENTS

const question = document.getElementById('main-question');
const aAnswer = document.getElementById('a-answer');
const bAnswer = document.getElementById('b-answer');
const cAnswer = document.getElementById('c-answer');
const dAnswer = document.getElementById('d-answer');

const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputC = document.getElementById('c');
const inputD = document.getElementById('d');
const input = document.querySelectorAll('input');

let currentQuiz = 0;
let count = 0;
let score = 0;

function startQuiz () {
    deselectAnswer()

    let qurrentQuizData = quizDataOne[currentQuiz];
    
    question.innerText = qurrentQuizData.question;
    aAnswer.innerText = qurrentQuizData.a;
    bAnswer.innerText = qurrentQuizData.b;
    cAnswer.innerText = qurrentQuizData.c;
    dAnswer.innerText = qurrentQuizData.d;
};

// function startQuizTwo () {
//     deselectAnswer()

//     let qurrentQuizData = quizDataTwo[currentQuiz];
    
//     question.innerText = qurrentQuizData.question;
//     aAnswer.innerText = qurrentQuizData.a;
//     bAnswer.innerText = qurrentQuizData.b;
//     cAnswer.innerText = qurrentQuizData.c;
//     dAnswer.innerText = qurrentQuizData.d;
// };

// SELSECT AND DESELECT INPUTS WHEN OPEN NEXT QUESTION

let answer = undefined;

function getSelected (){
 
    if(inputA.checked){
        answer = inputA.id;
    }else if(inputB.checked){
        answer = inputB.id;
    }else if(inputC.checked){
        answer = inputC.id;
    }else if(inputD.checked){
        answer = inputD.id;
    }else{
        answer = undefined;
    }
     return answer;
};

function deselectAnswer() {
    input.forEach(answerEl => {
        answerEl.checked = false;
    });
    
};

// NEXT BUTTON WHERE IT STARTS AND ENDS ALMOST EVERYTHING

function showAlert(){

    let answer = getSelected();
    console.log(answer)

    if(currentQuiz < quizDataOne.length - 1 && answer !== undefined){
        currentQuiz ++;
        getSelected();
        startQuiz();
        validation();
        count++;
      }else if(answer === undefined) {
          audioOne.play()
          alert('Please, first check one of the fileds, or simply cancle the quiz');
          audioTwo.play()
        }else{
            let showBox = document.querySelector('.popup-background');
            showBox.classList.remove('shouUpPopup');
            results.classList.add('result', 'shouUpPopup');
            audioSuccsess.play();
            validation();
            if(arrAnswers.length >= 3){
                middleField.addEventListener('click', unlockFieldTwo)
                heading.innerText = 'Čestitamo! Osvojili ste dovoljno bodova za nastavak igre! Otklučajte polje Dolina kraljeva!'
            }else{
                audioFaliure.play();
                heading.innerText = 'Niste osvojili dovoljno bodova. Počnite ponovo!';
            }
            emptyArr();
            return;
        }
}

function validation () {

    if(answer === quizDataOne[count].correct ){
        arrAnswers.push(answer);
        // console.log(arrAnswers.length)
        finalResult.innerText = (arrAnswers.length); 
    }else if (arrAnswers.length === 0){
        finalResult.innerText = 0;
    }
}

const finalResult = document.querySelector('.final');
finalResult.innerText = (arrAnswers.length);

// STARTING WITH MIDDLE FIELD

function unlockFieldTwo () {
   
}


// FUNCTION THAT GET EMPTY ARRAY AND COUNT BEFORE ANOTHER ROUND

function emptyArr(){
    arrAnswers.length = 0;
    count = 0;
    return arrAnswers;
}
















