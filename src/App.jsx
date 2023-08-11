import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Announcement from './components/Announcement'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='mainContainer'>
      <Announcement /> 
      <div className="container">
        <Navbar />
        {/* <Home />   */}
        {/* <About />    */}
        <Cart />   
      </div>  
      <Footer />
    </div>
  )
}

export default App
