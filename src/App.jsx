import { Outlet } from 'react-router-dom'
import './App.css'
import Navitems from './components/Navitems'
import Footer from './home/Footer'

function App() {
  

  return (
    <>
     <Navitems/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
