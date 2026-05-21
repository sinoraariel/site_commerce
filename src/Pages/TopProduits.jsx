import React from 'react'
import Img8 from '../assets/categorie/hab1.jpg'
import Img6 from '../assets/categorie/hab6.jpg'
import Img3 from '../assets/categorie/hab3.jpg'
import Img4 from '../assets/categorie/hab4.jpg'
import Img5 from '../assets/categorie/hab5.jpg'
import { FaStar } from "react-icons/fa6";
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
const ProductsData=[
   {
      id:1,
      img: Img4,
      title:"Vêtements pour homme",
      description: "Des habits pour hommes disponibles, toutes les tailles et d'une qualité incroyable",
      url:'/hommes'
    },
   {
      id:2,
      img: Img6,
      title:"Vêtements pour femme",
      description: "Des habits pour femmes disponibles, toutes les tailles et d'une qualité incroyable ",
      url:'/femmes'
    },
    {
      id:3,
      img: Img3,
      title:"Ensembles enfants",
      description: "Des habits pour enfant allant de 1 à 12 ans de tout type de très bonne qualité",
      url:'/hommes'
    },
    {
      id:4,
      img: Img8,
      title:"Maillot des pays et clubs",
      description: "Des maillots de tout clubs et des pays de votre choix avec possibilité de flocage",
      url:'/hommes'
    },
]
const TopProduits = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-5 mt-10   '>
          <p className='text-bold bg-gradient-to-r from-secondary to-primary and-primary bg-clip-text text-transparent mt-2'>Ici vous trouverez toutes catégories de produits</p>
            <h1 data-aos="fade-up" className='text-[50px] font-bold'><span className='text-black dark:text-white'>Top Produits</span></h1>
            <p data-aos="fade-up" className='text-xs text-gray-600 dark:text-white'>Un catalogue très diversifié dans le seul et unique but de vous satisfaire, vous nos clients.</p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 place-items-center'>
          {ProductsData.map((data) => {
          return(
            <div key={data.id}
            data-aos="zoom-in" 
            className='rounded-2xl hover:bg-accent-500 bg-white dark:bg-gray-800 hover:bg-black/80
            dark:hover:bg-accent-500 hover:text-white relative shadow-xl duration-300 transition-all
            group w-full max-w-[250px] hover:scale-105'
            >
              {/* image section */}
              <div className='flex justify-center'>
                <img src={data.img} alt='' 
                className='h-[200px] w-full object-cover block mx-auto transform duration-300 drop-shadow-md rounded-t-2xl'
                />
              </div>
              {/* details section */}
              <div className='p(4 text-center'>
                {/* star rating */}
                <div className='w-full flex items-center justify-center gap-1 mt-5 '>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                  <FaStar className='text-yellow-500'/>
                </div>
                <h1 className='text-xl font-bold dark:text-white'>
                  {data.title}
                </h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                <button
                onClick={() => navigate(data.url)}
                className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full
                mt-4 group-hover:bg-white group-hover:text-primary dark:hover:border dark:hover:border-white mb-5'
              >
                Voir Plus
              </button>
              </div>
            </div>
          )}
          
          )}
        </div>
      </div>
      {/* banner section */}
      <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
          <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
              {/* image section */}
                <div data-aos="zoom-in">
                  <img src={Img5} alt=''
                  className='max-w-[450px] h-[350px] w-full mx-auto 
                  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
                </div>
              {/* text detail section */}
              <div className='flex flex-col justify-center
               gap-3 sm:pt-0'>
                <div>
                  <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Christmas sale up 50% off</h1>
                </div>
                <div><p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide loading-5'>Des reduction chez nous, c'est du venez voir et allez dire! A chaque periode de noel et aussi 
                  pendant la fêtes de l'amour, nous vous offrons des reductions de 50% sur tout produits achetés
                </p></div> 
                <div className='flex flex-col gap-4'>
                  <div data-aos="fade-up" className='flex items-center gap-4'>
                    <GrSecure
                    className='text-4xl text-black h-12 w-12 p-4 shadow-sm  rounded-full bg-violet-200 dark:bg-violet-400' />
                    <p>Qualité au rendez vous</p>
                  </div>
                  <div data-aos="fade-up" className='flex items-center gap-4 mt-2'>
                      <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                    bg-orange-100 dark:bg-orange-400'/>
                    <p>Livraison Rapide</p>
                  </div>
                  <div data-aos="fade-up" className='flex items-center gap-4 mt-2'>
                      <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                    bg-green-100 dark:bg-green-400'/>
                    <p>Mode de paiement fiable</p>
                  </div>
                  <div data-aos="fade-up" className='flex items-center gap-4 mt-2'>
                      <MdSystemSecurityUpdateGood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                    bg-yellow-100 dark:bg-yellow-400'/>
                    <p>Très bonnes offres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TopProduits
