import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components-pages/Homepage";
import Locationpage from "./components-pages/Locationmappage";
import Successpage from "./components-pages/Successpage";
import Resourcespage from "./components-pages/Resourcespage";
import Adoptionprocesspage from "./components-pages/Adoptionprocesspage";
import Loginpage from "./components-pages/Loginpage";
import Applicationpage from "./components-pages/Applicationpage";
import Signuppage from "./components-pages/Signuppage";
import Viewallpetspage from "./components-pages/Viewallpetspage";
import Userprofilepage from "./components-pages/Userprofilepage";
import Adminpage from "./components-pages/Adminpage";



export default function App() {
  return (
    
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
        <Route path="/userprofile" element={<Userprofilepage />} />
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
  );
}
