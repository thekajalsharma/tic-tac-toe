import React from 'react';
import '../css/game.css';

class Square extends React.Component {

    handleButtonClick(e) {
        console.log("button clicked");
        const id = this.props.id;
        this.props.squares[id] = 'X';
        this.button.innerHTML = this.props.activePlayer ? 'X' : '0';
        this.props.flipTurn();
    }

    render() {
        return (
            <button ref={(input) => this.button = input} className='square' onClick={(e) => this.handleButtonClick(e)}>
            </button>
        );
    }
}
export default Square;