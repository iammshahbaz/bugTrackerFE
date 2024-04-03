
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainRoutes from './allroutes/MainRoutes'
import Navbar from './components/Navbar'

function App() {

  return (

    <BrowserRouter>
    <Navbar/>
      <MainRoutes />
      
    </BrowserRouter>

  )
}

export default App
