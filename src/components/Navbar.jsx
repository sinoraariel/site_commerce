import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../assets/Logo.jpg';
import { IoSearch } from "react-icons/io5";
import {FaCaretDown} from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import DarkMode from "./DarkMode"
import { Menu, X, Zap } from 'lucide-react';
import {  useLocation } from 'react-router-dom';
// import { useContext } from "react";
// import { SearchContext } from "../Context/SearchContext";
const Onglet =[
  {
    id:1,
    name : "Accueil",
    link: "/",
  },
  {
    id:3,
    name : "Mon Panier",
    link: "/panier",
  },
  {
    id:4,
    name : "Contact",
    link: "/contact",
  },
  
]
const categorie = [
  {
    id : 1,
    name : "Hommes",
    Link: "hommes",
  },
   {
    id : 2,
    name : "Femmes",
    Link: "femmes",
  },
   {
    id : 3,
    name : "Enfant",
    Link: "enfant",
  },
  {
    id : 4,
    name : "Bijoux",
    Link: "bijoux",
  },
  {
    id : 5,
    name : "Perruques ",
    Link: "perruques",
  },
  {
    id : 6,
    name : "Maillots ",
    Link: "maillots",
  },
  
]
// const { searchTerm, setSearchTerm } = useContext(SearchContext);
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const isActive = (path) => location.pathname === path;
const location = useLocation();
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/100 backdrop-blur-md shadow-lg border-b border-neutral-200/50' 
        : 'bg-transparent'
    }`}>
      <div className='shadow-md bg-white dark:bg-gray-700 dark:text-white duration-200  relative z-40'>
      {/*upper Navbar*/}
      <div className='bg-primary/70 py-1  '>
        <div className='container flex justify-between items-center'>
             <div>
                <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={logo} alt='logo'
                    className='w-10  uppercase rounded-full' />
                    <p className='mt-5 mb-6 dark:text-white ' style={{fontSize:'20px'}}>EldoraShop</p>
                    
                </a>
             </div>
             {/* search bar */}
              <div className='flex  justify-start items-center gap-4'>
                    <div className='relative group  sm:block'>
                        <input 
                        type="text"
                        placeholder="search "
                        // value={searchTerm}
                        //  onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-[200px]  sm:w-[200px] group-hover:w-[300px] transition-all duration-300 
                        rounded-full border border-gray-300 px-2 pY-1 focus:outline-none focus:border-1
                        hover:border-primary dark:border-gray-600 dark:bg-gray-800"
                        />
                        <IoSearch
                        className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                        />
                    </div>
                
                {/* order button */}
                <button onClick={() => alert("Ordering not available  yet")}
                  className='flex  bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                  py-1 px-4 rounded-full  flex items-center gap-3 group'>
                  <span 
                  className='group-hover:block hidden transition-all duration-200'>panier</span>
                  <PiShoppingCartSimpleBold
                  className="text-xl text-white drop-shaddow-sm cursor-pointer" /> 
                </button>
                {/* Darkmode button */}
                <div>
                  <DarkMode/>
                </div>
              </div>
        </div>
      </div>
      {/*lower Navbar*/}
      <div className='hidden lg:flex flex justify-center'>
        <ul className='sm:flex hidden item-center gap-4'>
          {
            Onglet.map((data) => (
              <li key={data.id}>
                <NavLink to={data.link}
                className={`inline-block hover:text-primary px-4 dark:text-white dark:hover:text-primary duration-200 ${
                  isActive(data.link)
                    ? 'text-black bg-primary-150 bg-primary/20 rounded-md hover:text-black'
                    : isScrolled 
                      ? 'text-black hover:text-primary-600 ' 
                      : 'text-black hover:text-primary-200  '
                }`}
                >{data.name}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ${
                  isActive(data.link) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
                </NavLink>
              </li>
            ))
          }
           {/* {simple dropdown and links} */}
           <li className='group relative cursor-pointer'>
            <a href='#'
            className='flex items-center gap-[2px] hover:text-primary'
            >
              Categories
              <span>
                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px]
            rounded-md bg-white p-2 dark:bg-gray-800 text-black shadow-md'>
              <ul>
                {categorie.map((data) => (
                  <li key={data.id}>
                    <NavLink to={data.Link}
                    className='inline-block w-full  rounded-md p-2
                    hover:bg-primary/60 dark:text-white '>
                      {data.name}
                    </NavLink>
                  </li>
                ))
                }
              </ul>
            </div>
           </li>
        </ul>
      </div>
      {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`dark:text-white p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-black hover:text-primary-600 hover:bg-primary-50' 
                  : 'text-black hover:text-primary-200 hover:bg-primary/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {isMenuOpen && (
          <div className="lg:hidden  py-4 border-t border-neutral-200/20  bg-primary/0 backdrop-blur-md rounded-b-2xl shadow-xl animate-fade-in">
            <nav className="flex flex-col  space-y-1">
              {Onglet.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 hover:bg-primary dark:hover:bg-primary  dark:hover:text-white dark:text-white hover:text-white rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-black hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
              {/* {simple dropdown and links} */}
           <li className='group relative cursor-pointer'>
            <a href='#'
            className='flex items-center gap-[2px] hover:text-primary px-4 py-3 rounded-xl text-base font-medium transition-all duration-300'
            >
              Categories
              <span>
                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px]
            rounded-md bg-white p-2 dark:bg-gray-800 text-black shadow-md'>
              <ul>
                {categorie.map((data) => (
                  <li key={data.id}>
                    <NavLink
                    onClick={() => setIsMenuOpen(false)}
                     to={data.Link}
                    className='inline-block w-full  rounded-md p-2
                    hover:bg-primary/60 dark:text-white '>
                      {data.name}
                    </NavLink>
                  </li>
                ))
                }
              </ul>
            </div>
           </li>
             
            </nav>
          </div>
        )}
    </div>
    </header>
    
  )
}

export default Navbar;
