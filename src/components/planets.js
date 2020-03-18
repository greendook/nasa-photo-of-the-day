import React, { Component } from 'react';
import './planets.css';

class Planets extends Component {
  //   conststructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  render() {
    console.log(this.props.data);
    return (
      <div className="Planet">
        <section className="PlanetInfo">
          <h1>{this.props.data.title}</h1>
          <h4>{this.props.data.date}</h4>
          <img className="circular--square" src={this.props.data.url} alt="" />
          <div className="paddingtop">
            <b>{this.props.data.explanation}</b>
          </div>
        </section>
      </div>
    );
  }
}

export default Planets;
