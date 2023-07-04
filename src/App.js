import './App.css';
import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/home.js';
import Createaccount from './Components/createaccount.js';
import Alldata from './Components/alldata.jsx';
import React from 'react';
import NavBar from './Components/navbar';
import Deposit from './Components/deposit.js';
import Withdraw from './Components/withdraw.js';
import Login from './Components/login.js'
import {UserContext} from './Components/context.js'

function App() {
  const [accounts, setAccounts] = useState([ 
    {
    name: "",
    email: "",
    password: "",
    balance: 0,
    }
  ])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{accounts, setAccounts}}>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="createaccount" element={<Createaccount/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="deposit" element={<Deposit/>}/>      
            <Route path="withdraw" element={<Withdraw/>}/>      
            <Route path="alldata" element={<Alldata/>}/> 
            <Route element={<Home />} />     
          </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App;
