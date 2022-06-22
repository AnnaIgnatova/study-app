import { useTranslation } from 'react-i18next';
import { getCourseById, getCourseDataById } from '../../features/courses/courseSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { TopicNav } from './nav';
import './style.css';

export interface TopicCardProps {
  id?: string;
  title: string;
  img: string;
  progress?: number;
  level?: number;
  time: number;
  type?: string;
}

export const TopicCard = (props: TopicCardProps) => {
  const { title, img, progress, level, time, type, id = '' } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const getCardData = () => {
    if (!type) {
      dispatch(getCourseDataById(id));
    }
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
              <div className="topic-progress-scale"></div>
              <span>{progress}%</span>
            </div>
            <TopicNav />
          </div>
        )}
      </div>
    </div>
  );
};
