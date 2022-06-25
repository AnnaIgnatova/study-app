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
import { CreateTheoryContainer } from './createTheoryContainer';
import { CreateExamplesContainer } from './createExamplesContainer';
import { CreatePractiseContainer } from './createPractiseContainer';
import { CreateTestingContainer } from './createTestingContainer';
import { defaultCourseInfo, defaultValidation, testingDefaultData } from './constants';
import { createNewCourse } from '../../features/courses/courseSlice';
import { AddNewBlockBtn } from './addNewBlockBtn';

export const CreateCourse = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isCourseCreated } = useAppSelector((state) => state.modalReducer);
  const [courseData, setCourseData] = useState<ICourseData>({
    ...defaultCourseInfo,
  });
  const [theoryInfo, setTheoryInfo] = useState<any>({ 0: { title: '' } });
  const [practiseInfo, setPractiseInfo] = useState<any>({ 0: { title: '' } });
  const [examplesInfo, setExamplesInfo] = useState<any>({ 0: { title: '' } });
  const [testingInfo, setTestingInfo] = useState<any>({ ...testingDefaultData });
  const [validation, setValidation] = useState([...defaultValidation]);

  const checkValidation = (data: any, i: number) => {
    const check =
      Object.values(data)
        .map((item: any) => item[Object.keys(item)[0]] !== '')
        .indexOf(false) === -1;
    const newArr = validation;
    newArr[i] = check;
    setValidation([...newArr]);
  };

  const createTheoryBlock = (data: any, i: any) => {
    setTheoryInfo((state: any) => {
      return {
        ...state,
        [i]: data,
      };
    });
    checkValidation({ ...theoryInfo, [i]: data }, 4);
  };

  const createExamplesBlock = (data: any, i: any) => {
    setExamplesInfo((state: any) => {
      return {
        ...state,
        [i]: data,
      };
    });
    checkValidation({ ...examplesInfo, [i]: data }, 5);
  };

  const createPractiseBlock = (data: any, i: any) => {
    setPractiseInfo((state: any) => {
      return {
        ...state,
        [i]: data,
      };
    });
    checkValidation({ ...practiseInfo, [i]: data }, 7);
  };

  const checkTestingValidation = (data: any) => {
    const check =
      Object.values(data)
        .map((item: any) => {
          let validate = 1;
          for (let key in item) {
            if (item[key] === '') {
              validate *= 0;
            }
          }
          return !!validate;
        })
        .indexOf(false) === -1;
    const newArr = validation;
    newArr[6] = check;
    setValidation([...newArr]);
  };

  const createTestingBlock = (data: any, i: any) => {
    setTestingInfo((state: any) => {
      return {
        ...state,
        [i]: { ...data },
      };
    });
    checkTestingValidation({ ...testingInfo, [i]: data });
  };

  const addCreateTheoryBlock = () => {
    setTheoryInfo((state: any) => {
      return {
        ...state,
        [Object.keys(theoryInfo).length]: { title: '' },
      };
    });
    checkValidation({ ...theoryInfo, [Object.keys(theoryInfo).length]: { title: '' } }, 4);
  };

  const addCreateExamplesBlock = () => {
    setExamplesInfo((state: any) => {
      return {
        ...state,
        [Object.keys(examplesInfo).length]: { title: '' },
      };
    });
    checkValidation({ ...examplesInfo, [Object.keys(examplesInfo).length]: { title: '' } }, 5);
  };

  const addCreatePractiseBlock = () => {
    setPractiseInfo((state: any) => {
      return {
        ...state,
        [Object.keys(practiseInfo).length]: { title: '' },
      };
    });
    checkValidation({ ...practiseInfo, [Object.keys(practiseInfo).length]: { title: '' } }, 7);
  };

  const createCourseInfo = async () => {
    const newState = {
      ...courseData,
      theory: JSON.stringify(Object.values(theoryInfo)),
      examples: JSON.stringify(Object.values(examplesInfo)),
      testing: JSON.stringify(Object.values(testingInfo)),
      practise: JSON.stringify(Object.values(practiseInfo)),
    };
    setCourseData((state: any) => {
      return {
        ...state,
        theory: JSON.stringify(Object.values(theoryInfo)),
        examples: JSON.stringify(Object.values(examplesInfo)),
        testing: JSON.stringify(Object.values(testingInfo)),
        practise: JSON.stringify(Object.values(practiseInfo)),
      };
    });
    dispatch(createNewCourse(newState));
    (document.querySelector('.create-course-form') as HTMLFormElement).reset();
  };

  const changeInput = (e: React.FormEvent, i: number, type: string) => {
    const value = (e.target as HTMLInputElement).value;
    setCourseData((state) => {
      return {
        ...state,
        [type]: type === 'time' || type === 'level' ? +value : value,
      };
    });
    let newArr = validation;
    if (value === '') {
      newArr[i] = false;
    } else {
      newArr[i] = true;
    }
    setValidation([...newArr]);
  };

  return (
    <>
      {isModalOpen && <ModalCreateCourse setModalOpen={setModalOpen} />}
      <div className="main">
        <NavBlock route="create" />
        <div className="tasks-container create-course-container">
          <h2 className="main-title">{t('createCourse.title')}</h2>
          <hr className="theory-line" />
          <form className="theory-description create-course-form">
            <div className="create-course-block">
              <h3>{t('createCourse.name')}</h3>
              <input
                required
                type="text"
                onInput={(e) => {
                  changeInput(e, 0, 'name');
                }}
              />
              {!validation[0] && (
                <span className="validation-msg">{t('createCourse.fillField')}</span>
              )}
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.subtitle')}</h3>
              <input
                required
                type="text"
                onInput={(e) => {
                  changeInput(e, 1, 'subtitle');
                }}
              />
              {!validation[1] && (
                <span className="validation-msg">{t('createCourse.fillField')}</span>
              )}
            </div>
            <div className="create-course-wrapper">
              <div className="create-course-block">
                <h3>{t('createCourse.level')}</h3>
                <input
                  type="number"
                  placeholder="3"
                  onInput={(e) => {
                    changeInput(e, 2, 'level');
                  }}
                />
                {!validation[2] && (
                  <span className="validation-msg">{t('createCourse.fillField')}</span>
                )}
              </div>
              <div className="create-course-block">
                <h3>{t('createCourse.time')}</h3>
                <input
                  type="number"
                  required
                  placeholder="60"
                  onInput={(e) => {
                    changeInput(e, 3, 'time');
                  }}
                />
                {!validation[3] && (
                  <span className="validation-msg">{t('createCourse.fillField')}</span>
                )}
              </div>
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.theory')}</h3>
              {theoryInfo &&
                Object.values(theoryInfo).map((item, i) => (
                  <CreateTheoryContainer createTheoryBlock={createTheoryBlock} i={i} item={item} />
                ))}
              {!validation[4] && (
                <span className="validation-msg">{t('createCourse.fillAllFields')}</span>
              )}
              <AddNewBlockBtn text={t('createCourse.addBtn')} toggleModal={addCreateTheoryBlock} />
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.examples')}</h3>
              {examplesInfo &&
                Object.values(examplesInfo).map((item, i) => (
                  <CreateExamplesContainer
                    createExamplesBlock={createExamplesBlock}
                    i={i}
                    item={item}
                  />
                ))}
              {!validation[5] && (
                <span className="validation-msg">{t('createCourse.fillAllFields')}</span>
              )}
              <AddNewBlockBtn
                text={t('createCourse.addBtn')}
                toggleModal={addCreateExamplesBlock}
              />
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.testing')}</h3>
              {Object.values(testingInfo).map((item, i) => {
                return (
                  <CreateTestingContainer
                    i={i}
                    data={item}
                    createTestingBlock={createTestingBlock}
                  />
                );
              })}
              {!validation[6] && (
                <span className="validation-msg">{t('createCourse.fillAllFields')}</span>
              )}
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.practise')}</h3>
              {practiseInfo &&
                Object.values(practiseInfo).map((item, i) => (
                  <CreatePractiseContainer
                    createPractiseBlock={createPractiseBlock}
                    i={i}
                    item={item}
                  />
                ))}
              {!validation[7] && (
                <span className="validation-msg">{t('createCourse.fillAllFields')}</span>
              )}
              <AddNewBlockBtn
                text={t('createCourse.addBtn')}
                toggleModal={addCreatePractiseBlock}
              />
            </div>
            <div className="create-course-block">
              <h3>{t('createCourse.img')}</h3>
              <input
                required
                type="text"
                onInput={(e) => {
                  changeInput(e, 8, 'img');
                }}
              />
              {!validation[8] && (
                <span className="validation-msg">{t('createCourse.fillField')}</span>
              )}
            </div>
          </form>
          {!isCourseCreated && validation.indexOf(false) === -1 ? (
            <div className="theory-btn-container">
              <FilledBtn
                text={t('createCourse.createBtn')}
                toggleModal={() => {
                  setModalOpen(true);
                  dispatch(changeCourseCreated());
                  createCourseInfo();
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
