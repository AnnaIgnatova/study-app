import { changeTheme } from '../../features/theme/themeSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import './style.css';

export const Theme = () => {
  const dispatch = useAppDispatch();
  const { themeColor } = useAppSelector((state) => state.themeReducer);
  return (
    <label className="switch">
      <input
        checked={themeColor === 'dark'}
        type="checkbox"
        onChange={() => {
          dispatch(changeTheme());
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
