
const ProjectPreview = (props) => {

  return (
    <div className="card">
      <img src={props.project.image} className="card-img-top" alt="..." />
      <div className="card-body text-bg-primary">
        <h5 className="card-title">{props.project.title}</h5>
        <p className="card-text">{props.project.description}</p>
        <div className="projButtons">
          {props.project.deploymentLink ?
                    <a href={props.project.deploymentLink} className="btn btn-secondary">Deployed App</a>:
                    ''
        }

          <a href={props.project.repositoryLink} className="btn btn-secondary">Github Repo</a>
        </div>

      </div>
    </div>
  );
}

export default ProjectPreview;