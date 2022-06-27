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
import { changeUserData } from '../../features/user/userSlice';

export const Practise = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const { isPracticeChecked } = useAppSelector((state) => state.testingReducer);
  const { courseById } = useAppSelector((state) => state.courseReducer);
  const { progress, courses} = useAppSelector((state) => state.userReducer);
  const userId = useAppSelector((state) => state.userReducer.id);
  const dispatch = useAppDispatch();
  const { name, subtitle, level, practise, id } = courseById;
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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

  const checkPractise = async () => {
    setModalOpen(true);
    dispatch(changePractise(true));

    const totalPoints = +JSON.parse(progress)[weekDays[new Date().getDay() - 1]] + 0.1;
    const userProgress = {
      ...JSON.parse(progress),
      [weekDays[new Date().getDay() - 1]]: totalPoints.toFixed(2),
    };
    const userLevel = +level + 0.1;
    const coursesData = JSON.parse(courses);
    let isFoundCourse = false;
    let newCourseData = coursesData.map((item: any) => {
      if (Object.keys(item)[0] == courseById.id) {
        isFoundCourse = true;
        let pointsArr: any = Object.values(item)[0];
        pointsArr[1] = 10;
        return {
          [courseById.id]: pointsArr,
        };
      }
      return item;
    });
 
    if (!isFoundCourse) {
      const data = [...newCourseData, { [courseById.id]: [0, 10] }];
      await dispatch(changeUserData({ id: userId, type: 'courses', value: JSON.stringify(data) }));
    } else {
      await dispatch(
        changeUserData({ id: userId, type: 'courses', value: JSON.stringify(newCourseData) })
      );
    }

    await dispatch(
      changeUserData({ id: userId, type: 'progress', value: JSON.stringify(userProgress) })
    );
    await dispatch(changeUserData({ id: userId, type: 'level', value: userLevel.toFixed(2) }));
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
            <div className="theory-btn-container" onClick={checkPractise}>
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
