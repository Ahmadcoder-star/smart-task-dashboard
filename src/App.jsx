import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CompletedTasks from "./pages/CompletedTasks";
import Settings from "./pages/Settings";
import './App.css'

function App() {

  return (
    <>
      <Header title="Smart Task Dashboard" />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
}

export default App;
