import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';
import PropTypes from 'prop-types';

const Header = ({ players, title }) => {
    return (
      <header>
        <Stats players={players} />
        <h1>{title}</h1>
        <Stopwatch />
      </header>
    );
  }
  
  Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
  };
  //propTypes help in debugging throwing specific error messages in react if the the props don`t receive the expected type of info

  Header.defaultProps = {
    title: 'Scoreboard'
  };

  export default Header;