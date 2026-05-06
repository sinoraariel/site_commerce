import React from 'react'
import logo from '../assets/Logo.jpg';
import Banner from '../assets/foot3.jpg'
import BG from '../assets/bg4.jpeg';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const BGimg = {
    backgroundImage: `url(${BG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    with:"100%",
}
const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    widht: "100%" 
}
const FooterLink = [
    {
        title: "Accueil",
        link: "/",
    },
    {
        title: "Mon Panier",
        link: "/panier",
    },
    
    {
        title: "Contact",
        link: "/contact",
    },
]
const Link =[
    {
        title: "Hommes",
        link: "/hommes",
    },
    {
        title: "Femmes",
        link: "/femmes",
    },
    {
        title: "Enfants",
        link: "/enfant",
    },
    {
        title: "Perruques",
        link: "/perruques",
    },
    {
        title: "Maillots",
        link: "/maillots",
    },
    {
        title: "Bijoux",
        link: "/bijoux",
    },
]
const Footer = () => {
  return (
    <footer className='h-[500px]'>
         <div style={BannerImg} className='text-white overflow-hidden '>
      <div className='container'>
        <div
        data-aos="zoom-in"
        className='grid md:grid-cols-3  pt-5'>
            {/* company detail */}
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                    <img className='max-w-[50px]' alt='' src={logo}/>
                    EldoraShop  
                </h1>
                <p>La meilleure entreprise de vente de vêtement pour vous satisfaire quand vous voulez, à l'heure que vous voulez et où vous voulez</p>
            </div>
            {/* Links footer */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                    <h1
                    className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'
                    >Liens Importants</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            FooterLink.map((data) =>{
                                return(
                                    <li className='cursor-pointer hover:text-primary
                                    hover:translate-x-1 duration-300 text-gray-200'
                                     key={data.title}>
                                            <NavLink to={data.link}>
                                                {data.title}
                                            </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                </div>
                <div>
                    <div className='py-8 px-4'>
                    <h1
                    className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'
                    >Liens  Utiles</h1>
                    <ul className='flex flex-col gap-3'>
                        {
                            Link.map((link) =>{
                                return(
                                    <li className='cursor-pointer hover:text-primary
                                    hover:translate-x-1 duration-300 text-gray-200'
                                     key={link.title}>
                                        <NavLink to={link.link}>
                                            <span>{link.title}</span>
                                        </NavLink>
                                            
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                </div>
                {/* social links */}
                <div>
                        <div className='flex tems-center gap-3 mt-16'>
                            <a href='#' className=' hover:text-accent-400 '>
                                <FaFacebook className=' text-3xl'/>
                            </a>
                            <a href='#' className='hover:text-accent-400'>
                                <FaLinkedin className='text-3xl'/>
                            </a>
                            <a href='https://wa.me/237688064498' className='hover:text-accent-400'>
                                <FaWhatsapp className='text-3xl' />
                            </a>
                        </div>
                        <div className='mt-15 '>
                            
                                <a  className='hover:text-accent-400 flex items-center gap-3 mt-6' href='mailto: tankeusinora@gmail.com'>
                                    <FaLocationArrow />
                                    <p>Envoyer un mail</p>
                                </a>
                                
                          
                            <div className='flex w-[400px] items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+237 654 91 90 92/+237 688 06 44 98</p>
                            </div>
                        </div>
                </div>
              
            </div>
              
        </div>
        <div className="border-t border-neutral-700/50 mb-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © EldoraShop. Tous droits réservés.       
              <span className="ml-4 font-medium text-primary ">
                        EldoraShop - Site de E-Commerce
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-accent-400 transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-400 transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-400 transition-colors duration-300">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={BGimg}><img className='h-[5px]' src={BG}/></div>
    </div>
    </footer>
   
  )
}

export default Footer
