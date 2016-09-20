import React, { Component } from 'react';
import logo from './logo.svg';
import ProjectGridFilter from './ProjectGridFilter';

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
                <h1 className="h2">
                  We're Making Progress
                </h1>    
                <hr className="hr-stubby"></hr>   
                <p className="lead text-muted">Want to see the progress DevProgress is making? Check out the projects that are live right now, and those that are in the works</p>   
              </div>    
            </div>    
            <div className="row">   
              <div className="col-sm-12">   
                <ProjectGridFilter activeFilter={this.props.activeFilter} />    
              </div>    
            </div>    
          </div>    
        </section>
      </div>
    );
  }
}

export default Header;