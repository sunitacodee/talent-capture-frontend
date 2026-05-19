import './App.css'
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './pages/Home'
import './pages/About'
import Home from './pages/Home'
import About from './pages/About'
function App() {
 console.log("hel;lo app.jsx")
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
=======

function App() {

  return (
    <>
      <h1>Code xstep byh step</h1>

      <h1>hello react</h1>
>>>>>>> 157f9552c610c5f0174bf8db198cc541ed945d49
    </>
  )
}

export default App
