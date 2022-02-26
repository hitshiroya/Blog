import './App.css';
import Navbar from './components/navbar/Navbar';
import { Settings } from './components/settings/Settings';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Single } from './pages/single/Single';
import { Write } from './pages/write/Write';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  let user = true;
  return (
    <BrowserRouter>
      <Navbar />



      <Routes>
        {user ? <Route path="/" element={<Home />} /> : <Route path="/register" element={<Register />} />}
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/settings" element={<Settings />} />




      </Routes>

    </BrowserRouter>
  );
}

export default App;
