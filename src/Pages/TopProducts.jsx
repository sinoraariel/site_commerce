import React from 'react'
import { FaStar } from "react-icons/fa6";
import Img1 from '../assets/categorie/hab13.jpeg'
import Img2 from '../assets/categorie/hab14.jpeg'
import Img3 from '../assets/categorie/hab12.jpeg'
import Img4 from '../assets/categorie/hab9.jpeg'
const ProductsData=[
   {
      id:1,
      img: Img1,
      title:"De très jolies perruques",
      description: "Des perruques de toutes sortes rien que pour vous, et bien-sûr de toutes couleur",
      url:'#'
    },
   {
      id:2,
      img: Img2,
      title:"Des bijoux magnifiques",
      description: "Et oui! Des bijoux personnalisés sont aussi disponibles avec diversité de couleurs ",
      url:'#'
    },
    {
      id:3,
      img: Img3,
      title:"Habits pour femme",
      description: "Des habits pour femme  de tout type et de très bonne qualité",
      url:'#'
    },
    {
      id:4,
      img: Img4,
      title:"Des montres élégantes",
      description: "Des montres pour personaliser vos outfits de la manière que vous voulez",
      url:'#'
    },
]
const TopProducts = () => {
  return (
    <div>
      <div className='container'>
              {/* header section */}
              <div className='text-center mb-5 mt-10   '>
                <p className='text-bold bg-gradient-to-r from-secondary to-primary and-primary bg-clip-text text-transparent mt-2'>Here you'll find all categories of products.</p>
                  <h1 data-aos="fade-up" className='text-[50px] font-bold'><span className='dark:text-white text-black'>Top Products</span></h1>
                  <p data-aos="fade-up" className='text-xs text-gray-600 dark:text-white'>A very diverse catalog with the sole purpose of satisfying you, our customers. </p>
              </div>
              {/* Body section */}
              <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-20 md:gap-5 pmace-items-center'>
                {ProductsData.map((data) => {
                return(
                  <div key={data.id}
                  data-aos="zoom-in" 
                  className='rounded-2xl hover:bg-accent-500 bg-white dark:bg-gray-800 hover:bg-black/80
                  dark:hover:bg-accent-500 hover:text-white relative shadow-xl duration-300 transition-all
                  group w-[250px] hover:scale-105'
                  >
                    {/* image section */}
                    <div className='flex justify-center'>
                      <img src={data.img} alt='' 
                      className='h-[290px] w-[300px] block mx-auto transform duration-300 drop-shadow-md '
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
                      <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full
                      mt-4 group-hover:bg-white group-hover:text-primary  dark:hover:border dark:hover:border-white mb-5'
                      // onClick={data.url}
                      >
                        Voir Plus
                      </button>
                    </div>
                  </div>
                )}
                
                )}
              </div>
            </div>
    </div>
  )
}

export default TopProducts
