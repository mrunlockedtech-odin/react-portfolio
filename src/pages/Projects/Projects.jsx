import ProjectList from "../../components/ProjectList/ProjectList";
import { projects } from "../../data/projects"

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map(project =>
          <ProjectList project={project} />
        )}
      </ul>
    </>
  );
}

export default Projects;