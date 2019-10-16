import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, score, changeScore }) => {
  
    return (
    <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
};
//propTypes help in debugging throwing specific error messages in react if the the props don`t receive the expected type of info

export default Counter;