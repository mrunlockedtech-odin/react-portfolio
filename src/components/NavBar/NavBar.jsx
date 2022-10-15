import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-xl navbar-light">
        <Link to='/about' className="navbar-brand">Naveen Bhatti, Jr.</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#toggleMobileMenu' aria-controls="toggleMobileMenu" aria-expanded='false' aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li>
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li>
              <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li>
              <Link className="nav-link" to='/contact'>Contact</Link>
            </li>
            <li>
              <Link className="nav-link" to='/resume'>Resume</Link>
            </li>
            <li>
              <Link className="nav-link" to='/projects'>Projects</Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default NavBar;