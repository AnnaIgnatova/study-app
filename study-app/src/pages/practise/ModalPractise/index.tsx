import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FilledBtn } from '../../../components/filledBtn';
import './style.css';

export interface ModalPractiseProps {
  setModalOpen: (value: boolean) => void;
}

export const ModalPractise = (props: ModalPractiseProps) => {
  const { t } = useTranslation();
  const { setModalOpen } = props;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="modal-answers-container"
      onClick={(e) => {
        const { target } = e;
        if ((target as HTMLElement).classList.contains('modal-answers-container')) closeModal();
      }}
    >
      <div className="modal-answers">
        <div className="close-modal" onClick={closeModal}></div>
        <div className="modal-answers-info">
          <div className="modal-title">{t('modalPractise.title')}</div>
          <img src="./assets/congratulation.png" alt="congratulation" />
          <Link to="/main">
            <FilledBtn text={t('modalPractise.toMain')} type="navigate" />
          </Link>
        </div>
      </div>
    </div>
  );
};
