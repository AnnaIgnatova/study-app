import { useState } from 'react';

export interface TestAnswerProps {
  answer: string;
  answerType: boolean;
  chooseAnswer: (type: string) => void;
  index: number;
}

export const TestAnswer = (props: TestAnswerProps) => {
  const { answer, chooseAnswer, answerType, index } = props;

  return (
    <div className="test-block-answer">
      <div
        className={`test-block-answer-input ${answerType ? 'choosen-answer' : ''}`}
        onClick={() => {
          chooseAnswer(`answer_${index}`);
        }}
      ></div>
      <label className="test-block-answer-text">{answer}</label>
    </div>
  );
};
