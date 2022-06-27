import './style.css';
import { NotFilledBtn } from './../../components/notFilledBtn';
import { ProgressPlot } from './Plot';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect } from 'react';
import { createUser } from '../../features/user/userSlice';

export const User = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { name, email, avatar, level, progress, accessToken } = useAppSelector(
    (state) => state.userReducer
  );
  const chartData = progress ? Object.values(JSON.parse(progress)) : [];

  useEffect(() => {
    if (!name) dispatch(createUser());
  }, []);

  return (
    <div className="user">
      <div className="user-info">
        <img src={avatar ? avatar : './assets/avatar.png'} alt="avatar" className="user-avatar" />
        <span className="user-name">{name}</span>
        <span className="user-email">{email}</span>
        <Link to="/settings">
          <NotFilledBtn text={t('user.editBtn')} />
        </Link>
      </div>
      <div className="user-progress">
        <div className="progress-level">
          {t('user.currentLevel')} <span className="current-level">{Math.floor(level)}</span>
        </div>
        <div
          className="level-scale-wrapper"
          onClick={() => {
            console.log((level % 1).toFixed(2));
          }}
        >
          <div className="level-scale">
            <div
              className="scale"
              style={{ width: `${(level % 1).toFixed(2).toString().split('.')[1]}%` }}
            ></div>
          </div>
          <span className="level-num">{(level % 1).toFixed(2).toString().split('.')[1]}%</span>
        </div>
        <div className="progress-level">{t('user.activity')}</div>
        <ProgressPlot data={chartData} />
      </div>
    </div>
  );
};
