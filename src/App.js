import React, { Component } from 'react';
import ProjectGridStore from './ProjectGridStore';
import Header from './Header';
import ProjectGrid from './ProjectGrid';


class App extends Component {
	constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = ProjectGridStore.getActiveFilter();
  }

  componentDidMount() {
    ProjectGridStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ProjectGridStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState(ProjectGridStore.getActiveFilter());
  }

  render() {
    return (
      <div className="App">
        <Header activeFilter={this.state.activeGridFilter} />
        <ProjectGrid activeFilter={this.state.activeGridFilter} />
      </div>
    );
  }
}

export default App;
