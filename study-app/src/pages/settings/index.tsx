import { useTranslation } from 'react-i18next';
import { NotFilledBtn } from '../../components/notFilledBtn';
import { changeEmail, changeName, changePass } from '../../features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { InfoInput } from './InfoInput';
import './style.css';

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { name, email, pass } = useAppSelector((state) => state.userReducer);

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

  return (
    <div className="settings">
      <div className="settings-avatar">
        <img src="./assets/avatar.png" alt="avatar" className="user-avatar" />
        <NotFilledBtn text={t('settings.changeAvatar')} />
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
