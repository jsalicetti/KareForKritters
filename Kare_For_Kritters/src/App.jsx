import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Locationpage from './components/Locationmappage';
import Successpage from './components/Successpage';
import Resourcespage from './components/Resourcespage';
import Adoptionprocesspage from './components/Adoptionprocesspage';
import Loginpage from './components/Loginpage';

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/location" element={<Locationpage />} />
        <Route path="/success" element={<Successpage />} />
        <Route path="/resources" element={<Resourcespage />} />
        <Route path="/adoption-process" element={<Adoptionprocesspage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

