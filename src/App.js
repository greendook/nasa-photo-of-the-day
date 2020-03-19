import React from 'react';
import Planets from './components/planets';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  // Make a request for a user with a given ID
  state = {
    planets: []
  };
  componentDidMount() {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=VEER5kaKrAblNjRv96AMrzV5wY1WE5mpThWAedMU'
      )
      .then(res => {
        console.log(res);
        this.setState({ planets: res.data });
      });
  }

  render() {
    return (
      <div className="App">
        <Planets data={this.state.planets} />
      </div>
    );
  }
}
export default App;
