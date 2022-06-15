import { Link } from "react-router-dom";

export const TopicNav = () => {
  return (
    <ul className="topic-links">
      <li>
        <Link to="/theory">
          <img src="./assets/theory-link.png" alt="theory link" />
        </Link>
      </li>
      <li>
        <Link to="/practise">
          <img src="./assets/practise-link.png" alt="practise link" />
        </Link>
      </li>
      <li>
        <Link to="/testing-task">
          <img src="./assets/test-link.png" alt="test link" />
        </Link>
      </li>
    </ul>
  );
};
