// App.js
import React, { Component } from 'react';
import './App.css';
import Joke from './components/Joke';
import RandomUser from './components/RandomUser';
import RickMorty from './components/RickMorty';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }
  
  fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results })
      })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <RandomUser />
        <Joke />
        <RickMorty characters={characters} />
      </div>
    );
  }
}

export default App;