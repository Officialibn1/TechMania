import './App.css'
import Home from './Pages/Home'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Announcement /> 
      <div className="container">
        <Navbar />
        <Home />        
      </div>  
    </>
  )
}

export default App
