import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GeneratePin from './Components/GeneratePin'
import Navbar from './Components/Navbar'
import SavedPin from './Components/SavedPin'

export class App extends Component {

  constructor() {
    super();
    this.state = {
      pins: []
    }
  }

  addPin = (pin) => {
    let pinNo = 1;
    if(this.state.pins.length){
      pinNo = parseInt(this.state.pins[this.state.pins.length-1].name.slice(3)) + 1;
    }
    let name = 'pin' + pinNo;
    this.setState({pins: [...this.state.pins, {name: name, pin: pin}]})
  }

  deletePin = (pin) => {
    console.log(pin[0]);
    this.setState({pins : this.state.pins.filter(e=>e!==pin)});
  }

  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = '/' element= {<GeneratePin pins={this.state.pins} addPin={this.addPin}/>}/>
          <Route exact path = '/savedpin' element= {<SavedPin pins={this.state.pins} deletePin={this.deletePin} />}/>
        </Routes>
      </Router>
    )
  }
}

export default App