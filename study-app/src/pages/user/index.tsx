import './style.css';
import { NotFilledBtn } from './../../components/notFilledBtn';
import { ProgressPlot } from './Plot';
import { Link } from 'react-router-dom';

export const User = () => {
  return (
    <div className="user">
      <div className="user-info">
        <img src="./assets/avatar.png" alt="avatar" className="user-avatar" />
        <span className="user-name">Анна</span>
        <span className="user-email">missjellx@gmail.com</span>
        <Link to="/settings"><NotFilledBtn text="редактировать" /></Link>
      </div>
      <div className="user-progress">
        <div className="progress-level">
          Текущий уровень: <span className="current-level">Базовый</span>
        </div>
        <div className="level-scale-wrapper">
          <div className="level-scale">
            <div className="scale"></div>
          </div>
          <span className="level-num">87%</span>
        </div>
        <div className="progress-level">ваша активность</div>
        <ProgressPlot />
      </div>
    </div>
  );
};
