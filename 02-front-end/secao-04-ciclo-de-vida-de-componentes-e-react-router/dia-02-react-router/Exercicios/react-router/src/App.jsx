import React from 'react';
import './App.css';
import Home from './components/Home.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/About';
import Howto from './components/Howto';
import Profile from './components/Profile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/howto" component={Howto} />
          <Route path="/profile/:teste" render={(props) => <Profile {...props} name="Igor"/>} />
          {/* <Route path="/profile"><Profile /></Route> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
