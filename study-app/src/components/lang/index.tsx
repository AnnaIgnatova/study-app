import { useState } from 'react';
import { changeLang } from '../../features/lang/langSlice';
import i18n from '../../i18n';
import { useAppDispatch } from '../../store';
import './style.css';

export enum LangType {
  en = 'en',
  ru = 'ru',
}

export const Lang = () => {
  const [lang, toggleLang] = useState<string>(LangType.ru);
  const dispatch = useAppDispatch();

  const changeCurrentLang = () => {
    const currentLang = lang === LangType.ru ? LangType.en : LangType.ru;
    toggleLang(currentLang);
    i18n.changeLanguage(currentLang);
    dispatch(changeLang());
  };
  return (
    <div className="select-container">
      <img src="./assets/lang.png" alt="lang" className="select-img" />
      <select className="select" onChange={changeCurrentLang}>
        <option>RU</option>
        <option>EN</option>
      </select>
    </div>
  );
};
