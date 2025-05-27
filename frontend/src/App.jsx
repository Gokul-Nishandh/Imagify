import React, { useContext } from 'react'
import Home from "./../src/pages/Home.jsx"
import BuyCredit from "./../src/pages/BuyCredit.jsx"
import Result from "./../src/pages/Result.jsx"
import Navbar from "./../src/components/navbar.jsx"
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import { AppContext } from './contexts/AppContexts.jsx'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  const {showLogin} = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:  lg:px-28
    min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App