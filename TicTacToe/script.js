let currentPlayer = 'X';
let gameEnded = false;

function makeMove(cell) {
    if (cell.innerText === '' && !gameEnded) {
        cell.innerText = currentPlayer;
        if (checkWin()) {
            alert(currentPlayer + ' wins!');
            gameEnded = true;
        } else if (checkTie()) {
            alert('It\'s a tie!');
            gameEnded = true;
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const cells = document.querySelectorAll('.cell');
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText !== '' && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
        if (cell.innerText === '') {
            return false;
        }
    }
    return true;
}