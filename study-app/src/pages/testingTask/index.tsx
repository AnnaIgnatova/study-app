import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { useAppSelector } from '../../store';
import { NavBlock } from '../main/NavBlock';
import { ModalCheckingAnswers } from './modalCheckingAnswers';
import './style.css';
import { TestBlock } from './testBlock';

export const TestingTask = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkAnswers, setCheckAnswers] = useState<boolean>(false);
  const { courseById } = useAppSelector((state) => state.courseReducer);
  const { type } = useAppSelector((state) => state.testingReducer);

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
                    />
                  );
                })
              : ''}
          </div>
          {!checkAnswers ? (
            <div
              className="theory-btn-container"
              onClick={() => {
                setIsOpen(true);
                setCheckAnswers(true);
              }}
            >
              <ArrowBtn text={t('testingTask.checking')} right={true} />
            </div>
          ) : type === 'by-task' ? (
            <Link to="/practise" className="theory-btn-container">
              <ArrowBtn text={t('testingTask.practise')} right={true} />
            </Link>
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
