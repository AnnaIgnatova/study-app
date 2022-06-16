import './style.css';

export interface BtnProps {
  text: string;
  right?: boolean;
  left?: boolean;
}

export const FilledBtn = (props: BtnProps) => {
  const { text, right, left } = props;
  return (
    <button className="filled-btn">
      {text}
      {right && <img src="./assets/arrow-right.png" alt="arrow right" />}
    </button>
  );
};
