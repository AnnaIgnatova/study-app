import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export interface BtnProps {
  text: string;
  toggleModal?: () => void;
  type?: string;
}

export const FilledBtn = (props: BtnProps) => {
  const { text, toggleModal, type } = props;
  const navigate = useNavigate();

  const callEvent = (e: React.MouseEvent) => {
    if (type === 'navigate') {
      navigate('/main');
      return;
    }
    e.preventDefault();
    if (toggleModal) toggleModal();
  };

  return (
    <button className="filled-btn" onClick={callEvent}>
      {text}
    </button>
  );
};
