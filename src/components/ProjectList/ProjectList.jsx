import ProjectPreview from "./ProjectPreview";

const ProjectList = (props) => {
  return (
    <li>
      <ProjectPreview title={props.project.title} image={props.project.image}/>
    </li>
  );
}

export default ProjectList;