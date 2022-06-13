import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { NotFilledBtn } from '../../components/notFilledBtn';
import { changeAvatar, changeEmail, changeName, changePass } from '../../features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { InfoInput } from './InfoInput';
import './style.css';

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { name, email, pass, avatar } = useAppSelector((state) => state.userReducer);

  const editInfo = (field: string, value: string) => {
    switch (field) {
      case 'text': {
        dispatch(changeName(value));
        return;
      }
      case 'email': {
        dispatch(changeEmail(value));
        return;
      }
      case 'password': {
        dispatch(changePass(value));
        return;
      }
      default:
        return;
    }
  };

  const changeAvatarURL = (e: ChangeEvent) => {
    const url = URL.createObjectURL((e.target! as HTMLInputElement).files![0]);
    dispatch(changeAvatar(url));
  };

  return (
    <div className="settings">
      <div className="settings-avatar">
        <img src={avatar ? avatar : './assets/avatar.png'} alt="avatar" className="user-avatar" />
        <label htmlFor="settings-file" className="change-avatar-btn">
          {t('settings.changeAvatar')}
          <input id="settings-file" type="file" onChange={changeAvatarURL} />
        </label>
      </div>
      <div className="settings-info">
        <InfoInput title={t('settings.name')} placeholder={name} type="text" editInfo={editInfo} />
        <InfoInput title="E-mail" placeholder={email} type="email" editInfo={editInfo} />
        <InfoInput
          title={t('settings.pass')}
          placeholder={pass}
          type="password"
          editInfo={editInfo}
        />
        <div className="settings-btns">
          <NotFilledBtn text={t('settings.deleteAcc')} />
          <NotFilledBtn text={t('settings.signOut')} />
        </div>
      </div>
    </div>
  );
};
