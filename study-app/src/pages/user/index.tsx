import './style.css';
import { NotFilledBtn } from './../../components/notFilledBtn';
import { ProgressPlot } from './Plot';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store';

export const User = () => {
  const { t } = useTranslation();
  const { name, email, avatar } = useAppSelector((state) => state.userReducer);
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
          {t('user.currentLevel')} <span className="current-level">{t('user.basic')}</span>
        </div>
        <div className="level-scale-wrapper">
          <div className="level-scale">
            <div className="scale"></div>
          </div>
          <span className="level-num">87%</span>
        </div>
        <div className="progress-level">{t('user.activity')}</div>
        <ProgressPlot />
      </div>
    </div>
  );
};
