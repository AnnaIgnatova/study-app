import { useTranslation } from 'react-i18next';
import { changeSignInModalOpen } from '../../features/modal/modalSlice';
import { useAppDispatch } from '../../store';
import { FilledBtn } from '../filledBtn';
import './style.css';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../features/user/userSlice';

export const ModalSignIn = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState({ email: '', pass: '' });

  const toggleSignInModal = () => {
    dispatch(changeSignInModalOpen());
  };

  const signInUser = async () => {
    const data = { email: userData.email, password: userData.pass };
    dispatch(signIn({ ...data }));
    dispatch(changeSignInModalOpen());
  };

  const changeUserData = (type: string, e: FormEvent) => {
    setUserData((state) => {
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
          toggleSignInModal();
      }}
    >
      <div className="modal-answers">
        <div className="close-modal" onClick={toggleSignInModal}></div>
        <div className="modal-answers-info modal-sign-in">
          <h2 className="modal-title">{t('modalSignIn.title')}</h2>
          <input
            type="text"
            className="modal-input"
            placeholder="E-mail"
            onInput={(e) => {
              changeUserData('email', e);
            }}
          />
          <input
            type="password"
            className="modal-input"
            placeholder={t('modalSignIn.password')}
            onInput={(e) => {
              changeUserData('pass', e);
            }}
          />
          <FilledBtn text={t('modalSignIn.signIn')} toggleModal={signInUser} />
          <hr className="modal-line" />
          <ul className="modal-social-links">
            <li className="modal-social-link"></li>
            <li className="modal-social-link"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
