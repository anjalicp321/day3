import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import Signup from './component/Signup'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Tbl from './component/Tbl'
import StateSpace from './component/StateSpace'
import Counter from './component/Counter'
import Anjali from './component/Anjali'
import Api from './component/Api'
import Product from './component/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/t" element={< Tbl />} />
        <Route path="/state" element={<StateSpace />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/name" element={<Anjali />} />
        <Route path="/api" element={<Api />} />
        <Route path="product" element={<Product/>}/>
      </Routes>
      <h1></h1>
      {/* <Login />
      <Signup />
       */}
    </>
  )
}

export default App
