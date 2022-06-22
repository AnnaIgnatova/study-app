import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { changeTest } from '../../features/testing/testingSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { NavBlock } from '../main/NavBlock';
import './style.css';

export const Example = () => {
  const { t } = useTranslation();
  const { courseById } = useAppSelector((state) => state.courseReducer);
  const dispatch = useAppDispatch();

  const getInfo = () => {
    return JSON.parse(courseById.examples).map((item: any) => {
      switch (Object.keys(item)[0]) {
        case 'text': {
          return <p>{item['text']}</p>;
        }
        case 'title': {
          return <h3>{item['title']}</h3>;
        }
        case 'code': {
          return (
            <iframe
              height="300"
              style={{ width: '100%' }}
              scrolling="no"
              title="Untitled"
              src={item['code']}
              frameBorder="no"
              loading="lazy"
            ></iframe>
          );
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
        <Link to="/theory">
          <ArrowBtn text={t('examples.theory')} left={true} />
        </Link>
      </div>
      <div className="tasks-container theory-container">
        <div className="title-level">
          <h2 className="main-title theory-title">{t('examples.title')}</h2>
          <div className="theory-level">
            <span>{t('theory.level')}</span>
            <div className="theory-level-num">{courseById.level}</div>
          </div>
        </div>
        <hr className="theory-line" />
        <div className="theory-description">{courseById.examples ? getInfo() : ''}</div>
        <Link
          to="/testing-task"
          className="theory-btn-container"
          onClick={() => {
            dispatch(changeTest('by-task'));
          }}
        >
          <ArrowBtn text={t('examples.test')} right={true} />
        </Link>
      </div>
    </div>
  );
};
