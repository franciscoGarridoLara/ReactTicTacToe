import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/style.css'

function Square(props){
    
        return (
            <button className='square' onClick={props.onClick}>
                {props.value}
            </button>
        );
    
}

export default Square;