import { TopicNav } from './nav';
import './style.css';

export interface TopicCardProps {
  title: string;
  img: string;
  progress: number;
  level: number;
  time: number;
}

export const TopicCard = (props: TopicCardProps) => {
  const { title, img, progress, level, time } = props;

  return (
    <div className="topic-card" style={{ backgroundImage: `url(${img})` }}>
      <div className="topic-level-time">
        <div className="topic-level-num">{level}</div>
        <div className="topic-time-num">{time} мин</div>
      </div>
      <div className="topic-card-title">{title}</div>
      <div className="progress-links">
        <div className="topic-progress">
          <div className="topic-progress-scale"></div>
          <span>{progress}%</span>
        </div>
        <TopicNav />
      </div>
    </div>
  );
};
