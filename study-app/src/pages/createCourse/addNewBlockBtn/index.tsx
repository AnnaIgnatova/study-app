export interface NewBlockBtnProps {
  text: string;
  toggleModal: () => void;
}

export const AddNewBlockBtn = (props: NewBlockBtnProps) => {
  const { text, toggleModal } = props;

  return (
    <button
      className="filled-btn not-filled-btn"
      onClick={(e) => {
        e.preventDefault();
        toggleModal();
      }}
    >
      {text}
    </button>
  );
};
