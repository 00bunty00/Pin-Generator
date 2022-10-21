import React, { Component } from 'react';

export class GeneratePin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pin: []
    }
  }

  genEachPin = () => {
    let tempPin = [];
    let temp;
    for(let i = 0; i<4; i++){
        temp = Math.floor(Math.random()*10);
        if(tempPin.length){
            while(temp === tempPin[tempPin.length-1]){
                temp = Math.floor(Math.random()*10);
            }
        }
        tempPin.push(temp);
    }
    if(((tempPin[1] - tempPin[0] === 1) && (tempPin[2] - tempPin[1] === 1)) ||
        ((tempPin[0] - tempPin[1] === 1) && (tempPin[1] - tempPin[2] === 1))){
        tempPin[1] = Math.floor(Math.random()*10)
        while(tempPin[1] === tempPin[0] || tempPin[1] === tempPin[2]){
            tempPin[1] = Math.floor(Math.random()*10);
        }    
    }
    if(((tempPin[2] - tempPin[1] === 1) && (tempPin[3] - tempPin[2] === 1)) ||
        ((tempPin[1] - tempPin[2] === 1) && (tempPin[2] - tempPin[3] === 1))){
        tempPin[2] = Math.floor(Math.random()*10)
        while(tempPin[2] === tempPin[1] || tempPin[2] === tempPin[3]){
            tempPin[2] = Math.floor(Math.random()*10);
        }
    }
    let str = ''+ tempPin[0] + tempPin[1] + tempPin[2] + tempPin[3]
    return str;
  }

  appendPin =  () => {
    let tempPin = this.genEachPin()
    for(let i = 0;i< this.state.pin.length;i++){
      if(this.state.pin[i] === tempPin){
        tempPin = this.genEachPin();
        i = -1;
      }
    }
    console.log(tempPin)
    return tempPin
    // this.setState({pin: [...this.state.pin,tempPin]}, ()=> {
    //   console.log(this.state.pin)
    // });
  }

  generatePin = () => {
    let arr = []
    for(let i = 0; i< 5; i++){
      arr.push(this.appendPin());
    }
    this.setState({pin: [...arr]}, ()=> {
        console.log(this.state.pin)
    });
  }

  savePin = () => {
    let tempStr1 = '';
    let count = 0;
    for(let i = 0; i< 5; i++){
      tempStr1 += this.state.pin[i];
    }
    for(let i = 0; i< this.props.pins.length; i++){
      let tempStr2 = '';
      for(let j = 0; j< 5; j++){
        tempStr2 += this.props.pins[i].pin[j];
      }
      if(tempStr1 === tempStr2){
        count++;
      }
    }
    if(count>0){
      alert('Thid pin is already in use. Try generating a different pin');
    } else {
      if(this.state.pin.length){
        this.props.addPin(this.state.pin);
      } else {
        alert('Generate a Pin first');
      }
    }
    this.setState({pin: []})
  }


  render() {
    return (
      <>
        <div className="container gen-pin-div">
          <div className="container row my-4">
            <div className="col pin-box mx-2">
                {this.state.pin[0]}
            </div>
            <div className="col pin-box mx-2">
                {this.state.pin[1]}
            </div>
            <div className="col pin-box mx-2">
                {this.state.pin[2]}
            </div>
            <div className="col pin-box mx-2">
                {this.state.pin[3]}
            </div>
            <div className="col pin-box mx-2">
                {this.state.pin[4]}
            </div>
          </div>
          <div className="container row">
            <button className="btn btn-outline-primary col mx-2" onClick={()=>this.generatePin()}>GENERATE</button>
            <button className="btn btn-primary col mx-2" onClick={()=>this.savePin()}>SAVE</button>
          </div>
        </div>
      </>
    )
  }
}

export default GeneratePin