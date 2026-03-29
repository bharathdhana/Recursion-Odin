import ShipModule from './Ship.js';
const { Ship } = ShipModule;

class Gameboard {
    constructor(size = 10) {
        this.size = size;
        this.grid = Array(size).fill(null).map(() => Array(size).fill(null));
        this.shots = new Set();
        this.ships = [];
    }

    placeShip(ship, row, col, isHorizontal = true) {
        if (!this.isValidPlacement(ship, row, col, isHorizontal)) {
            return false;
        }

        for (let i = 0; i < ship.length; i++) {
            if (isHorizontal) {
                this.grid[row][col + i] = ship;
            } else {
                this.grid[row + i][col] = ship;
            }
        }

        this.ships.push(ship);
        return true;
    }

    isValidPlacement(ship, row, col, isHorizontal) {
        if (isHorizontal) {
            if (col + ship.length > this.size) return false;
            for (let i = 0; i < ship.length; i++) {
                if (this.grid[row][col + i] !== null) return false;
            }
        } else {
            if (row + ship.length > this.size) return false;
            for (let i = 0; i < ship.length; i++) {
                if (this.grid[row + i][col] !== null) return false;
            }
        }
        return true;
    }

    receiveAttack(row, col) {
        const key = `${row},${col}`;
        if (this.shots.has(key)) {
            return 'already hit this spot';
        }

        this.shots.add(key);

        if (this.grid[row][col] !== null) {
            this.grid[row][col].hit();
            return 'hit';
        }

        return 'miss';
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }

    getShips() {
        return this.ships;
    }

    displayBoard(showShips = true) {
        let display = '  ';
        for (let i = 0; i < this.size; i++) {
            display += i + ' ';
        }
        display += '\n';

        for (let row = 0; row < this.size; row++) {
            display += row + ' ';
            for (let col = 0; col < this.size; col++) {
                const key = `${row},${col}`;
                if (this.shots.has(key)) {
                    if (this.grid[row][col] !== null) {
                        display += 'X ';
                    } else {
                        display += 'O ';
                    }
                } else if (showShips && this.grid[row][col] !== null) {
                    display += 'S ';
                } else {
                    display += '~ ';
                }
            }
            display += '\n';
        }

        return display;
    }
}

export default { Gameboard };
