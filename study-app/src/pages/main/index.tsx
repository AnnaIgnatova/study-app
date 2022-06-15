import { TopicCard } from '../../components/card';
import { NavBlock } from './NavBlock';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow } from './nextArrow';
import { PrevArrow } from './prevArrow';

export const Main = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="main">
      <NavBlock />
      <div className="tasks-container">
        <div className="main-search-container">
          <input type="search" className="main-search" placeholder="Search" />
        </div>
        <h2 className="main-title">Выберите интересующую тему</h2>
        <Slider {...settings}>
          <TopicCard
            title="Структура HTML документа"
            level={2}
            progress={55}
            time={60}
            img="./assets/card-bg.png"
          />

          <TopicCard
            title="Структура HTML документа"
            level={2}
            progress={55}
            time={60}
            img="./assets/card-bg.png"
          />

          <TopicCard
            title="Структура HTML документа"
            level={2}
            progress={55}
            time={60}
            img="./assets/card-bg.png"
          />
        </Slider>
      </div>
    </div>
  );
};
