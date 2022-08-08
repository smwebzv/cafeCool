import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Faktura from './components/Faktura/Faktura';
import Login from './components/Login/Login';
import FirstTable from './components/FirstTable/FirstTable';
import SecondTable from './components/SecondTable/SecondTable';

function App() {
  return (
    <div className="container">
    <Router>
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/firstPage' element={<FirstPage />} />
        <Route path='/firstTable' element={<FirstTable />} />
        <Route path='/secondTable' element={<SecondTable />} />
        <Route path='/faktura' element={<Faktura />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
