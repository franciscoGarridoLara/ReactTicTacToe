import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './Board';

class Game extends React.Component{
    render() {
        return (
            <div className="game">
                <div className='game-board'>
                    <Board/>
                </div>
                <div className='game-info'>
                    <div>{/*status*/}</div>
                    <ol>{/*todo*/}</ol>
                </div>
            </div>




        );
    }

}

export default Game;