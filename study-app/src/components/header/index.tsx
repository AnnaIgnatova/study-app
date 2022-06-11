import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FilledBtn } from '../filledBtn';
import { Lang } from '../lang';
import { NotFilledBtn } from '../notFilledBtn';
import { Theme } from '../theme';
import './style.css';

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="header">
      {location.pathname === '/' && (
        <div className="header-container">
          <FilledBtn text={t('header.signUpBtn')} />
          <NotFilledBtn text={t('header.signInBtn')} />
        </div>
      )}
      {location.pathname === '/user' && (
        <Link to="/main">
          <FilledBtn text={t('header.toMain')} />
        </Link>
      )}
      <div className="header-container">
        <Theme />
        <Lang />
      </div>
    </div>
  );
};
