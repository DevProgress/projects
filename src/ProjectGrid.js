import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import ProjectGridItem from './ProjectGridItem';
import Gridify from 'react-bootstrap-gridify';

var ProjectData = require('./ProjectData.json');

class ProjectGrid extends Component {

	buildComponentsList() {
		var filteredProjectData;
		var projectCards = [];
		var props = this.props;

		filteredProjectData = ProjectData.filter(function(project) {
			return project.status === props.activeFilter || props.activeFilter === 'All';
		});

		filteredProjectData.map(function(project, index) {
			return projectCards.push(
				<ProjectGridItem
					key={index}
					imageUrl={project.imageUrl}
					repoUrl={project.repoUrl}
					demoUrl={project.demoUrl}
					name={project.name}
					description={project.description}
					techStack={project.techStack}
					status={project.status}
				/>
			)
		});

		return projectCards;
	}

	render() {
		return(
			<section className="projects-grid">
				<Grid>
					<Gridify columns={{xs:1, sm:2, md:3, lg:3}} components={this.buildComponentsList()}/>
				</Grid>
			</section>
		)
	}
}

export default ProjectGrid;