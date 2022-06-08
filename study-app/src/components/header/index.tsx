import { useTranslation } from 'react-i18next';
import { FilledBtn } from '../filledBtn';
import { Lang } from '../lang';
import { NotFilledBtn } from '../notFilledBtn';
import { Theme } from '../theme';
import './style.css';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="header-container">
        <FilledBtn text={t('header.signUpBtn')} />
        <NotFilledBtn text={t('header.signInBtn')} />
      </div>
      <div className="header-container">
        <Theme />
        <Lang />
      </div>
    </div>
  );
};
