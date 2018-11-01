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
  constructor() {
    super()
    this.state = {
      redOn: false,
      yellowOn: false,
      greenOn: true
    }
  }

  timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  slow = () => {  
    this.setState({
      redOn: false,
      yellowOn: true,
      greenOn: false
    })
  }

  stop = () => {
    setTimeout(() => {
      this.setState({
        redOn: true,
        yellowOn: false,
        greenOn: false
      })
    }, 2000)
  }

  async componentDidMount() {
    await this.timeout(2000)
    await this.slow()
    this.stop()
  }

  render() {
    const { redOn, yellowOn, greenOn } = this.state
     return (
      <Light>
        <div className={redOn ? 'light red' : 'light'}></div>
        <div className={yellowOn ? 'light yellow' : 'light'}></div>
        <div className={greenOn ? 'light green' : 'light'}></div>
      </Light>
    );
  }
}

export default App;
