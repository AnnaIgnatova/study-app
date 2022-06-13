import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { CreateCourse } from './pages/createCourse';
import { Example } from './pages/example';
import { Main } from './pages/main';
import { NotFound } from './pages/notFound';
import { Practise } from './pages/practise';
import { Settings } from './pages/settings';
import { Testing } from './pages/testing';
import { TestingTask } from './pages/testingTask';
import { Theory } from './pages/theory';
import { User } from './pages/user';
import { Welcome } from './pages/welcome';
import { useAppSelector } from './store';

const App = () => {
  const { isLight } = useAppSelector((state) => state.themeReducer);
  return (
    <div className="container" style={{ backgroundColor: isLight ? '#503e9d' : '#140F2D' }}>
      <Header />
      <RoutesWrapper>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/testing" element={<Testing />}></Route>
        <Route path="/testing-task" element={<TestingTask />}></Route>
        <Route path="/theory" element={<Theory />}></Route>
        <Route path="/examples" element={<Example />}></Route>
        <Route path="/practise" element={<Practise />}></Route>
        <Route path="/create-course" element={<CreateCourse />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </RoutesWrapper>
    </div>
  );
};

export default App;
