import { TopicCard } from '../../components/card';
import { NavBlock } from './NavBlock';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow } from './nextArrow';
import { PrevArrow } from './prevArrow';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store';
import { FormEvent, useEffect, useState } from 'react';
import { changeWeekDay, getCoursesData, searchByTitle } from '../../features/courses/courseSlice';
import { changeUserData, createUser } from '../../features/user/userSlice';

export const Main = () => {
  const { t } = useTranslation();
  const { courses, slides, weekDay } = useAppSelector((state) => state.courseReducer);
  const userCourses = JSON.parse(useAppSelector((state) => state.userReducer.courses));
  const { name, progress, id } = useAppSelector((state) => state.userReducer);
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    dispatch(getCoursesData());
    if (!name.length) dispatch(createUser());
    if (weekDay !== weekDays[new Date().getDay() - 1] && progress) {
      dispatch(changeWeekDay(weekDays[new Date().getDay() - 1]));
      const userProgress = {
        ...JSON.parse(progress),
        [weekDays[new Date().getDay() - 1]]: 0,
      };
      dispatch(changeUserData({ id, type: 'progress', value: JSON.stringify(userProgress) }));
    }
  }, []);

  const searchHandler = (e: FormEvent) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  const searchCourses = async (e: any) => {
    if (e.key === 'Enter') {
      dispatch(searchByTitle(search));
    }
  };

  return (
    <div className="main">
      <NavBlock route="main" />
      <div className="tasks-container">
        <div className="main-search-container">
          <input
            type="search"
            className="main-search"
            placeholder={t('main.search')}
            onInput={searchHandler}
            onKeyDown={searchCourses}
          />
        </div>
        <h2 className="main-title">{t('main.title')}</h2>
        <Slider {...settings}>
          {courses.map((course) => (
            <TopicCard
              key={course.id}
              id={course.id}
              title={course.name}
              level={course.level}
              time={course.time}
              img={course.img}
              progress={userCourses.filter((item: any) => Object.keys(item)[0] === `${course.id}`)}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
