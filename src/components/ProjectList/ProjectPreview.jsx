import { hyphenateWords } from "../../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {

  return (
    <div className="projectPreview">
      <img src={props.image} alt={props.title} />

      <section>
        <h3>{props.title}</h3>
        <Link to={hyphenateWords(props.title)}>
          <button className="btn btn-primary">Learn More</button>
        </Link>
      </section>

    </div>
  );
}

export default ProjectPreview;