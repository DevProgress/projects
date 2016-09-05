import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProjectGridItem from './ProjectGridItem';
var ProjectData = require('./ProjectData.json');

class ProjectGrid extends Component {
	render() {
		var filteredProjectData;
		var props = this.props;

		filteredProjectData = ProjectData.filter(function(project) {
			return project.status === props.activeFilter || props.activeFilter === 'All';
		});

		return(
			<section className="projects-grid bg-light">
				<Grid>
					<Row>
						{ filteredProjectData.map(function(project, index) {
							return (
								<Col xs={12} sm={6} md={6} lg={4} key={index}>
									<ProjectGridItem 
										name={project.name}
										description={project.description}
										techStack={project.techStack}
										status={project.status}
									/>
								</Col>
							)
						})}
					</Row>
				</Grid>
			</section>
		)
	}
}

export default ProjectGrid;