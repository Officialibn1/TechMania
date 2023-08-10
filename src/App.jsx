import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Announcement from './components/Announcement'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Announcement /> 
      <div className="container">
        <Navbar />
        {/* <Home />   */}
        <About />      
      </div>  
      <Footer />
    </>
  )
}

export default App
