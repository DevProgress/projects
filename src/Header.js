import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img src={logo} className="img-keycap img-responsive" alt="logo" />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;