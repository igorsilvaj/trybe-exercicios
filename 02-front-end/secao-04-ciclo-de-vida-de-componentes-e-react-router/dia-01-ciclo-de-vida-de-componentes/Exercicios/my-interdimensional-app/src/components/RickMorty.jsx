import React, { Component } from 'react'

class RickMorty extends Component {
  render() {
    return (
      <div>
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {this.props.characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name} />
              </div>
            )
          })}
        </div></div>
    )
  }
}

export default RickMorty