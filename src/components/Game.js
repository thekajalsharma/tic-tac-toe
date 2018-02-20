import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            squares: Array(9).fill(null),
            activePlayer: true
        }
        this.flipTurn = this.flipTurn.bind(this);
        this.checkVictory = this.checkVictory.bind(this);
    }

    flipTurn() {
        const activePlayer = !this.state.activePlayer;
        console.log("Next Turn :");
        console.log(activePlayer);
        this.setState({ activePlayer });
    }

    checkVictory() {
        const squares = this.state.squares;
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const winner = this.checkVictory();
        let headerText = `Player ${this.state.activePlayer ? 'X' : '0'}: Please proceed`
        if (winner != null) {
            headerText = `Winner: Player ${winner}`;
        }
        return (
            <div>
                <p>{headerText}</p>
                <div>
                    <Board squares={this.state.squares} activePlayer={this.state.activePlayer} flipTurn={this.flipTurn} />
                </div>
            </div>
        );
    }
}
export default Game;