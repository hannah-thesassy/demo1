import { useState } from 'react'
import './App.css'
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Outlet, Redirect, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Header from './components/commons/Header';
import Sidebar from './components/commons/Sidebar';
import Dashboard from './pages/Dashboard';
import Content from './components/dashboard-compo/Content'
import Doctor from './pages/Doctor';
// import Doctor from './pages/Doctor';
// import NursePage from './NursePage';
import Medicine from './pages/Medicine';
import Patient from './pages/Patient';
import Login from './pages/Login';

function App() {
  const isAuthenticated = true;
  return (
    <Router>
      <Routes>
        <Route path="/hospital-manage/login" index element={<Login isLoggedIn={isAuthenticated} />} />
        {/* <Navigate to="/hospital-manage/login" /> */}
        <Route path="/hospital-manage" element={<Navigate to="/hospital-manage/login" />} />
      {isAuthenticated ? (
        <Route path="/hospital-manage" element={
          <div className='whole-container'>
          <Sidebar />
          <Header />
          <Outlet />
          </div>
        }>
          <Route path="/hospital-manage/dashboard" index element={<Dashboard />} />
          <Route path="/hospital-manage/doctor" index element={<Doctor />}/>
          <Route path="/hospital-manage/medicine" index element={<Medicine />}/>
          <Route path="/hospital-manage/patient" index element={<Patient />}/>
          
        </Route>
      ) 
      : (<Route path="/hospital-manage" element={<Navigate to="/hospital-manage/login" />} 
      />)}
      </Routes>
    </Router>
  );
}

export default App;
