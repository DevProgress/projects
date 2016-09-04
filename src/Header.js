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
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <h1 className="h2">Catchy Heading</h1>
                <hr className="hr-stubby"></hr>
                <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod eligendi architecto ducimus animi similique.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;