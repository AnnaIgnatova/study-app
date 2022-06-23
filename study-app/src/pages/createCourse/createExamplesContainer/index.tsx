import { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface CreateExamplesProps {
  createExamplesBlock: (data: any, i: any) => void;
  i: number;
  item: any;
}

export const CreateExamplesContainer = (props: CreateExamplesProps) => {
  const { t } = useTranslation();
  const { createExamplesBlock, i, item } = props;
  const [type, setType] = useState<string>(Object.keys(item)[0]);
  const [text, setText] = useState<string>(item[type]);

  const addInfo = (event: FormEvent) => {
    const value = (event.target as HTMLTextAreaElement).value;
    setText(value);
    createExamplesBlock({ [type]: value }, i);
  };

  const changeType = (e: ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value;
    setType(value);
    createExamplesBlock({ [value]: text }, i);
  };

  return (
    <div className="course-add-field">
      <textarea placeholder={text} rows={3} onInput={addInfo}></textarea>
      <select onChange={changeType}>
        <option value="title">title</option>
        <option value="code">code</option>
        <option value="text">text</option>
      </select>
    </div>
  );
};
