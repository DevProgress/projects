import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProjectGridItem from './ProjectGridItem';
import ProjectGridFilter from './ProjectGridFilter';
var ProjectData = require('./ProjectData.json');

class ProjectGrid extends Component {
	render() {
		var filteredProjectData;
		var props = this.props;

		filteredProjectData = ProjectData.filter(function(project) {
			return project.status === props.activeFilter || props.activeFilter === 'All';
		});

		return(
			<section className="projects-grid">
				<Grid>
					<Row>
						<Col xs={12}>
							<ProjectGridFilter activeFilter={this.props.activeFilter} />
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1}>
							<ul className="project-card-list list-unstyled">
							{ filteredProjectData.map(function(project, index) {
								return (
									<ProjectGridItem
										key={index}
										repoUrl={project.repoUrl}
										demoUrl={project.demoUrl}
										name={project.name}
										description={project.description}
										techStack={project.techStack}
										status={project.status}
									/>
								)
							})}
							</ul>
						</Col>
					</Row>
				</Grid>
			</section>
		)
	}
}

export default ProjectGrid;