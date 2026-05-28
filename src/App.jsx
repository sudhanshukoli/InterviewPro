import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/about/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import InterviewLevelSelection from './components/common/InterviewLevelSelection';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  // const isLogged = localStorage.getItem("isLogged");

  return (
    <>
    <div className="bg-black App">

      <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route element={<ProtectedRoute />} >
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path='/interviewLevelSelection' element={<InterviewLevelSelection />} />
          </Route>

        </Routes>

      {/* { isLogged ? 
        (<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>)
        : (<Login />)
      } */}
    </div>
    </>
  )
}

export default App
