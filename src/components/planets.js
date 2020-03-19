import React, { Component } from 'react';
import './planets.css';
import styled from 'styled-components';

const Planet = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  background-color: #747e80;
  color: white;
`;
const PlanetInfo = styled.section`
  box-sizing: border-box;
  margin: auto;
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: #2b3e42;
`;
const PaddingTop = styled.div`
  padding-top: 3%;
`;
const CircularSquare = styled.img`
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
`;
class Planets extends Component {
  //   conststructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  render() {
    console.log(this.props.data);
    return (
      <Planet>
        <PlanetInfo>
          <h1>{this.props.data.title}</h1>
          <h4>{this.props.data.date}</h4>
          <CircularSquare src={this.props.data.url} alt="" />
          <PaddingTop>
            <b>{this.props.data.explanation}</b>
          </PaddingTop>
        </PlanetInfo>
      </Planet>
    );
  }
}

export default Planets;
