import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './Home';
import {

  Routes,
Route
} from "react-router-dom";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
 
  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
   
     </Routes>
  
    
    </>
  
  );
};

export default App;
