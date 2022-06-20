import { useTranslation } from 'react-i18next';
import './style.css';

export interface ModalAnswersProps {
  setIsOpen: (value: boolean) => void;
}

export const ModalCheckingAnswers = (props: ModalAnswersProps) => {
  const { t } = useTranslation();
  const { setIsOpen } = props;
  const closeModal = () => {
    setIsOpen(false);
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
          <div className="modal-title">
            {t('modalAnswers.title')} <span>6 {t('modalAnswers.separate')} 10</span>
          </div>
          <img src="./assets/congratulation.png" alt="congratulation" />
          <span className="modal-answers-subtitle">{t('modalAnswers.subtitle')}</span>
        </div>
      </div>
    </div>
  );
};
