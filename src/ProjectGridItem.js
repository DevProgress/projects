import React, {Component} from 'react';


class ProjectGridItem extends Component {
  handleClick(event) {
    var link = event.currentTarget.href;
    var windowUrl = window.location.toString();

    if(link === windowUrl) {
      event.preventDefault();
    }
  }

  render() {
    var badgeClass = this.props.status === 'Live' ?
      'badge-success' : 'badge-default';

    var projectLinkUrl = this.props.demoUrl.length > 0 ?
      this.props.demoUrl : '';

    var projectLinkText = this.props.demoUrl.length > 0 ?
      '(' + this.props.demoUrl + ')' : 'No Link Available'

    return(

        <li className="card project-card">
          <div className="project-card-body">
            <a className="project-card-title" onClick={ this.handleClick } href={projectLinkUrl} >
              <h3 className="project-name">{this.props.name}
              <span className="project-card-link text-muted">{projectLinkText}</span>
              </h3>
            </a>
            <p className="lead text-muted">{this.props.description}</p>
            <ul className="list-inline project-tech-stack">
              { this.props.techStack.map(function(technology, index) {
                return <li key={index} className="text-muted list-inline-item">{ technology }</li>
              })}
            </ul>
          </div>
          <hr className="hr-decorative"/>
          <div className="project-card-footer clearfix text-right">
            <ul className="project-card-footer-list left list-inline pull-left">
              <li>
                <span className={"badge dp-badge text-light " + badgeClass }>
                  { this.props.status }
                </span>
              </li>
            </ul>
            <ul className="project-card-footer-list right list-inline pull-right">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-lg fa-share"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" href={this.props.repoUrl}>
                  <i className="fa fa-lg fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </li>
    )
  }
}

export default ProjectGridItem;
