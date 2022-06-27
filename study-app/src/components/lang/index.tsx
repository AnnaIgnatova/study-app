import { useEffect, useState } from 'react';
import { changeLang } from '../../features/lang/langSlice';
import i18n from '../../i18n';
import { useAppDispatch, useAppSelector } from '../../store';
import './style.css';

export enum LangType {
  en = 'en',
  ru = 'ru',
}

export const Lang = () => {
  const { currentLang } = useAppSelector((state) => state.langReducer);
  const [lang, toggleLang] = useState<string>(currentLang);
  const dispatch = useAppDispatch();

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, []);

  const changeCurrentLang = () => {
    const l = lang === LangType.ru ? LangType.en : LangType.ru;
    toggleLang(l);
    i18n.changeLanguage(l);
    dispatch(changeLang());
  };

  return (
    <div className="select-container">
      <img src="./assets/lang.png" alt="lang" className="select-img" />
      <select className="select" onChange={changeCurrentLang} defaultValue={lang}>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};
