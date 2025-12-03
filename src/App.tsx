import { StrictMode } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import ContactUs from './pages/ContactUs/ContactUs'
import PageNotFound from './pages/PageNotFound/PageNotFound'


function App() {
  



  return (
  <StrictMode>



      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Layout />}>  
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path="projects/:projectId?" element={<ProjectDetails />} />
          <Route path='/*' element={<PageNotFound />} />

        </Route>
      </Routes>
 
  </StrictMode>
  )
}

export default App

