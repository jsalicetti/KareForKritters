import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Locationpage from './components/Locationmappage';
import Successpage from './components/Successpage';
import Resourcespage from './components/Resourcespage';
import Adoptionprocesspage from './components/Adoptionprocesspage';
import Loginpage from './components/Loginpage';
import Applicationpage from './components/Applicationpage';
import Signuppage from './components/Signuppage';
import Viewallpetspage from './components/Viewallpetspage';


// * save for later - anchors for resources page
// import Pettrainingpage from './components/Pettrainingpage';
// import Healthpage from './components/Healthpage';
// import Insurancepage from './components/Insurancepage';

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
        <Route path="/adoption-application" element={<Applicationpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/pets" element={<Viewallpetspage />} />
      </Routes>
    </BrowserRouter>
  );
}

 /* <Route path="/resources#pet-training" element={<Resourcespage />} />
        <Route path="/resources#health-tips" element={<Resourcespage />} />
        <Route path="/resources#pet-insurance" element={<Resourcespage />} /> */

