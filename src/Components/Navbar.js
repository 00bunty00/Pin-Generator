import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Styles.css'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid mx-5">
                <ul className="navbar-nav">
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="/">Generate</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/savedpin">Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </>
    )
  }
}

export default Navbar