import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { filterGrid } from './ProjectGridActions';

class ProjectGridFilter extends Component {
  setFilter(filterType) {
    filterGrid(filterType);
  }

  render() {
    return (
      <div className="project-grid-filter">
        <ButtonToolbar>
          <ButtonGroup>
            <Button active={this.props.activeFilter === 'All'} onClick={this.setFilter.bind(this, 'All')}>All</Button>
            <Button active={this.props.activeFilter === 'Live'} onClick={this.setFilter.bind(this, 'Live')}>Live</Button>
            <Button active={this.props.activeFilter === 'In Progress'} onClick={this.setFilter.bind(this, 'In Progress')}>In Progress</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}

export default ProjectGridFilter;