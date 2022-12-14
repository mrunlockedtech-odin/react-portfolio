import ProjectList from "../../components/ProjectList/ProjectList";
import { projects } from "../../data/projects"

const Projects = (props) => {
  return (
    <div ref={props.projectsRef} id="projectsProfile">
      <h1>Projects</h1>
      <section id="projectBox">
          {projects.map(project =>
            <ProjectList project={project} />
          )}

      </section>
    </div>
  );
}

export default Projects;