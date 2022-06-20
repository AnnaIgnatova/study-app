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
                <div className="theory-level-num">2</div>
              </div>
            )}
          </div>
          <hr className="theory-line" />
          <div className="theory-description">
            <TestBlock
              title="Какие из перечисленных тэгов относятся к созданию таблицы?"
              answer_1="<header> <body> <footer>"
              answer_2="<table> <tr> <td>"
              answer_3="<ul> <li> <tr> <td>"
              index={1}
              right={1}
              checkAnswers={checkAnswers}
            />
            <TestBlock
              title={`О чем говорит следующая запись: <form action="url" method="POST">?`}
              answer_1="Создается форма, при заполнении которой вводимые данные будут отображаться"
              answer_2="Создается форма, при заполнении которой вводимые данные не будут отображаться"
              answer_3="Создается форма, которая будет служить для внесения информации, представленной в виде ссылки (URL)"
              index={2}
              right={2}
              checkAnswers={checkAnswers}
            />
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
