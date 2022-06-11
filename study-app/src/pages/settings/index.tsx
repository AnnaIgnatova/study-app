import { NotFilledBtn } from '../../components/notFilledBtn';
import './style.css';

export const Settings = () => (
  <div className="settings">
    <div className="settings-avatar">
      <img src="./assets/avatar.png" alt="avatar" className="user-avatar" />
      <NotFilledBtn text="изменить" />
    </div>
    <div className="settings-info">
      <div className="settings-info-container">
        <label htmlFor="name">
          Имя
          <input type="text" id="name" />
        </label>
        <button className="settings-edit-btn"></button>
      </div>
      <div className="settings-info-container">
        <label htmlFor="email">
          E-mail
          <input type="email" id="email" />
        </label>
        <button className="settings-edit-btn"></button>
      </div>
      <div className="settings-info-container">
        <label htmlFor="pass">
          Пароль
          <input type="password" id="pass" />
        </label>
        <button className="settings-edit-btn"></button>
      </div>
      <div className="settings-btns">
        <NotFilledBtn text="удалить аккаунт" />
        <NotFilledBtn text="выйти из системы" />
      </div>
    </div>
  </div>
);
