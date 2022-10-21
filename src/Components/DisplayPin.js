import React, { Component } from 'react'
import './Styles.css'

export class DisplayPin extends Component {
  render() {
    return (
      <>
        <div className="container row my-4">
            <div className="col-2 pin-box mx-2">
                {this.props.pinDetails.name}
            </div>
            <div className="col pin-box mx-2">
                {this.props.pinDetails.pin[0]}
            </div>
            <div className="col pin-box mx-2">
                {this.props.pinDetails.pin[1]}
            </div>
            <div className="col pin-box mx-2">
                {this.props.pinDetails.pin[2]}
            </div>
            <div className="col pin-box mx-2">
                {this.props.pinDetails.pin[3]}
            </div>
            <div className="col pin-box mx-2">
                {this.props.pinDetails.pin[4]}
            </div>
            
            <div className="col">
                <button className="btn btn-danger rounded-1"  onClick={() => this.props.deletePin(this.props.pinDetails)}>
                    DELETE
                </button>
            </div>
        </div>
      </>
    )
  }
}

export default DisplayPin