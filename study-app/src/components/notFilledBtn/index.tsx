import { BtnProps } from '../filledBtn';
import './style.css';

export const NotFilledBtn = (props: BtnProps) => {
  const { text, toggleModal } = props;

  const callEvent = (e: React.MouseEvent) => {
    if (toggleModal) toggleModal();
  };

  return (
    <button className="filled-btn not-filled-btn" onClick={callEvent}>
      {text}
    </button>
  );
};
