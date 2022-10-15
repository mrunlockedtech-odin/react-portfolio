import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import { findProject } from "../../utilities/findProject";

const ProjectDetails = () => {
  const params = useParams()
  const currentProject = findProject(params.projectDetails)
  return ( 
    <>
    <h1>{currentProject.title}</h1>
    <p>{currentProject.description}</p>
    <img src={currentProject.image} alt={currentProject.title} />
    <a href={currentProject.deploymentLink}><button>Deployed Site</button></a>
    <a href={currentProject.repositoryLink}><button>Github Site</button></a>
    
    </>
   );
}
 
export default ProjectDetails;