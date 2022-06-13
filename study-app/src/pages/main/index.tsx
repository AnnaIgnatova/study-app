import { NavBlock } from './NavBlock';
import './style.css';

export const Main = () => (
  <div className="main">
    <NavBlock />
    <div className="tasks-container">
      <div className="main-search-container">
        <input type="search" className="main-search" placeholder="Search" />
      </div>
      <h2 className="main-title">Выберите интересующую тему</h2>
    </div>
  </div>
);
