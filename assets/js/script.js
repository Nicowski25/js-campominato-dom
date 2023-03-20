//L'utente clicca su un bottone che genererà  una griglia di gioco quadrata. Ogni cella ha un numero progressivo da 1 a 100. Ci saranno quindi 10 caselle x 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette in console un messaggio con il numero della cella cliccata.

//identifico il bottone
const playBtn = document.getElementById('playbtn')
console.log(playBtn);

//funzione per definire la difficoltà e le caselle relative ad essa
function setDifficulty(value) {
    if (value == 1) {
        return 49
    } else if (value == 2) {
        return 81
    } else {
        return 100
    }
}

//creiamo la funzione onclick
function game() {
    //identifichiamo il form-select e prendiamo il valore che inserisce l'utente
    let difficultyInput = document.getElementById('difficulty').value
    const boxSize = setDifficulty(difficultyInput);
    //indentifico il container dalla dom
    const container = document.querySelector('.container')
    container.innerHTML = ''
    for (let i = 1; i <= boxSize; i++) {
        //impostiamo le box da appendere
        const boxCreate = `<div class="box"> ${i} </div>`
        //inseriamo le box nel container
        container.innerHTML += boxCreate
    }
}

function boxColor() {
    const box = document.querySelectorAll('.box')
    console.log(box);
    for (let i = 0; i < box.length; i++) {
        const thisBox = box[i];
        const thisBoxValue = thisBox.innerHTML
        thisBox.addEventListener('click', function() {
            thisBox.classList.toggle('active')
            console.log(thisBoxValue);
        }
        )
    }
}

playBtn.addEventListener('click', function() {
    game()
    boxColor()
    bombs()
}    
)

function bombs() {
    let difficultyInput = document.getElementById('difficulty').value
    const max_value = setDifficulty(difficultyInput);
    console.log(max_value);
    const boxPosition = document.querySelectorAll('.box')
    for (let i = 0; i < 16; i++) {
        const bombPosition = Math.floor(Math.random() * (max_value - 1) + 1)
        console.log(bombPosition);
        console.log(boxPosition[i]);
        
    }

}



