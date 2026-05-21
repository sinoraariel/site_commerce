import React from 'react'
import logo from '../assets/Logo.jpg';
import Banner from '../assets/foot3.jpg'
import { FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%"
}

const Footer = () => {
  const { t } = useTranslation()

  const FooterLink = [
    { title: t('accueil'), link: "/" },
    { title: t('panier'), link: "/panier" },
    { title: t('contact'), link: "/contact" },
  ]

  const FooterUtiles = [
    { title: "Hommes", link: "/hommes" },
    { title: "Femmes", link: "/femmes" },
    { title: "Enfants", link: "/enfant" },
    { title: "Perruques", link: "/perruques" },
    { title: "Maillots", link: "/maillots" },
    { title: "Bijoux", link: "/bijoux" },
  ]

  return (
    <footer>
      <div style={BannerImg} className='text-white'>
        <div className='container px-4 py-8'>
          <div data-aos="zoom-in" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

            {/* Logo + description */}
            <div className='py-4'>
              <h1 className='text-xl sm:text-3xl font-bold mb-3 flex items-center gap-3'>
                <img className='max-w-[50px]' alt='' src={logo}/>
                EldoraShop
              </h1>
              <p className='text-gray-200 text-sm sm:text-base'>
                {t('description_shop')}
              </p>
            </div>

            {/* Liens importants */}
            <div className='py-4'>
              <h1 className='text-xl sm:text-3xl font-bold mb-3'>{t('liens_importants')}</h1>
              <ul className='flex flex-col gap-3'>
                {FooterLink.map((data) => (
                  <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={data.title}>
                    <NavLink to={data.link}>{data.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liens utiles */}
            <div className='py-4'>
              <h1 className='text-xl sm:text-3xl font-bold mb-3'>{t('liens_utiles')}</h1>
              <ul className='flex flex-col gap-3'>
                {FooterUtiles.map((link) => (
                  <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                    <NavLink to={link.link}>{link.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Réseaux sociaux + contact */}
            <div className='py-4 sm:col-span-2 md:col-span-3'>
              <div className='flex items-center gap-4 mb-4'>
                <a href='#' className='hover:text-primary'><FaFacebook className='text-3xl'/></a>
                <a href='#' className='hover:text-primary'><FaLinkedin className='text-3xl'/></a>
                <a href='https://wa.me/237688064498' className='hover:text-primary'><FaWhatsapp className='text-3xl'/></a>
              </div>
              <a className='hover:text-primary flex items-center gap-3 mb-3' href='mailto:tankeusinora@gmail.com'>
                <FaLocationArrow />
                <p>{t('envoyer_mail')}</p>
              </a>
              <div className='flex items-center gap-3'>
                <FaMobileAlt/>
                <p>+237 654 91 90 92 / +237 688 06 44 98</p>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-neutral-700/50 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-neutral-400 text-sm text-center md:text-left">
                {t('droits')}
                <span className="ml-2 font-medium text-primary">EldoraShop - Site de E-Commerce</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-300">{t('politique')}</a>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-300">{t('conditions')}</a>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-300">{t('mentions')}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer