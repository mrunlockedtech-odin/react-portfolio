import { Link } from "react-router-dom";
import { useState } from "react";


const NavBar = (props) => {
  const [navClick, setNavClick] = useState(true)

  const onClickNav = () => {
    setNavClick(!navClick)
  }

  return (
    <div className="container-fluid fixed-top bg-light" style={{backgroundColor:'e3f2fd'}}>
      <nav className="navbar navbar-expand-xl navbar-light">
        <Link to='/' className="navbar-brand" onClick={() => props.scrollToSection(props.homeRef)}>NB</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#toggleMobileMenu' aria-controls="toggleMobileMenu" aria-expanded='false' aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="toggleMobileMenu" onClick={() => onClickNav()}>
          <ul className="navbar-nav ms-auto text-center">
            <li>
              <Link onClick={() => props.scrollToSection(props.aboutRef)} className="nav-link" to='/about' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</Link>
            </li>
            <li>
              <Link onClick={() => props.scrollToSection(props.contactRef)} className="nav-link" to='/contact' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</Link>
            </li>
            <li>
              <Link onClick={() => props.scrollToSection(props.resumeRef)} className="nav-link" to='/resume' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Resume</Link>
            </li>
            <li>
              <Link onClick={() => props.scrollToSection(props.projectsRef)} className="nav-link" to='/projects' data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Projects</Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default NavBar;