import ProjectList from "../../components/ProjectList/ProjectList";
import { projects } from "../../data/projects"

const Projects = (props) => {
  return (
    <div ref={props.projectsRef} id="projectsProfile">
      <h1>Projects</h1>
      <ul>
        {projects.map(project =>
          <ProjectList project={project} />
        )}
      </ul>
    </div>
  );
}

export default Projects;