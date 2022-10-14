import { Link } from "react-router-dom";


const NavBar = () => {
  return ( 
    <nav>
      <Link to='/about'>Naveen Bhatti, Jr.</Link>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
   );
}
 
export default NavBar;