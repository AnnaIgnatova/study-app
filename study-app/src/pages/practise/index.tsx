import './style.css';
import { useTranslation } from 'react-i18next';
import { NavBlock } from '../main/NavBlock';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { useEffect, useState } from 'react';
import { ModalPractise } from './ModalPractise';
import { useAppDispatch, useAppSelector } from '../../store';
import { changePractise, changeTest } from '../../features/testing/testingSlice';
import { getCourseDataById } from '../../features/courses/courseSlice';

export const Practise = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { isPracticeChecked } = useAppSelector((state) => state.testingReducer);
  const { courseById } = useAppSelector((state) => state.courseReducer);
  const dispatch = useAppDispatch();
  const { name, subtitle, level, practise, id } = courseById;

  useEffect(() => {
    if (!name) dispatch(getCourseDataById(id));
  }, []);

  const getInfo = () => {
    return JSON.parse(practise).map((item: any) => {
      switch (Object.keys(item)[0]) {
        case 'title': {
          return <div className="practise-title">{item['title']}</div>;
        }
        case 'img': {
          return <img src={item['img']} alt="example" className="practise-img" />;
        }
        default:
          return '';
      }
    });
  };

  return (
    <>
      {isModalOpen && <ModalPractise setModalOpen={setModalOpen} />}
      <div className="main">
        <div className="main-nav-container">
          <NavBlock route="main" />
          <Link
            to="/testing-task"
            onClick={() => {
              dispatch(changeTest('by-task'));
            }}
          >
            <ArrowBtn text={t('practise.testing')} left={true} />
          </Link>
        </div>
        <div className="tasks-container theory-container">
          <span className="theory-subtitle">{name}</span>
          <div className="title-level">
            <h2 className="main-title theory-title">{subtitle}</h2>
            <div className="theory-level">
              <span>{t('theory.level')}</span>
              <div className="theory-level-num">{level}</div>
            </div>
          </div>
          <hr className="theory-line" />
          <div className="theory-description">
            {practise ? getInfo() : ''}
            <iframe
              height="300"
              style={{ width: '100%' }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/annaignatova/embed/rNJdMXP?default-tab=html%2Cresult&editable=true"
              loading="lazy"
            ></iframe>
          </div>
          {!isPracticeChecked ? (
            <div
              className="theory-btn-container"
              onClick={() => {
                setModalOpen(true);
                dispatch(changePractise(true));
              }}
            >
              <ArrowBtn text={t('practise.checking')} right={true} />
            </div>
          ) : (
            <Link
              to="/main"
              className="theory-btn-container"
              onClick={() => {
                dispatch(changePractise(false));
              }}
            >
              <ArrowBtn text={t('modalPractise.toMain')} right={true} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
