import './App.css'
import './components/SectionOne.css'
import './components/SectionTwo.css'
import './components/SectionThree.css'
import './components/SectionFour.css'
import Home from './Home'
import BookingPage from './BookingPage'
import { Routes, Route } from 'react-router'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<BookingPage />} />
    </Routes>
  )
}

export default App
