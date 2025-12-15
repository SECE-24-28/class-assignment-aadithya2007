import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './componets/loginPage'
import Registerpage from './componets/Registerpage'
import Navbar from './componets/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/login" element={<LoginPage />}></Route>    
     <Route path="/register" element={<Registerpage />}></Route>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
