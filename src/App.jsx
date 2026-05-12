import React from 'react';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Layout from './MainLayout/Layout';
import Contact from './Pages/Contact';
import Panier from './Pages/Panier';
import MenProduct from './Pages/MenProduct';
import WomenProduct from './Pages/WomenProduct';
import Perruques from './Pages/Perruques';
import Bijoux from './Pages/Bijoux';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
   <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
   
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route  path='panier' element={<Panier/>}/>
          <Route path='hommes' element={<MenProduct/>}/>
          <Route path='femmes' element={<WomenProduct/>}/>
          <Route path='perruques' element={<Perruques/>}/>
          <Route path='bijoux' element={<Bijoux/>}/>

        </Route>
      </Routes>
    
   </div>
  )
}

export default App;