import { BtnProps } from '../filledBtn';
import './style.css';

export const NotFilledBtn = (props: BtnProps) => {
  const {text} = props;
  return <button className="filled-btn not-filled-btn">{text}</button>;
};
