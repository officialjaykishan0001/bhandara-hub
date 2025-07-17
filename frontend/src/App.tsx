import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Events from "./pages/Events";
import Signup from "./pages/signup";
import Signin from "./pages/singin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
