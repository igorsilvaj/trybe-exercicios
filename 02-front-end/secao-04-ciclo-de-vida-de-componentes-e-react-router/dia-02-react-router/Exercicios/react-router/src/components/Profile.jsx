import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Profile extends Component {
  test = () => {
    <Redirect to="/HowTo"/>
  }
  render() {
    const { teste } = this.props.match.params;
    return (
      <div>
        <p>Meu perfil: {this.props.name}</p>
        <p>{teste}</p>
        <button onClick={this.test}>Teste</button>
      </div>
    )
  }
}

export default Profile