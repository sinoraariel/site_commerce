import React from 'react'
import { useCart } from "../Context/CartContext"
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import logo from '../assets/Logo.jpg';
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import DarkMode from "./DarkMode"
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { totalItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation()

  // ✅ Déplacés INSIDE le composant
  const Onglet = [
    { id: 1, name: t('accueil'), link: "/" },
    { id: 3, name: t('panier'), link: "/panier" },
    { id: 4, name: t('contact'), link: "/contact" },
  ]

  const categorie = [
    { id: 1, name: t('Hommes'), Link: "hommes" },
    { id: 2, name: t('Femmes'), Link: "femmes" },
    { id: 3, name: t('Bijoux'), Link: "bijoux" },
    { id: 4, name: t('Perruques'), Link: "perruques" },
  ]

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim() === "") return
    navigate(`/search?q=${searchTerm.trim()}`)
    setSearchTerm("")
    setIsMenuOpen(false)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-primary/100 backdrop-blur-md shadow-lg border-b border-neutral-200/50'
        : 'bg-transparent'
    }`}>
      <div className='shadow-md bg-white dark:bg-gray-700 dark:text-white duration-200 relative z-40'>

        {/* Upper Navbar */}
        <div className='bg-primary/70 py-1'>
          <div className='container flex justify-between items-center'>
            <div>
              <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                <img src={logo} alt='logo' className='w-10 uppercase rounded-full' />
                <p className='mt-5 mb-6 dark:text-white' style={{ fontSize: '20px' }}>EldoraShop</p>
              </a>
            </div>

            <div className='flex justify-start items-center gap-4'>
              {/* Search bar desktop */}
              <div className='relative group hidden md:block'>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder={t('search')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[200px] group-hover:w-[300px] transition-all duration-300
                    rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                    hover:border-primary dark:border-gray-600 dark:bg-gray-800"
                  />
                  <button type="submit">
                    <IoSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                  </button>
                </form>
              </div>

              {/* Bouton panier */}
              <button
                onClick={() => navigate('/panier')}
                className='flex bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full items-center gap-3 group relative'
              >
                <span className='group-hover:block hidden transition-all duration-200'>{t('panier')}</span>
                <div className="relative">
                  <PiShoppingCartSimpleBold className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
              </button>

              {/* DarkMode + Language */}
              <div className='flex items-center gap-2'>
                <DarkMode />
                {/* <LanguageSwitcher /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Lower Navbar desktop */}
        <div className='hidden lg:flex justify-center'>
          <ul className='sm:flex hidden items-center gap-4'>
            {Onglet.map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.link}
                  className={`inline-block hover:text-primary px-4 dark:text-white dark:hover:text-primary duration-200 ${
                    isActive(data.link)
                      ? 'text-black bg-primary/20 rounded-md hover:text-black'
                      : 'text-black hover:text-primary-600'
                  }`}
                >
                  {data.name}
                </NavLink>
              </li>
            ))}

            {/* Dropdown Categories */}
            <li className='group relative cursor-pointer'>
              <a href='#' className='flex items-center gap-[2px] hover:text-primary'>
                {t('categories')}
                <span><FaCaretDown className="transition-all duration-200 group-hover:rotate-180" /></span>
              </a>
              <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 dark:bg-gray-800 text-black shadow-md'>
                <ul>
                  {categorie.map((data) => (
                    <li key={data.id}>
                      <NavLink to={data.Link} className='inline-block w-full rounded-md p-2 hover:bg-primary/60 dark:text-white'>
                        {data.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="dark:text-white p-2.5 rounded-xl transition-all duration-300 text-black hover:bg-primary/10"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu ouvert */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200/20 bg-primary/0 backdrop-blur-md rounded-b-2xl shadow-xl">

            {/* Search mobile */}
            <div className='mt-2 mb-4 px-4 relative'>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary dark:border-gray-600 dark:bg-gray-800"
                />
                <button type="submit">
                  <IoSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-7" />
                </button>
              </form>
            </div>

            <nav className="flex flex-col space-y-1">
              {Onglet.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 hover:bg-primary dark:hover:bg-primary dark:hover:text-white dark:text-white hover:text-white rounded-xl text-base font-medium transition-all duration-300 text-black"
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Dropdown mobile */}
              <li className='group relative cursor-pointer list-none'>
                <a href='#' className='flex items-center gap-[2px] hover:text-primary px-4 py-3 rounded-xl text-base font-medium'>
                  {t('categories')}
                  <span><FaCaretDown className="transition-all duration-200 group-hover:rotate-180" /></span>
                </a>
                <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 dark:bg-gray-800 text-black shadow-md'>
                  <ul>
                    {categorie.map((data) => (
                      <li key={data.id}>
                        <NavLink
                          onClick={() => setIsMenuOpen(false)}
                          to={data.Link}
                          className='inline-block w-full rounded-md p-2 hover:bg-primary/60 dark:text-white'
                        >
                          {data.name}
                        </NavLink>
                      </li>
                    ))}
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