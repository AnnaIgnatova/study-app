import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export interface TestingBlockProps {
  data: any;
  i: number;
  createTestingBlock: (data: any, i: number) => void;
}

export const CreateTestingContainer = (props: TestingBlockProps) => {
  const { data, i, createTestingBlock } = props;
  const [questionData, setQuestionData] = useState(data);
  const { t } = useTranslation();

  const changeData = async (type: string, e: ChangeEvent) => {
    const newValue = { ...questionData, [type]: (e.target as HTMLInputElement).value };
    setQuestionData(() => {
      return {
        ...newValue,
      };
    });
    createTestingBlock(newValue, i);
  };

  return (
    <div className="testing-create-container">
      <label htmlFor="questinon">
        {t('createCourse.question')}
        <input
          type="text"
          id="questinon"
          placeholder={questionData.questinon}
          onChange={(e) => {
            changeData('question', e);
          }}
        />
      </label>
      <label htmlFor="answer_1">
        {t('createCourse.answer')} 1
        <input
          type="text"
          id="answer_1"
          placeholder={questionData.answer_1}
          onChange={(e) => {
            changeData('answer_1', e);
          }}
        />
      </label>
      <label htmlFor="answer_2">
        {t('createCourse.answer')} 2
        <input
          type="text"
          id="answer_2"
          placeholder={questionData.answer_2}
          onChange={(e) => {
            changeData('answer_2', e);
          }}
        />
      </label>
      <label htmlFor="answer_3">
        {t('createCourse.answer')} 3
        <input
          type="text"
          id="answer_3"
          placeholder={questionData.answer_3}
          onChange={(e) => {
            changeData('answer_3', e);
          }}
        />
      </label>
      <label htmlFor="right">
        {t('createCourse.right')}
        <input
          type="text"
          id="right"
          placeholder={questionData.right}
          onChange={(e) => {
            changeData('right', e);
          }}
        />
      </label>
    </div>
  );
};
