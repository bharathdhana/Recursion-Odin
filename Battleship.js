import ShipModule from './Ship.js';
import GameboardModule from './Gameboard.js';
import PlayerModule from './Player.js';

const { Ship } = ShipModule;
const { Gameboard } = GameboardModule;
const { Player } = PlayerModule;

class Battleship {
    constructor() {
        this.player1 = null;
        this.player2 = null;
        this.currentTurn = null;
    }

    initializeGame() {
        const board1 = new Gameboard();
        const board2 = new Gameboard();

        // Create ships
        const shipTypes = [
            { name: 'Battleship', length: 4 },
            { name: 'Cruiser', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Destroyer', length: 2 }
        ];

        // Setup player 1
        this.player1 = new Player('Player 1', board1);
        for (const shipType of shipTypes) {
            const ship = new Ship(shipType.name, shipType.length);
            let placed = false;
            let attempts = 0;
            const maxAttempts = 100;
            
            while (!placed && attempts < maxAttempts) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const isHorizontal = Math.random() > 0.5;
                placed = board1.placeShip(ship, row, col, isHorizontal);
                attempts++;
            }
        }

        // Setup player 2
        this.player2 = new Player('Player 2', board2);
        for (const shipType of shipTypes) {
            const ship = new Ship(shipType.name, shipType.length);
            let placed = false;
            let attempts = 0;
            const maxAttempts = 100;
            
            while (!placed && attempts < maxAttempts) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);
                const isHorizontal = Math.random() > 0.5;
                placed = board2.placeShip(ship, row, col, isHorizontal);
                attempts++;
            }
        }

        this.currentTurn = this.player1;
    }

    playRound(row, col) {
        const opponent = this.currentTurn === this.player1 ? this.player2 : this.player1;
        const result = this.currentTurn.attack(opponent, row, col);

        if (opponent.hasLost()) {
            return {
                result,
                gameOver: true,
                winner: this.currentTurn.name
            };
        }

        // Switch turns
        this.currentTurn = opponent;

        return {
            result,
            gameOver: false,
            nextPlayer: this.currentTurn.name
        };
    }

    getCurrentPlayer() {
        return this.currentTurn;
    }

    getGameState() {
        const opponent = this.currentTurn === this.player1 ? this.player2 : this.player1;
        return {
            currentPlayer: this.currentTurn.name,
            currentPlayerBoard: this.currentTurn.displayOwnBoard(),
            opponentBoard: opponent.displayOpponentBoard()
        };
    }
}

export default { Battleship };
