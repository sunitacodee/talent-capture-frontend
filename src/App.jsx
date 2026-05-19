import './App.css'
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
    </>
  )
}

export default App
