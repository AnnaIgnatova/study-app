import { useState } from 'react';
import i18n from '../../i18n';
import './style.css';

export enum LangType {
  en = 'en',
  ru = 'ru',
}

export const Lang = () => {
  const [lang, toggleLang] = useState<string>(LangType.ru);

  const changeLang = () => {
    const currentLang = lang === LangType.ru ? LangType.en : LangType.ru;
    toggleLang(currentLang);
    i18n.changeLanguage(currentLang);
  };
  return (
    <div className="select-container">
      <img src="./assets/lang.png" alt="lang" className="select-img" />
      <select className="select" onChange={changeLang}>
        <option>RU</option>
        <option>EN</option>
      </select>
    </div>
  );
};
