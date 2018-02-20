import React from 'react';
import Square from './Square';

class Board extends React.Component {
    render() {
        return (
            <div>
                <div className='board-row'>
                    <Square squares={this.props.squares} id={0} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                    <Square squares={this.props.squares} id={1} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                    <Square squares={this.props.squares} id={2} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                </div>
                <div className='board-row'>
                    <Square squares={this.props.squares} id={4} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                    <Square squares={this.props.squares} id={5} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                    <Square squares={this.props.squares} id={6} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                </div>
                <div className='board-row'>
                    <Square squares={this.props.squares} id={7} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                    <Square squares={this.props.squares} id={8} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                    <Square squares={this.props.squares} id={9} activePlayer={this.props.activePlayer} flipTurn={this.props.flipTurn} />
                </div>
            </div>
        );
    }
}
export default Board;