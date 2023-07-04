import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Tweets } from './components/Tweets/Tweets';
import css from './App.module.css'

const App = ()  => {
  return (
    <div className={css.header}>
      <Link to="/">Home</Link>
      {/* <Link to="/tweets/:id">Tweets</Link> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tweets/:id' element={<Tweets />} />
      </Routes>
    </div>
  );
}

export default App;
