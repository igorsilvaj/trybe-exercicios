import './App.css';
import Image from './components/Image';
import cat from './cat.jpg'
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Image source={cat} alternativeText="Cute cat staring" />
      </div>
    );
  }
}

export default App;
