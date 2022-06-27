import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import {
  changeRightAnswers,
  changeWeekDay,
  getCourseDataById,
} from '../../features/courses/courseSlice';
import { changeUserData, createUser } from '../../features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { NavBlock } from '../main/NavBlock';
import { ModalCheckingAnswers } from './modalCheckingAnswers';
import './style.css';
import { TestBlock } from './testBlock';

export const TestingTask = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkAnswers, setCheckAnswers] = useState<boolean>(false);
  const { courseById, weekDay } = useAppSelector((state) => state.courseReducer);
  const { type } = useAppSelector((state) => state.testingReducer);
  const { id, progress, level, name, courses } = useAppSelector((state) => state.userReducer);
  const [chosenAnswers, setChosenAnswers] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '' });
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const rightAnswers = courseById.testing
    ? JSON.parse(courseById.testing).map((item: any) => item.right)
    : [];

  useEffect(() => {
    if (!courseById.name) dispatch(getCourseDataById(courseById.id));
    if (!name) dispatch(createUser());
    if (weekDay !== weekDays[new Date().getDay() - 1]) {
      dispatch(changeWeekDay(weekDays[new Date().getDay() - 1]));
      const userProgress = {
        ...JSON.parse(progress),
        [weekDays[new Date().getDay() - 1]]: 0,
      };
      dispatch(changeUserData({ id, type: 'progress', value: JSON.stringify(userProgress) }));
    }
  }, []);

  const checkTest = async () => {
    setIsOpen(true);
    setCheckAnswers(true);
    const answ = Object.values(chosenAnswers);
    const count = rightAnswers.filter((val: any, i: number) => val === answ[i]).length;
    dispatch(changeRightAnswers(count));
    const totalPoints = +JSON.parse(progress)[weekDays[new Date().getDay() - 1]] + count * 0.01;
    const userProgress = {
      ...JSON.parse(progress),
      [weekDays[new Date().getDay() - 1]]: totalPoints.toFixed(2),
    };
    const userLevel = +level + +count * 0.01;
    const coursesData = JSON.parse(courses);
    let isFoundCourse = false;
    let newCourseData = coursesData.map((item: any) => {
      if (Object.keys(item)[0] == courseById.id) {
        isFoundCourse = true;
        let pointsArr: any = Object.values(item)[0];
        pointsArr[0] = count;
        return {
          [courseById.id]: pointsArr,
        };
      }
      return item;
    });

    if (!isFoundCourse) {
      const data = [...newCourseData, { [courseById.id]: [count, 0] }];
      await dispatch(changeUserData({ id, type: 'courses', value: JSON.stringify(data) }));
    } else {
      await dispatch(changeUserData({ id, type: 'courses', value: JSON.stringify(newCourseData) }));
    }

    await dispatch(changeUserData({ id, type: 'progress', value: JSON.stringify(userProgress) }));
    await dispatch(changeUserData({ id, type: 'level', value: userLevel.toFixed(2) }));
  };

  return (
    <>
      {isOpen && <ModalCheckingAnswers setIsOpen={setIsOpen} />}
      <div className="main">
        <div className="main-nav-container">
          <NavBlock route="testing" />
          {type === 'by-task' && (
            <Link to="/examples">
              <ArrowBtn text={t('testingTask.examples')} left={true} />
            </Link>
          )}
        </div>
        <div className="tasks-container theory-container">
          <div className="title-level">
            <h2 className="main-title theory-title">{t('testingTask.title')}</h2>
            {type === 'by-task' && (
              <div className="theory-level">
                <span>{t('theory.level')}</span>
                <div className="theory-level-num">{courseById.level}</div>
              </div>
            )}
          </div>
          <hr className="theory-line" />
          <div className="theory-description">
            {courseById.testing
              ? JSON.parse(courseById.testing).map((item: any, i: number) => {
                  const data = { ...item };
                  return (
                    <TestBlock
                      data={data}
                      index={i + 1}
                      checkAnswers={checkAnswers}
                      key={data.question}
                      setChosenAnswers={setChosenAnswers}
                    />
                  );
                })
              : ''}
          </div>
          {!checkAnswers ? (
            <div className="theory-btn-container" onClick={checkTest}>
              <ArrowBtn text={t('testingTask.checking')} right={true} />
            </div>
          ) : type === 'by-task' ? (
            <Link
              to="/practise"
              className="theory-btn-container"
              onClick={() => {
                setCheckAnswers(false);
              }}
            >
              <ArrowBtn text={t('testingTask.practise')} right={true} />
            </Link>
          ) : (
            <Link
              to="/main"
              className="theory-btn-container"
              onClick={() => {
                setCheckAnswers(false);
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
