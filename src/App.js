import React from 'react';
import './App.css';
import { Route, Routes,Navigate } from "react-router-dom"
import AddTodo from './Component/AddTodo/AddTodo';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';

function App() {
  return (   
    <>
      <Header/>
      <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="/todo"  element={<AddTodo/>}/>
        <Route path='*'  element={<Navigate to="/" replace={true}/>} />
      </Routes>
    </>
  );
}

export default App;
