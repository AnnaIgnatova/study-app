import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { NavBlock } from '../main/NavBlock';
import './style.css';

export const TestingTask = () => {
  const { t } = useTranslation();
  return (
    <div className="main">
      <div className="main-nav-container">
        <NavBlock route="testing" />
        <Link to="/theory">
          <ArrowBtn text="примеры" left={true} />
        </Link>
      </div>
      <div className="tasks-container theory-container">
        <div className="title-level">
          <h2 className="main-title theory-title">Тестирование</h2>
          <div className="theory-level">
            <span>{t('theory.level')}</span>
            <div className="theory-level-num">2</div>
          </div>
        </div>
        <hr className="theory-line" />
        <div className="theory-description"></div>
        <Link to="/testing-task" className="theory-btn-container">
          <ArrowBtn text="проверка" right={true} />
        </Link>
      </div>
    </div>
  );
};
