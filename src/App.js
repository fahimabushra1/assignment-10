import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetail from './Pages/ServicesDetail/ServiceDetail';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import useServices from './hooks/useServices';
import { createContext } from 'react';
import Checkout from './Pages/Checkout/Checkout';

export const ServiceContext = createContext()

function App() {
  const [services, setServices] = useServices()
  // console.log(services)
  return (
    <ServiceContext.Provider value={[services, setServices]}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='service/:id' element={<ServiceDetail />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>} />

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>

    </ServiceContext.Provider>
  );
}

export default App;
