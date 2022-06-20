import { useState } from 'react';
import { TestAnswer } from '../testAnswer';

export interface TestBlockProps {
  title: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  index: number;
  right: number;
  checkAnswers: boolean;
}

export interface Answers {
  answer_1: boolean;
  answer_2: boolean;
  answer_3: boolean;
}
const resetAnswers = {
  // constant
  answer_1: false,
  answer_2: false,
  answer_3: false,
};

export const TestBlock = (props: TestBlockProps) => {
  const { title, answer_1, answer_2, answer_3, index, right, checkAnswers } = props;
  const [answers, setAnswers] = useState<Answers>(resetAnswers);

  const chooseAnswer = (type: string) => {
    setAnswers((state) => {
      return { ...resetAnswers, [type]: true };
    });
  };

  return (
    <div className="test-block">
      <div className="test-block-header">
        <div className="test-block-num">{index}</div>
        <span className="test-block-title">{title}</span>
      </div>
      <div className="test-block-answers">
        <TestAnswer
          answer={answer_1}
          answerType={answers.answer_1}
          chooseAnswer={chooseAnswer}
          index={1}
          right={right}
          checkAnswers={checkAnswers}
        />
        <TestAnswer
          answer={answer_2}
          answerType={answers.answer_2}
          chooseAnswer={chooseAnswer}
          index={2}
          right={right}
          checkAnswers={checkAnswers}
        />
        <TestAnswer
          answer={answer_3}
          answerType={answers.answer_3}
          chooseAnswer={chooseAnswer}
          index={3}
          right={right}
          checkAnswers={checkAnswers}
        />
      </div>
    </div>
  );
};
