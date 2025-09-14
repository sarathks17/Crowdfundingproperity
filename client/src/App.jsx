
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Projectdetails from './pages/Projectdetails'
import StartProject from './Pages/StartProject'
import Login from './pages/Login'
import AdminLogin from './pages/AdminLogin'
import Signup from './pages/Signup'
import Feedback from './pages/Feedback'
import BehaviorReport from './pages/BehaviorReport'
import About from './pages/About'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Accessibility from './pages/Accessibility'
import { ProjectProvider } from './context/ProjectContext'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router>
          <div className="font-sans flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<Projectdetails />} />
               <Route path="/start-project" element={<StartProject />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/behavior-report" element={<BehaviorReport />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/accessibility" element={<Accessibility />} />
              </Routes>
              <ToastContainer position="top-right" autoClose={3000} />
            </main>
            <Footer />
          </div>
        </Router>
      </ProjectProvider>
    </AuthProvider>
  )
}

export default App