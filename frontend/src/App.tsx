import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Events from "./pages/Events";
import Signup from "./pages/signup";
import Signin from "./pages/singin";
import BhandaraDetail from "./pages/bhandaraDetail";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/bhandara/:id" element={<BhandaraDetail/>} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
