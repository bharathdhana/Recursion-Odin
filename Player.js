class Player {
    constructor(name, gameboard) {
        this.name = name;
        this.gameboard = gameboard;
    }

    attack(opponent, row, col) {
        const result = opponent.gameboard.receiveAttack(row, col);
        return result;
    }

    hasLost() {
        return this.gameboard.allShipsSunk();
    }

    displayOwnBoard() {
        return this.gameboard.displayBoard(true);
    }

    displayOpponentBoard() {
        return this.gameboard.displayBoard(false);
    }
}

export default { Player };
