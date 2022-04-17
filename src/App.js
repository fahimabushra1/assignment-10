import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
