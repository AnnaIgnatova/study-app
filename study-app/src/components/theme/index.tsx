import { changeTheme } from '../../features/theme/themeSlice';
import { useAppDispatch } from '../../store';
import './style.css';

export const Theme = () => {
  const dispatch = useAppDispatch();
  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={() => {
          dispatch(changeTheme());
        }}
      />
      <span className="slider round"></span>
    </label>
  );
};
