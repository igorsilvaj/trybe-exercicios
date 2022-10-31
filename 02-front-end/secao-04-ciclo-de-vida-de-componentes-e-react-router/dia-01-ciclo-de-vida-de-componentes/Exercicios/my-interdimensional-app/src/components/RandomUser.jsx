import React, { Component } from 'react';

class RandomUser extends Component {
  state = {
    user: {},
    loading: true,
  };

  async componentDidMount() {
    const fetchAPI = await fetch('https://api.randomuser.me/');
    const data = await fetchAPI.json();
    this.setState({
      user: data,
      loading: false, 
    });
  }

  renderUser = () => {
    return (
      <div>
        <p>
          {this.state.user.results[0].name.first}
        </p>
      </div>
    )
  }

  render() {
    const {loading} = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        {loading ? loadingElement : this.renderUser() }
      </div>
    )
  }
};

export default RandomUser;