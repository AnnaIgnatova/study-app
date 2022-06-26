import { useTranslation } from 'react-i18next';
import { changeSignUpModalOpen } from '../../features/modal/modalSlice';
import { useAppDispatch } from '../../store';
import { FilledBtn } from '../filledBtn';
import './style.css';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../features/user/userSlice';

export const ModalSignUp = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState({ name: '', email: '', pass: '' });

  const toggleSignUpModal = () => {
    dispatch(changeSignUpModalOpen());
  };

  const signUpUser = async () => {
    const progress = JSON.stringify({ mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0, sun: 0 });
    const data = {
      name: userData.name,
      email: userData.email,
      password: userData.pass,
      progress,
      level: 0,
      img: '',
      courses: '',
    };
    dispatch(signUp({ ...data }));
    dispatch(changeSignUpModalOpen());
  };

  const changeUserData = (type: string, e: FormEvent) => {
    setUserData((state: any) => {
      return {
        ...state,
        [type]: (e.target as HTMLInputElement).value,
      };
    });
  };

  return (
    <div
      className="modal-answers-container"
      onClick={(e) => {
        const { target } = e;
        if ((target as HTMLElement).classList.contains('modal-answers-container'))
          toggleSignUpModal();
      }}
    >
      <div className="modal-answers">
        <div className="close-modal" onClick={toggleSignUpModal}></div>
        <div className="modal-answers-info modal-sign-in">
          <h2 className="modal-title">{t('modalSignUp.title')}</h2>
          <input
            type="text"
            className="modal-input"
            placeholder={t('modalSignUp.name')}
            onInput={(e) => changeUserData('name', e)}
          />
          <input
            type="text"
            className="modal-input"
            placeholder="E-mail"
            onInput={(e) => changeUserData('email', e)}
          />
          <input
            type="password"
            className="modal-input"
            placeholder={t('modalSignUp.password')}
            onInput={(e) => changeUserData('pass', e)}
          />
          <FilledBtn text={t('modalSignUp.signUp')} toggleModal={signUpUser} />
        </div>
      </div>
    </div>
  );
};
