import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './pages/Home'
import './pages/About'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/common/layout'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
function App() {
 console.log("hel;lo app.jsx")
  return (
    <Layout>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about-us' element={<About/>}/>

      </Routes>
      {/* </BrowserRouter> */}
    </Layout>
  )
}

export default App
