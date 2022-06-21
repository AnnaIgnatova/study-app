import { useTranslation } from 'react-i18next';
import { ModalSignIn } from '../../components/signInModal';
import { ModalSignUp } from '../../components/signUpModal';
import { useAppSelector } from '../../store';
import './style.css';

export const Welcome = () => {
  const { t } = useTranslation();
  const { signInOpen, signUpOpen } = useAppSelector((state) => state.modalReducer);

  return (
    <>
      {signInOpen && <ModalSignIn />}
      {signUpOpen && <ModalSignUp />}
      <div className="welcome">
        <div className="welcome-circle"></div>
        <h2 className="welcome-title">{t('welcome.title')}</h2>
        <span className="welcome-subtitle">{t('welcome.subtitle')}</span>
        <img src="./assets/welcome.png" alt="welcome img" className="welcome-img" />
      </div>
    </>
  );
};
