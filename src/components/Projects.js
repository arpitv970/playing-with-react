import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1>List of projects so far</h1>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>Submit Name</li>
        <li>Retyping</li>
      </ul>
      <h1>Upcoming projects</h1>
      <ul>
        <li>Pomodoro Clock</li>
        <li>Todo App</li>
        <li>Sorting the bars using various algos</li>
      </ul>
    </div>
  );
};

export default Projects;
