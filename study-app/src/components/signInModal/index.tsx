import { useTranslation } from 'react-i18next';
import { changeSignInModalOpen } from '../../features/modal/modalSlice';
import { useAppDispatch } from '../../store';
import { FilledBtn } from '../filledBtn';
import './style.css';
import UserDataService from './../../services/user.service';

export const ModalSignIn = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const toggleSignInModal = () => {
    dispatch(changeSignInModalOpen());
  };

  const signIn = async () => {
    // UserDataService.signIn();
    UserDataService.findUser('email2').then((res) => console.log(res));
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
          <input type="text" className="modal-input" placeholder="E-mail" />
          <input type="password" className="modal-input" placeholder={t('modalSignIn.password')} />
          <FilledBtn text={t('modalSignIn.signIn')} toggleModal={signIn} />
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
