import { TopicCard } from '../../components/card';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { NextArrow } from '../main/nextArrow';
import { PrevArrow } from '../main/prevArrow';
import { NavBlock } from '../main/NavBlock';
import { Link } from 'react-router-dom';
import { ArrowBtn } from '../../components/arrowBtn';

export const TestingTopics = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="main">
      <div className="main-nav-container">
        <NavBlock route="testing" />
        <Link to="/testing">
          <ArrowBtn text={t('testingByTopics.backBtn')} left={true} />
        </Link>
      </div>
      <div className="tasks-container testing-topics">
        <h2 className="main-title">{t('testingByTopics.title')}</h2>
        <hr className="theory-line" />
        <Slider {...settings}>
          <Link to="/testing-task">
            <TopicCard
              title="Структура HTML документа"
              level={2}
              progress={55}
              time={60}
              img="./assets/card-bg.png"
              type="testing"
            />
          </Link>
          <Link to="/testing-task">
            <TopicCard
              title="Структура HTML документа"
              level={2}
              progress={55}
              time={60}
              img="./assets/card-bg.png"
              type="testing"
            />
          </Link>
          <Link to="/testing-task">
            <TopicCard
              title="Структура HTML документа"
              level={2}
              progress={55}
              time={60}
              img="./assets/card-bg.png"
              type="testing"
            />
          </Link>
          <Link to="/testing-task">
            <TopicCard
              title="Структура HTML документа"
              level={2}
              progress={55}
              time={60}
              img="./assets/card-bg.png"
              type="testing"
            />
          </Link>
          <Link to="/testing-task">
            <TopicCard
              title="Структура HTML документа"
              level={2}
              progress={55}
              time={60}
              img="./assets/card-bg.png"
              type="testing"
            />
          </Link>
        </Slider>
      </div>
    </div>
  );
};
