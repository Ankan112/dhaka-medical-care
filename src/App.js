import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}>
          </Route>
          <Route path="home" element={<Home />}>
          </Route>
          <Route path="services" element={<Services />}>
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
