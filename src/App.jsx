import { Route, Routes } from "react-router-dom";

/* Importação das Páginas */
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Experiences from './pages/Experiences';
import Pag404 from './pages/Pag404';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Talk from "./pages/Talk";
import useColorModeBasedOnTime from './components/ColorModeBasedOnTime.jsx'
import './App.css'



function App() {
  useColorModeBasedOnTime();
  
  return (
      <>
     
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/experiences' element={<Experiences />} />
            <Route path='/talk' element={<Talk />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path='*' element={<Pag404 />} />
        </Routes>
        
      </>
    
  );
}

export default App;
