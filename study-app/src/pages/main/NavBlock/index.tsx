import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NavBlock = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="main-nav-list">
        <li className="nav-link-container nav-link-container-active">
          <img src="./assets/study-active.png" alt="study icon" className="nav-link-icon" />
          <Link to="/main" className="nav-link nav-link-active">
            {t('nav.study')}
          </Link>
        </li>
        <li className="nav-link-container">
          <img src="./assets/testing.png" alt="testing icon" className="nav-link-icon" />
          <Link to="/testing" className="nav-link">
            {t('nav.testing')}
          </Link>
        </li>
        <li className="nav-link-container">
          <img src="./assets/create-course.png" alt="create icon" className="nav-link-icon" />
          <Link to="/create-course" className="nav-link">
            {t('nav.createCourse')}
          </Link>
        </li>
        <li className="nav-link-container">
          <img src="./assets/settings.png" alt="settings icon" className="nav-link-icon" />
          <Link to="/settings" className="nav-link">
            {t('nav.settings')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
