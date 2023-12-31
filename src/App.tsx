import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Favorites from './pages/favorites/Favorites';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <div className="global-container">

      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/favorites" element={ <Favorites /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
