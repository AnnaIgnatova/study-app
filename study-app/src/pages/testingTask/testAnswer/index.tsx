export interface TestAnswerProps {
  answer: string;
  answerType: boolean;
  chooseAnswer: (type: string) => void;
  index: number;
  right: number;
  checkAnswers: boolean;
}

export const TestAnswer = (props: TestAnswerProps) => {
  const { answer, chooseAnswer, answerType, index, checkAnswers, right } = props;

  return (
    <div className="test-block-answer">
      <div
        className={`test-block-answer-input ${
          answerType && !checkAnswers ? 'choosen-answer' : ''
        } ${
          checkAnswers && right === index
            ? 'right-answer'
            : checkAnswers && right !== index && answerType
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
