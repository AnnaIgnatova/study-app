import { BtnProps } from '../filledBtn';
import './style.css';

export const NotFilledBtn = (props: BtnProps) => {
  const { text, toggleModal } = props;
  return (
    <button className="filled-btn not-filled-btn" onClick={toggleModal}>
      {text}
    </button>
  );
};
