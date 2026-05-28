const cards = [
    {
        question: "Quando o Brasil foi descoberto?",
        answer: "O Brasil foi descoberto em 22 de abril de 1500, pelo navegador português Pedro Álvares Cabral."
    },
    {
        question: "Quem foi Napoleão?",
        answer: "Napoleão Bonaparte (1769–1821) foi um líder militar e imperador francês que dominou grande parte da Europa, conhecido por suas reformas jurídicas e campanhas militares."
    },
    {
        question: "Qual foi a data da Guerra das Coreias?",
        answer: "A Guerra da Coreia ocorreu de 25 de junho de 1950 a 27 de julho de 1953, entre a Coreia do Norte (apoiada pela China e URSS) e a Coreia do Sul (apoiada pelos EUA e ONU)."
    }
];

let current = 0;

const card = document.getElementById('card');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const progressBar = document.getElementById('progress-bar');
const progressLabel = document.getElementById('progress-label');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnShow = document.getElementById('btn-show');

function loadCard(index) {
    card.classList.remove('flipped');
    btnShow.style.display = 'inline-block';

    questionText.textContent = cards[index].question;
    answerText.textContent = cards[index].answer;

    const percent = ((index + 1) / cards.length) * 100;
    progressBar.style.width = percent + '%';
    progressLabel.textContent = `${index + 1} / ${cards.length}`;

    btnPrev.disabled = index === 0;
    btnNext.disabled = index === cards.length - 1;
}

function showAnswer() {
    card.classList.add('flipped');
    btnShow.style.display = 'none';
}

function nextCard() {
    if (current < cards.length - 1) {
        current++;
        loadCard(current);
    }
}

function prevCard() {
    if (current > 0) {
        current--;
        loadCard(current);
    }
}

loadCard(current);
