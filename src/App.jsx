import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Tweets } from './components/Tweets/Tweets';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.header}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tweets/:id" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
