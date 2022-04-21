const adviceNumber = document.querySelector('.card__header > span');
const cardQuote = document.querySelector('.card__quote');
const cardBtn = document.querySelector('.card__btn');

function askForRandomQuote() {
    fetch('https://api.adviceslip.com/advice')
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value);
        adviceNumber.innerHTML = value.slip.id;
        cardQuote.innerHTML = 'Loading...';
        setTimeout(() => {
            cardQuote.innerHTML = `“${value.slip.advice}”`;
        }, 400);
    })
    .catch(function(err) {
        // Une erreur est survenue
    });
}

cardBtn.addEventListener('click', askForRandomQuote);

askForRandomQuote();