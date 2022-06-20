import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { NavBlock } from '../main/NavBlock';
import { ModalCheckingAnswers } from './modalCheckingAnswers';
import './style.css';
import { TestBlock } from './testBlock';

export const TestingTask = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkAnswers, setCheckAnswers] = useState<boolean>(false);
  return (
    <>
      {isOpen && <ModalCheckingAnswers setIsOpen={setIsOpen} />}
      <div className="main">
        <div className="main-nav-container">
          <NavBlock route="testing" />
          <Link to="/examples">
            <ArrowBtn text="примеры" left={true} />
          </Link>
        </div>
        <div className="tasks-container theory-container">
          <div className="title-level">
            <h2 className="main-title theory-title">Тестирование</h2>
            <div className="theory-level">
              <span>{t('theory.level')}</span>
              <div className="theory-level-num">2</div>
            </div>
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
              <ArrowBtn text="проверка" right={true} />
            </div>
          ) : (
            <Link to="/practise" className="theory-btn-container">
              <ArrowBtn text="практика" right={true} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
