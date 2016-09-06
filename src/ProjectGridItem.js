import React, {Component} from 'react';


class ProjectGridItem extends Component {
  render() {
    var badgeClass = this.props.status === 'Shipped' ?
      'badge-success' : 'badge-default';

    return(

        <div className="card project-card">
          <figure className="project-card-image"></figure>
          <div className="project-card-body">
            <h4>{this.props.name}</h4>
            <h2></h2>
            <p className="text-secondary">{this.props.description}</p>
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
                <a href="#">
                  <i className="fa fa-lg fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default ProjectGridItem;
