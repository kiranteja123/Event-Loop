import './App.css'
import Router from './Router';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
