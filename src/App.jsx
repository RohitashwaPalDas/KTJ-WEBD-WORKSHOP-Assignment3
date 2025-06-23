import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Startquiz from './pages/Startquiz';
import Quizgame from './pages/Quizgame';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import Footer from './components/Footer';

function App() {

  return (
    <div className='px-4 py-3 md:px-8 max-w-screen-xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/quiz' element={<Startquiz/>}></Route>
        <Route path='/quiz/start' element={<Quizgame/>}></Route>
        <Route path='/leaderboard' element={<Leaderboard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
