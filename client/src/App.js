import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Test from './components/sample/Test';


function App() {



  return (
    <BrowserRouter>
   <Routes>
   <Route path='/' element={<Test/>}/>
    </Routes> 
    </BrowserRouter>
    
  );
}

export default App;
