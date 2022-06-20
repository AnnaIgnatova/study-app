import './style.css';
import { useTranslation } from 'react-i18next';
import { NavBlock } from '../main/NavBlock';
import { TopicCard } from '../../components/card';
import { Link } from 'react-router-dom';

export const Testing = () => {
  const { t } = useTranslation();

  return (
    <div className="main">
      <NavBlock route="testing" />
      <div className="tasks-container testing-container">
        <h2 className="main-title testing-title">{t('testing.title')}</h2>
        <hr className="theory-line" />
        <div className="testing-types">
          <Link to="/testing-task">
            <TopicCard
              title={t('testing.byTopics')}
              time={20}
              img="./assets/testing-topics.png"
              type="testing"
            />
          </Link>
          <Link to="/testing-task">
            <TopicCard
              title={t('testing.general')}
              time={45}
              img="./assets/testing-general.png"
              type="testing"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
