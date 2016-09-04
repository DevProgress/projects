import React, { Component } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

class ProjectGridFilter extends Component {
	render() {
		return (
			<ButtonToolbar className="project-grid-filter">
	      <ButtonGroup>
	        <Button bsStyle="secondary">All</Button>
	        <Button bsStyle="secondary">Shipped</Button>
	        <Button bsStyle="secondary">In Progress</Button>
	      </ButtonGroup>
	    </ButtonToolbar>
		)
	}
}

export default ProjectGridFilter;