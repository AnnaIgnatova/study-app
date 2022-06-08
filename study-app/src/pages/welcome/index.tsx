import { useTranslation } from 'react-i18next';
import './style.css';

export const Welcome = () => {
  const { t } = useTranslation();
  return (
    <div className="welcome">
      <div className="welcome-circle"></div>
      <h2 className="welcome-title">{t('welcome.title')}</h2>
      <span className="welcome-subtitle">{t('welcome.subtitle')}</span>
      <img src="./assets/welcome.png" alt="welcome img" className="welcome-img" />
    </div>
  );
};
