import React, { useState } from 'react'
import './App.scss';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
    {/* <div>
      <h1>Hello!</h1>
  
      <p>I am a software engineer who is passionate about clean and efficient design. My skill set is built around collaboration whether that be directing a team or boosting an idea to its full potential. As an engineer, I am determined to execute and enhance the customer's experience. I am flexible and centralize new information that will make me a strengthened developer.</p>
     
    </div> */}
    </>
  )
}

export default App;
