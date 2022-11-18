// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    };
    
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
   }
   
   fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json())
      .then((data) => this.setState({ joke: data.joke }));
  }

  newJoke = () => {
    const { joke } = this.state;
      return <span>{joke}</span>
  }

  render() {

    return (
      <div className="App">
        <button type='button' onClick={this.newJoke}>newJoke</button>
      </div>
    );
  }
}

export default App;