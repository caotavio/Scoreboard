import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

//If you write the 1st line like this: import React from 'react'... FOR CLASS COMPONENTS ONLY
//You will have to write the 7th line like this: class App extends React.Component
class App extends Component {
  state = {
    players: [
      {
        name: "Otavio",
        score: 0,
        id: 1
      },
      {
        name: "Taina",
        score: 0,
        id: 2
      },
      {
        name: "Pablo",
        score: 0,
        id: 3
      },
      {
        name: "Raquel",
        score: 0,
        id: 4
      }
    ]
  };

  //player id counter (number of the last id we have on the array above)
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => { //this parameter is called delta because delta is the name of a variation of a function
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      if (name !== "") {
        return {
          players: [
            ...prevState.players, //the spread operator represents the players list before adding the new player
            /*this serves to merge the existing objects with the newly added player objects... if taken out, after submission, only the
            added player would appear*/
            {
              name: name,
              score: 0,
              id: this.prevPlayerId += 1
            }
          ]
        }
      } else {
        return window.alert("Please insert a name!")
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  render() {
    const highScore = this.getHighScore();
    
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}  // is a player's 'score' prop equal to the high score?       
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;