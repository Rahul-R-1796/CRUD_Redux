import React from "react";
import EmpList from './EmpList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from "./Create"
import Update from "./Update"
import CommonHeader from "./CommonHeader";
import CommonFooter from "./CommonFooter";
import HomePage from"./HomePage"

function App() {
  return (
    <>
    <BrowserRouter>
    <CommonHeader/>
    <Routes>

      <Route path='/add-employee' element= {<Create/>}></Route>
      <Route path='/employee-list' element={<EmpList/>}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>
      <Route path='/' element= {<HomePage/>}></Route>

    </Routes>
    <CommonFooter/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
