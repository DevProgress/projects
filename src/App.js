import React, { Component } from 'react';
import Header from './Header';
import ProjectGrid from './ProjectGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProjectGrid/>
      </div>
    );
  }
}

export default App;
