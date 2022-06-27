import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCourseDataById } from '../../features/courses/courseSlice';
import { useAppDispatch } from '../../store';
import { TopicNav } from './nav';
import './style.css';

// export interface TopicCardProps {
//   id?: string;
//   title: string;
//   img: string;
//   progress?: number;
//   level?: number;
//   time: number;
//   type?: string;
// }

export const TopicCard = (props) => {
  const { title, img, progress, level, time, type, id = '' } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
 
  const getCardData = () => {
    if (!type) {
      dispatch(getCourseDataById(id));
    }
  };

  const getProgress = () => {
    if (progress.length === 0) return 0;
    const obj = Object.values(progress)[0];
    const arr = Object.values(obj)[0];
    const num = Math.floor((+arr[0] + +arr[1]) * 6.7);
    return num;
  };

  return (
    <div className="topic-card" style={{ backgroundImage: `url(${img})` }} onClick={getCardData}>
      <div className="darken-container">
        <div className="topic-level-time">
          {!type && <div className="topic-level-num">{level}</div>}
          <div className="topic-time-num">
            {time} {t('main.minutes')}
          </div>
        </div>
        <div className="topic-card-title">{title}</div>
        {!type && (
          <div className="progress-links">
            <div className="topic-progress">
              <div className="topic-progress-scale" style={{ width: `${getProgress()}%` }}></div>
              <span>{getProgress()}%</span>
            </div>
            <TopicNav />
          </div>
        )}
      </div>
    </div>
  );
};
