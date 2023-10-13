import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="global-container">

      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
