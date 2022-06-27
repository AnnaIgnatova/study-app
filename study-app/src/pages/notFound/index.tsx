import { useTranslation } from 'react-i18next';
import './style.css';

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="main not-found">
      <img src="./assets/404.webp" alt="404" />
      <span>{t('notFound.title')}</span>
    </div>
  );
};
