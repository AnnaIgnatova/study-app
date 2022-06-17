import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export interface NavBlockProps {
  route: string;
}

export const NavBlock = (props: NavBlockProps) => {
  const { t } = useTranslation();
  const { route } = props;
  return (
    <nav>
      <ul className="main-nav-list">
        <li className={`nav-link-container ${route === 'main' ? 'nav-link-container-active' : ''}`}>
          <img
            src={`./assets/study${route === 'main' ? '-active' : ''}.png`}
            alt="study icon"
            className="nav-link-icon"
          />
          <Link to="/main" className="nav-link">
            {t('nav.study')}
          </Link>
        </li>
        <li
          className={`nav-link-container ${route === 'testing' ? 'nav-link-container-active' : ''}`}
        >
          <img
            src={`./assets/testing${route === 'testing' ? '-active' : ''}.png`}
            alt="testing icon"
            className="nav-link-icon"
          />
          <Link to="/testing" className="nav-link">
            {t('nav.testing')}
          </Link>
        </li>
        <li
          className={`nav-link-container ${route === 'create' ? 'nav-link-container-active' : ''}`}
        >
          <img
            src={`./assets/create-course${route === 'create' ? '-active' : ''}.png`}
            alt="create icon"
            className="nav-link-icon"
          />
          <Link to="/create-course" className="nav-link">
            {t('nav.createCourse')}
          </Link>
        </li>
        <li
          className={`nav-link-container ${
            route === 'settings' ? 'nav-link-container-active' : ''
          }`}
        >
          <img
            src={`./assets/settings${route === 'settings' ? '-active' : ''}.png`}
            alt="settings icon"
            className="nav-link-icon"
          />
          <Link to="/settings" className="nav-link">
            {t('nav.settings')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
