import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { getCourseDataById } from '../../features/courses/courseSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { NavBlock } from '../main/NavBlock';
import './style.css';

export const Theory = () => {
  const { courseById } = useAppSelector((state) => state.courseReducer);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { name, level, theory, subtitle, id } = courseById;

  useEffect(() => {
    if (!name) dispatch(getCourseDataById(id));
  }, []);

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
