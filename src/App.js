import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import NavService from './Components/NavService/NavService';
import Ragister from './Components/Login/Ragister';
import AuthProvider from './Context/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="home" element={<Home />}>
            </Route>
            <Route path="navservices" element={<NavService />}>
            </Route>
            <Route path="about" element={<AboutUs />}>
            </Route>
            <Route path="contact" element={<Contact />}>
            </Route>
            <Route path="login" element={<Login />}>
            </Route>
            <Route path="ragister" element={<Ragister />}>
            </Route>
            <Route path="*" element={<NotFound />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
