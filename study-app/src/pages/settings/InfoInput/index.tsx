import { useState } from 'react';

export interface InfoInputProps {
  title: string;
  type: string;
  placeholder: string;
  editInfo: (field: string, value: string) => void;
}

export const InfoInput = (props: InfoInputProps) => {
  const { placeholder, title, type, editInfo } = props;
  const [value, setValue] = useState<string>(placeholder);
  const [isEdit, setEdit] = useState<boolean>(false);

  const cancelEdit = () => {
    setValue(placeholder);
    setEdit(false);
  };

  const saveEdit = () => {
    setEdit(false);
    editInfo(type, value);
  };

  return (
    <div className="settings-info-container">
      <label>
        {title}
        <input
          disabled={!isEdit}
          type={type}
          onInput={(e) => {
            setValue((e.target as HTMLInputElement).value);
          }}
          value={value}
        />
      </label>
      <div className="settings-edit-info-container">
        {isEdit ? (
          <div className="settings-change-btns">
            <button onClick={saveEdit}>сохранить</button>
            <button onClick={cancelEdit}>отмена</button>
          </div>
        ) : (
          <button
            className="settings-edit-btn"
            onClick={() => {
              setEdit(true);
            }}
          ></button>
        )}
      </div>
    </div>
  );
};
