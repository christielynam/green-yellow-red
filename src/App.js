import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

const Light = styled.div`
  width: 200px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black
`

class App extends Component {

  render() {
     return (
      <Light>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
      </Light>
    );
  }
}

export default App;
