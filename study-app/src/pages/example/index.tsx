import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { NavBlock } from '../main/NavBlock';
import './style.css';

export const Example = () => {
  const { t } = useTranslation();
  return (
    <div className="main">
      <div className="main-nav-container">
        <NavBlock route="main" />
        <Link to="/theory">
          <ArrowBtn text={t('examples.theory')} left={true} />
        </Link>
      </div>
      <div className="tasks-container theory-container">
        <div className="title-level">
          <h2 className="main-title theory-title">{t('examples.title')}</h2>
          <div className="theory-level">
            <span>{t('theory.level')}</span>
            <div className="theory-level-num">2</div>
          </div>
        </div>
        <hr className="theory-line" />
        <div className="theory-description">
          <p>Повторите страницу по данному по образцу:</p>
          <img src="./assets/example.png" alt="example" />
          <iframe
            height="300"
            style={{ width: '100%' }}
            scrolling="no"
            title="Untitled"
            src="https://codepen.io/annaignatova/embed/XWZVyoY?default-tab=html%2Cresult&editable=true"
            frameBorder="no"
            loading="lazy"
          >
            See the Pen <a href="https://codepen.io/annaignatova/pen/XWZVyoY">Untitled</a> by Anna (
            <a href="https://codepen.io/annaignatova">@annaignatova</a>) on{' '}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        </div>
        <Link to="/testing-task" className="theory-btn-container">
          <ArrowBtn text={t('examples.test')} right={true} />
        </Link>
      </div>
    </div>
  );
};
