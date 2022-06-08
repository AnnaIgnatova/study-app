import './style.css';

export const Lang = () => {
  return (
    <div className='select-container'>
      <img src="./assets/lang.png" alt="lang" className="select-img" />
      <select className="select">
        <option>RU</option>
        <option>EN</option>
      </select>
    </div>
  );
};
