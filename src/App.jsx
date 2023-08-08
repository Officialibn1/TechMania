import './App.css'
import Home from './Pages/Home'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Announcement /> 
      <Navbar />
      <div className="container">
        <Home />        
      </div>  
    </>
  )
}

export default App
