import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout/Layout';

function App() {
  return (
    <div className="global-container">

      <Routes>
        <Route path="/" element={ <Layout /> } />
      </Routes>
    </div>
  );
}

export default App;
