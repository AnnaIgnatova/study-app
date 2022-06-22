import { useState } from 'react';
import { TestAnswer } from '../testAnswer';

// export interface TestData {
//   question: string;
//   answer_1: string;
//   answer_2: string;
//   answer_3: string;
//   right: string;
// }

// export interface TestBlockProps {
//   data: TestData;
//   index: number;
//   checkAnswers: boolean;
// }

// export interface Answers {
//   answer_1: boolean;
//   answer_2: boolean;
//   answer_3: boolean;
// }
const resetAnswers = {
  answer_1: false,
  answer_2: false,
  answer_3: false,
};

export const TestBlock = (props) => {
  const { data, index, checkAnswers } = props;
  const [answers, setAnswers] = useState(resetAnswers);
  const { question, right, answer_1, answer_2, answer_3 } = data;

  const chooseAnswer = (type) => {
    setAnswers((state) => {
      return { ...resetAnswers, [type]: true };
    });
  };

  return (
    <div className="test-block">
      <div className="test-block-header">
        <div className="test-block-num">{index}</div>
        <span className="test-block-title">{question}</span>
      </div>
      <div className="test-block-answers">
        {[answer_1, answer_2, answer_3].map((val, i) => {
          return (
            <TestAnswer
              answer={val}
              answerType={answers[`answer_${i + 1}`]}
              chooseAnswer={chooseAnswer}
              right={right}
              index={i + 1}
              checkAnswers={checkAnswers}
            />
          );
        })}
      </div>
    </div>
  );
};
