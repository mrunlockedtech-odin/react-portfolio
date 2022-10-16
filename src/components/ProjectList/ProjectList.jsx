import ProjectPreview from "./ProjectPreview";

const ProjectList = (props) => {
  return (
    <li>
      <ProjectPreview project={props.project}/>
    </li>
  );
}

export default ProjectList;