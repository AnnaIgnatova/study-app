import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { useAppSelector } from '../../store';
import { NavBlock } from '../main/NavBlock';
import './style.css';

export const Theory = () => {
  const { courseById } = useAppSelector((state) => state.courseReducer);
  const { t } = useTranslation();
  const { name, level, theory, subtitle } = courseById;

  const getInfo = () => {
    return JSON.parse(theory).map((item: any) => {
      switch (Object.keys(item)[0]) {
        case 'text': {
          return <p>{item['text']}</p>;
        }
        case 'title': {
          return <h3>{item['title']}</h3>;
        }
        case 'img': {
          return <img src={item['img']} alt="example" />;
        }
        default:
          return '';
      }
    });
  };

  return (
    <div className="main">
      <div className="main-nav-container">
        <NavBlock route="main" />
        <Link to="/main">
          <ArrowBtn text={t('theory.topics')} left={true} />
        </Link>
      </div>

      <div className="tasks-container theory-container">
        <span className="theory-subtitle">{subtitle}</span>
        <div className="title-level">
          <h2 className="main-title theory-title">{name}</h2>
          <div className="theory-level">
            <span>{t('theory.level')}</span>
            <div className="theory-level-num">{level}</div>
          </div>
        </div>
        <hr className="theory-line" />
        <div className="theory-description">{theory ? getInfo() : ''}</div>
        <Link to="/examples" className="theory-btn-container">
          <ArrowBtn text={t('theory.examples')} right={true} />
        </Link>
      </div>
    </div>
  );
};
