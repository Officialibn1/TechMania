import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import ItemPreview from './Pages/ItemPreview'
// import Announcement from './components/Announcement'
import Cart from './components/Cart'
import ChatbotIcon from './components/ChatbotIcon'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='mainContainer'>
      {/* <Announcement />  */}
      <div className="container">
        <Navbar />
        {/* <Home />   */}
        {/* <About />    */}
        {/* <Cart />    */}
        <ItemPreview />
        <ChatbotIcon />
      </div>  
      <Footer />
    </div>
  )
}

export default App
