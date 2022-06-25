import './style.css';

export interface BtnProps {
  text: string;
  toggleModal?: () => void;
}

export const FilledBtn = (props: BtnProps) => {
  const { text, toggleModal } = props;

  const callEvent = (e: React.MouseEvent) => {
    if (toggleModal) toggleModal();
  };

  return (
    <button className="filled-btn" onClick={callEvent}>
      {text}
    </button>
  );
};
