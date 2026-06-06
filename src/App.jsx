import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/about/About';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ErrorPage from './components/common/ErrorPage';
import InterviewLevelSelection from './components/common/InterviewLevelSelection';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { UserContextProvider } from './context/UserContext';

function App() {

  return (
    <>
    <div className="bg-black App">
      <UserContextProvider>

        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />

            <Route element={<ProtectedRoute />} >
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path='/interviewLevelSelection' element={<InterviewLevelSelection />} />
                <Route path='/error' element={<ErrorPage />} />
            </Route>

          </Routes>

        </UserContextProvider>
    </div>
    </>
  )
}

export default App
