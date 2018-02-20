import React from 'react';
import Square from './Square';

const Board = (props) => {
    return (
        <div>
            <div className='board-row'>
                <Square squares={props.squares} id={0} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
                <Square squares={props.squares} id={1} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
                <Square squares={props.squares} id={2} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
            </div>
            <div className='board-row'>
                <Square squares={props.squares} id={4} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
                <Square squares={props.squares} id={5} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
                <Square squares={props.squares} id={6} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
            </div>
            <div className='board-row'>
                <Square squares={props.squares} id={7} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
                <Square squares={props.squares} id={8} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
                <Square squares={props.squares} id={9} activePlayer={props.activePlayer} flipTurn={props.flipTurn} />
            </div>
        </div>
    );
}

export default Board;