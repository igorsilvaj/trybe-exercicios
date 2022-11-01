import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <p>
          <Link to="/About">About</Link>
        </p>
        <p>
          <Link to="/HowTo">HowTo</Link>
        </p>
        <p>
          <Link to="/Profile">Profile</Link>
        </p>

      </div>
    )
  }
}

export default Home;