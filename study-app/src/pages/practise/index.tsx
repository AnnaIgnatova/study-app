import './style.css';
import { useTranslation } from 'react-i18next';
import { NavBlock } from '../main/NavBlock';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { useState } from 'react';
import { ModalPractise } from './ModalPractise';
import { useAppDispatch, useAppSelector } from '../../store';
import { changePractise, changeTest } from '../../features/testing/testingSlice';

export const Practise = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { isPracticeChecked } = useAppSelector((state) => state.testingReducer);
  const { courseById } = useAppSelector((state) => state.courseReducer);
  const dispatch = useAppDispatch();
  const { name, subtitle, level } = courseById;
  const { title, img } = JSON.parse(courseById.practise);

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
            <div className="practise-title">{title}</div>
            <img src={img} alt="example" className="practise-img" />
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
