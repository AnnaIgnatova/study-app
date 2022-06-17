import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';
import { NavBlock } from '../main/NavBlock';
import './style.css';

export const Theory = () => {
  const { t } = useTranslation();
  return (
    <div className="main">
      <div className="main-nav-container">
        <NavBlock route="main" />
        <Link to="/main">
          <ArrowBtn text={t('theory.topics')} left={true} />
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
          <p>
            Как театр начинается с вешалки, так и любой HTML-документ начинается с базовой
            структуры. Она включает в себя теги, которые есть в любом HTML-файле. Эти теги и
            служебная информация нужны браузеру для корректного отображения информации.
          </p>
          <p>Взглянем на базовую структуру любого HTML-документа:</p>
          <img src="./assets/theory-example.png" alt="example" />
          <p>
            Этот набор кажется не очень большим, но браузеру он сообщает множество полезной
            информации. В этом уроке разберёмся с каждой строчкой этой структуры.
          </p>
          <p>DOCTYPE</p>
          <p>
            Первая конструкция в любом HTML-документе — элемент DOCTYPE. Он не относится к тегам и
            никаким образом не может отображаться на странице. Его задача — указать браузеру, какой
            стандарт HTML используется в этом документе. Сейчас это везде стандарт HTML5.
            Записывается он следующим образом:
          </p>
        </div>
        <Link to="/examples" className="theory-btn-container">
          <ArrowBtn text={t('theory.examples')} right={true} />
        </Link>
      </div>
    </div>
  );
};
