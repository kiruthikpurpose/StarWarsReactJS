import './App.css';
import React from 'react';

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      height: null,
      homeworld: null,
      homeworldName: null,
      films: [],
      loadedCharacter: false
    };
  }

  getNewCharacter() {
    const randomNum = Math.round(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNum}/`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true
        });
        return fetch(data.homeworld);
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          homeworldName: data.name
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.loadedCharacter &&
          <div>
            <h1>{this.state.name}</h1>
            <p>Height: {this.state.height} cm</p>
            <p>Homeworld: {this.state.homeworldName} (<a href={this.state.homeworld} target="_blank" rel="noopener noreferrer">Link</a>)</p>
            <h3>Films:</h3>
            <ul>
              {this.state.films.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          </div>
        }

        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
