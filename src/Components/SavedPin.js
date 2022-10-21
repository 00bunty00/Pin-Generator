import React, { Component } from 'react'
import DisplayPin from './DisplayPin'
import './Styles.css'

export class SavedPin extends Component {
  render() {
    return (
      <>
        <div className="container saved-pin-div">
            {this.props.pins.map((elem)=>{
              return(
                <DisplayPin key={elem.name} pinDetails={elem} deletePin={this.props.deletePin}/>
              )
            })}
        </div>
      </>
    )
  }
}

export default SavedPin