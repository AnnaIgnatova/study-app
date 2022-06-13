import { Link } from 'react-router-dom';

export const NavBlock = () => {
  return (
    <nav>
      <ul>
        <li className="nav-link-container nav-link-container-active">
          <img src="./assets/study-active.png" alt="study icon" className="nav-link-icon" />
          <Link to="/main" className="nav-link nav-link-active">
            Обучение
          </Link>
        </li>
        <li className="nav-link-container">
          <img src="./assets/testing.png" alt="testing icon" className="nav-link-icon" />
          <Link to="/testing" className="nav-link">
            Тестирование
          </Link>
        </li>
        <li className="nav-link-container">
          <img src="./assets/create-course.png" alt="create icon" className="nav-link-icon" />
          <Link to="/create-course" className="nav-link">
            создать курс
          </Link>
        </li>
        <li className="nav-link-container">
          <img src="./assets/settings.png" alt="settings icon" className="nav-link-icon" />
          <Link to="/settings" className="nav-link">
            настройки
          </Link>
        </li>
      </ul>
    </nav>
  );
};
