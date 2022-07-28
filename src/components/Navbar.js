import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/realtime">Real Time typing</Link>
        </li>
        <li>
          <Link to="/dynamic">Changing text</Link>
        </li>
        <li>
          <Link to="/projects">More Projects</Link>
        </li>
      </ul>
    </navbar>
  );
};

export default Navbar;
