import './style.css';

export interface BtnProps {
  text: string;
  toggleModal?: () => void;
}

export const FilledBtn = (props: BtnProps) => {
  const { text, toggleModal } = props;
  return (
    <button className="filled-btn" onClick={toggleModal}>
      {text}
    </button>
  );
};
