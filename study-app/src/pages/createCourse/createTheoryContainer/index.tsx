import { ChangeEvent, FormEvent, useState } from 'react';
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

  const addInfo = (event: FormEvent) => {
    const value = (event.target as HTMLTextAreaElement).value;
    setText(value);
    createTheoryBlock({ [type]: value }, i);
  };

  const changeType = (e: ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value;
    setType(value);
    createTheoryBlock({ [value]: text }, i);
  };

  return (
    <div className="course-add-field">
      <textarea placeholder={text} rows={3} onInput={addInfo}></textarea>
      <select onChange={changeType}>
        <option value="title">{t('createCourse.titleOption')}</option>
        <option value="img">{t('createCourse.imgOption')}</option>
        <option value="text">{t('createCourse.textOption')}</option>
      </select>
    </div>
  );
};
