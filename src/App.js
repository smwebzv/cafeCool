import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Faktura from './components/Faktura/Faktura';
import Login from './components/Login/Login';
import FirstTable from './components/FirstTable/FirstTable';
import SecondTable from './components/SecondTable/SecondTable';
import { useEffect } from 'react';
import { GetDrinks } from './actions/drinkActions';
import axios from 'axios';


function App() {

  useEffect(()=> {
    GetDrinkss().then((res)=>{
      console.log(res.data);
    }).catch((err)=> {
      console.log(err);
    })
  }, [])

  const GetDrinkss = () => {
    return axios.get( "http://18.193.130.171/drinks"
    )
  }

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
