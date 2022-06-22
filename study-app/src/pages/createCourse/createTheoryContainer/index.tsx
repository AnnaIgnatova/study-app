import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface CreateTheoryProps {
  createTheoryBlock: (data: any, i: any) => void;
  i: number;
  item: any;
}

export const CreateTheoryContainer = (props: CreateTheoryProps) => {
  const { t } = useTranslation();
  const { createTheoryBlock, i, item } = props;
  const [type, setType] = useState<string>(Object.keys(item)[0]);
  const [text, setText] = useState<string>(item[type]);

  const addInfo = (event: ChangeEvent) => {
    setText((event.target as HTMLTextAreaElement).value);
    const data = { [type]: text };
    createTheoryBlock(data, i);
  };

  const changeType = (e: ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value;
    setType(value);
    createTheoryBlock({ [value]: text }, i);
  };
  
  return (
    <div className="course-add-field">
      <textarea placeholder={text} rows={3} onChange={addInfo}></textarea>
      <select onChange={changeType}>
        <option value="title">title</option>
        <option value="img">img</option>
        <option value="text">text</option>
      </select>
    </div>
  );
};
