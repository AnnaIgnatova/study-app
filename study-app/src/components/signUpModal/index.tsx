import { useTranslation } from 'react-i18next';
import { changeSignUpModalOpen } from '../../features/modal/modalSlice';
import { useAppDispatch } from '../../store';
import { FilledBtn } from '../filledBtn';
import './style.css';

export const ModalSignUp = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const toggleSignUpModal = () => {
    dispatch(changeSignUpModalOpen());
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
          <input type="text" className="modal-input" placeholder={t('modalSignUp.name')} />
          <input type="text" className="modal-input" placeholder="E-mail" />
          <input type="password" className="modal-input" placeholder={t('modalSignUp.password')} />
          <FilledBtn text={t('modalSignUp.signUp')} />
        </div>
      </div>
    </div>
  );
};