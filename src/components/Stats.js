import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ players }) => {

    const totalPlayers = players.length;

    const totalPoints = players.reduce( (total, player) => {
        return total + player.score;
    }, 0);
    /*To calculate the total points a good solution is the reduce() method that takes two parameters, one is a callback function [that
    that takes two parameters: the accumulator (total), and the current item being processed in the array (player)] and the other is
    the intial value for the acumulator, in this case is 0*/

    return (
        <table className="stats">
        <tbody>
            <tr>
            <td>Players:</td>
            <td>{ totalPlayers }</td>
            </tr>
            <tr>
            <td>Total Points:</td>
            <td>{ totalPoints }</td>
            </tr>
        </tbody>
        </table>
    );
}

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};
//propTypes help in debugging throwing specific error messages in react if the the props don`t receive the expected type of info

export default Stats;