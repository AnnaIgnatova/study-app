import './style.css';
import { useTranslation } from 'react-i18next';
import { NavBlock } from '../main/NavBlock';
import { FilledBtn } from '../../components/filledBtn';
import { useState } from 'react';
import { ModalCreateCourse } from './createCourseModal';
import { useAppDispatch, useAppSelector } from '../../store';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { changeCourseCreated } from '../../features/modal/modalSlice';
import ICourseData from '../../types/course.type';
import { NotFilledBtn } from '../../components/notFilledBtn';
import { CreateTheoryContainer } from './createTheoryContainer';

const defaultCourseInfo = {
  name: '',
  subtitle: '',
  level: 0,
  time: 0,
  theory: '',
  practise: '',
  testing: '',
  examples: '',
  img: '',
};

export const CreateCourse = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isCourseCreated } = useAppSelector((state) => state.modalReducer);
  const [courseData, setCourseData] = useState<ICourseData>({
    ...defaultCourseInfo,
  });
  const [theoryInfo, setTheoryInfo] = useState<any>({ 0: { title: '' } });
  const [practiseInfo, setPracriseInfo] = useState<any>({});
  const [examplesInfo, setExamplesInfo] = useState<any>({});

  const createTheoryBlock = (data: any, i: any) => {
    setTheoryInfo((state: any) => {
      return {
        ...state,
        [i]: data,
      };
    });
  };

  const addCreateTheoryBlock = () => {
    setTheoryInfo((state: any) => {
      return {
        ...state,
        [Object.keys(theoryInfo).length]: { title: '' },
      };
    });
  };

  return (
    <>
      {isModalOpen && <ModalCreateCourse setModalOpen={setModalOpen} />}
      <div className="main">
        <NavBlock route="create" />
        <div className="tasks-container create-course-container">
          <h2 className="main-title">{t('createCourse.title')}</h2>
          <hr className="theory-line" />
          <div className="theory-description">
            <div className="create-course-block">
              <h3>{t('createCourse.name')}</h3>
              <input
                type="text"
                placeholder={t('createCourse.nameInput')}
                onInput={(e) => {
                  setCourseData((state) => {
                    return {
                      ...state,
                      name: (e.target as HTMLInputElement).value,
                    };
                  });
                }}
              />
            </div>
            <div className="create-course-wrapper">
              <div className="create-course-block">
                <h3>{t('createCourse.level')}</h3>
                <input type="number" placeholder="3" />
              </div>
              <div className="create-course-block">
                <h3>{t('createCourse.time')}</h3>
                <input type="number" placeholder="60" />
              </div>
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.theory')}</h3>
              {theoryInfo &&
                Object.values(theoryInfo).map((item, i) => (
                  <CreateTheoryContainer createTheoryBlock={createTheoryBlock} i={i} item={item} />
                ))}
              <NotFilledBtn text="добавить" toggleModal={addCreateTheoryBlock} />
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.examples')}</h3>
              <textarea placeholder={t('createCourse.examplesInput')} rows={10}></textarea>
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.testing')}</h3>
              <textarea placeholder={t('createCourse.testingInput')} rows={10}></textarea>
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.practise')}</h3>
              <textarea placeholder={t('createCourse.practiseInput')} rows={10}></textarea>
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.img')}</h3>
              <input type="file" />
            </div>
          </div>
          {!isCourseCreated ? (
            <div className="theory-btn-container">
              <FilledBtn
                text={t('createCourse.createBtn')}
                toggleModal={() => {
                  setModalOpen(true);
                  dispatch(changeCourseCreated());
                }}
              />
            </div>
          ) : (
            <Link to="/main" className="theory-btn-container">
              <ArrowBtn text={t('modalPractise.toMain')} right={true} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
