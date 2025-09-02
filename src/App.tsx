import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Signup from "./pages/auth/index";
import Home from "./pages/feed/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
