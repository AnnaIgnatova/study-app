import './style.css';
import { useTranslation } from 'react-i18next';
import { NavBlock } from '../main/NavBlock';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { useState } from 'react';
import { ModalPractise } from './ModalPractise';

export const Practise = () => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      {isModalOpen && <ModalPractise setModalOpen={setModalOpen} />}
      <div className="main">
        <div className="main-nav-container">
          <NavBlock route="main" />
          <Link to="/testingTask">
            <ArrowBtn text={t('practise.testing')} left={true} />
          </Link>
        </div>
        <div className="tasks-container theory-container">
          <span className="theory-subtitle">Основы современной вёрстки</span>
          <div className="title-level">
            <h2 className="main-title theory-title">Базовая структура HTML документа</h2>
            <div className="theory-level">
              <span>{t('theory.level')}</span>
              <div className="theory-level-num">2</div>
            </div>
          </div>
          <hr className="theory-line" />
          <div className="theory-description">
            <div className="practise-title">
              Сделайте страницу, как показано на рис. 1. Размеры всех частей заданы в пикселах и не
              меняются в процессе масштабирования окна. Для каждой батарейки постарайтесь обойтись
              одним элементом.
            </div>
            <img src="./assets/example-practise.png" alt="example" className="practise-img" />
            <iframe
              height="300"
              style={{ width: '100%' }}
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/annaignatova/embed/rNJdMXP?default-tab=html%2Cresult&editable=true"
              loading="lazy"
            >
              See the Pen <a href="https://codepen.io/annaignatova/pen/rNJdMXP">Untitled</a> by Anna
              (<a href="https://codepen.io/annaignatova">@annaignatova</a>) on{' '}
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </div>
          <div
            className="theory-btn-container"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <ArrowBtn text={t('practise.checking')} right={true} />
          </div>
        </div>
      </div>
    </>
  );
};
