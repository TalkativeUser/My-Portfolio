import { StrictMode } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'
// import Layout from './components/Layout/Layout'
// import About from './pages/About/About'
// import ContactUs from './pages/ContactUs/ContactUs'
import Home from './pages/Home/Home'
// import Projects from './pages/Projects/Projects'
// import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import ContactUs from './pages/ContactUs/ContactUs'
import PageNotFound from './pages/PageNotFound/PageNotFound'

function App() {
  
  const location=useLocation()

  if(location.hash!=='#home' &&location.hash!=='#about' &&location.hash!=='#projects' &&location.hash!=='#contact' &&location.hash!=='' ){
       return <PageNotFound/>
  }

  return (
  <StrictMode>

      <Navbar />

    <div className="sections  ">
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactUs /></div>
    </div>
    {/* <AnimatePresence mode='wait' >
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Layout />}>  
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </AnimatePresence> */}

   

   
 
  </StrictMode>
  )
}

export default App
