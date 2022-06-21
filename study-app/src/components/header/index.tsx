import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { changeSignInModalOpen, changeSignUpModalOpen } from '../../features/modal/modalSlice';
import { useAppDispatch } from '../../store';
import { FilledBtn } from '../filledBtn';
import { Lang } from '../lang';
import { NotFilledBtn } from '../notFilledBtn';
import { Theme } from '../theme';
import './style.css';

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const toggleSignInModal = () => {
    dispatch(changeSignInModalOpen());
  };

  const toggleSignUpModal = () => {
    dispatch(changeSignUpModalOpen());
  };

  return (
    <div className="header">
      {location.pathname === '/' && (
        <div className="header-container">
          <FilledBtn text={t('header.signUpBtn')} toggleModal={toggleSignUpModal} />
          <NotFilledBtn text={t('header.signInBtn')} toggleModal={toggleSignInModal} />
        </div>
      )}
      {location.pathname !== '/' && (
        <Link to="/main">
          <FilledBtn text={t('header.toMain')} />
        </Link>
      )}
      <div className="header-container">
        {location.pathname !== '/user' && <Link to="/user" className="user-link" />}
        <Theme />
        <Lang />
      </div>
    </div>
  );
};
