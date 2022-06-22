export interface TestAnswerProps {
  answer: string;
  answerType: any;
  chooseAnswer: (type: string) => void;
  right: string;
  checkAnswers: boolean;
  index: number;
}

export const TestAnswer = (props: TestAnswerProps) => {
  const { answer, chooseAnswer, answerType, checkAnswers, right, index } = props;

  return (
    <div className="test-block-answer">
      <div
        className={`test-block-answer-input ${
          answerType && !checkAnswers ? 'choosen-answer' : ''
        } ${
          checkAnswers && right === answer
            ? 'right-answer'
            : checkAnswers && right !== answer && answerType
            ? 'wrong-answer'
            : ''
        }`}
        onClick={() => {
          chooseAnswer(`answer_${index}`);
        }}
      ></div>
      <label className="test-block-answer-text">{answer}</label>
    </div>
  );
};
