import { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface CreatePractiseProps {
  createPractiseBlock: (data: any, i: any) => void;
  i: number;
  item: any;
}

export const CreatePractiseContainer = (props: CreatePractiseProps) => {
  const { t } = useTranslation();
  const { createPractiseBlock, i, item } = props;
  const [type, setType] = useState<string>(Object.keys(item)[0]);
  const [text, setText] = useState<string>(item[type]);

  const addInfo = (event: FormEvent) => {
    const value = (event.target as HTMLTextAreaElement).value;
    setText(value);
    createPractiseBlock({ [type]: value }, i);
  };

  const changeType = (e: ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value;
    setType(value);
    createPractiseBlock({ [value]: text }, i);
  };

  return (
    <div className="course-add-field">
      <textarea placeholder={text} rows={3} onInput={addInfo}></textarea>
      <select onChange={changeType}>
        <option value="title">title</option>
        <option value="img">img</option>
      </select>
    </div>
  );
};
