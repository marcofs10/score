
const reset = document.querySelector('#reset')
const sets = document.querySelector('#setNum')
let run = false

const player1 = {
    btn: document.querySelector('#up1'),
    display: document.querySelector('#pl1'),
    score: 0
}

const player2 = {
    btn: document.querySelector('#up2'),
    display: document.querySelector('#pl2'),
    score: 0
}

function updateScore(player, opponent) {
    if (run == true) {
        player.score++
        player.display.innerText = player.score
    }
    if (player.score === parseInt(sets.value)) {
        run = false
        player.display.classList.add('win')
        opponent.display.classList.add('loose')
    }
}

player1.btn.addEventListener('click', function () {
    updateScore(player1, player2)
})
player2.btn.addEventListener('click', function () {
    updateScore(player2, player1)
})
reset.addEventListener('click', function () {
    player1.score = 0
    player2.score = 0
    player1.display.innerText = player1.score
    player2.display.innerText = player2.score
    sets.value = null
    run = false
    player2.display.classList.remove('win', 'loose')
    player1.display.classList.remove('loose', 'win')
})
sets.addEventListener('change', function () {
    if (sets.value != '') {
        run = true
    }
})
