import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <desc className="home-desc">
        This React Web App is to list down the projects that helps to improve at
        fundamentals of Reactjs
      </desc>
      <div className="realtime">
        <h1>List of projects so far</h1>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/realtime">Realtime typing</Link>
          </li>
          <li>
            <Link to="/dynamic">Changing text</Link>
          </li>
        </ul>
        <h1>Upcoming projects</h1>
        <ul>
          <li>Pomodoro Clock</li>
          <li>Todo App</li>
          <li>Sorting the bars using various algos</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
