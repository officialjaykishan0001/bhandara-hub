import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import AllEvents from './pages/all-events'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path='/all-events' element={<AllEvents/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
