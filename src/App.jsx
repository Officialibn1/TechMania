import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import ItemPreview from './Pages/ItemPreview'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Signup from './Pages/Signup'
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
        {/* <Login /> */}
        {/* <Signup /> */}
        <Profile />
        {/* <Navbar /> */}
        {/* <Home />   */}
        {/* <About />    */}
        {/* <Cart />    */}
        {/* <ItemPreview /> */}
        {/* <ChatbotIcon /> */}
      </div>  
      {/* <Footer /> */}
    </div>
  )
}

export default App
