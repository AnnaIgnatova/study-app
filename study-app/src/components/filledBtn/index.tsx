import './style.css';

export interface BtnProps {
  text: string;
}

export const FilledBtn = (props: BtnProps) => {
  const { text } = props;
  return <button className="filled-btn">{text}</button>;
};
