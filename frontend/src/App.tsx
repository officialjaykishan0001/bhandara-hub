import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Events from './pages/Events'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path='/events' element={<Events/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
