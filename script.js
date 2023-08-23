// TO call an element with a class we use query selector

// calling the Button in the javaScript
const clickMeButton = document.querySelector(".js-btn");
// calling the error display in javascipt
const errorDisplay = document.querySelector('.js-error');
// TO call an element with an id we use get element by id


const questionDisplay = document.getElementById('js-question-display');
const answerDisplay = document.getElementById('js-answer-display');


const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

function removeError() {
    setTimeout(() => {
        errorDisplay.style.display = 'none';
    }, 2000);
}

async function generateJokes() {
    try {
        const request = await fetch(apiUrl);
        let response = await request.json(); 
        questionDisplay.innerText = response.setup;
        answerDisplay.innerText = response.punchline;

    } catch (error) {
        errorDisplay.style.display = 'block';
        removeError();
    };

};

clickMeButton.addEventListener('click', () => {
    generateJokes();
});

