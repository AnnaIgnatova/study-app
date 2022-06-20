import './style.css';

export interface ModalAnswersProps {
  setIsOpen: (value: boolean) => void;
}

export const ModalCheckingAnswers = (props: ModalAnswersProps) => {
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
            ваш балл <span>6 из 10</span>
          </div>
          <img src="./assets/congratulation.png" alt="congratulation" />
          <span className="modal-answers-subtitle">тест пройден</span>
        </div>
      </div>
    </div>
  );
};
