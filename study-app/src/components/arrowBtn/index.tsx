import './style.css';

export interface ArrowBtnProps {
  text: string;
  right?: boolean;
  left?: boolean;
}

export const ArrowBtn = (props: ArrowBtnProps) => {
  const { text, left, right } = props;
  return (
    <div className="filled-btn arrow-btn">
      {left && <img src="./assets/arrow-right.png" alt="left" className="left-arrow-img" />}
      {text}
      {right && <img src="./assets/arrow-right.png" alt="left" className="right-arrow-img" />}
    </div>
  );
};
