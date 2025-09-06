import { Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Signup from "./pages/auth/index";
import Home from "./pages/feed/Home";
import Group from "./pages/group/Group";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/groups" element={<Group />} />
    </Routes>
  );
}

export default App;
