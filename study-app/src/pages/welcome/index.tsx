import './style.css';

export const Welcome = () => (
  <div className="welcome">
    <div className="welcome-circle"></div>
    <h2 className="welcome-title">Интерактивный онлайн-курс по созданию web-приложений</h2>
    <span className="welcome-subtitle">мы обучили уже более 1000 студентов</span>
    <img src="./assets/welcome.png" alt="welcome img" className='welcome-img'/>
  </div>
);
