import React from 'react'
import Img1 from '../assets/women/hab1.jpg'
import Img2 from '../assets/women/hab2.jpg'
import Img5 from '../assets/women/hab5.jpg'
import Img7 from '../assets/women/hab7.jpg'
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
     id:1,
     img: Img1,
     title:"Robe avec manche corde",
     rating:5.0,
     author: "pink",
     aosDelay: "0",
   },
   {
     id:2,
     img: Img2,
     title:"Robe avec petite manche",
     rating:5.0,
     author: "blue and white",
     aosDelay: "0",
   },
   {
     id:3,
     img: Img7,
     title:"Robe",
     rating:5.0,
     author: "white",
     aosDelay: "0",
   },
   {
     id:4,
     img: Img5,
     title:"Ensemble jupe et haut",
     rating:5.0,
     author: "green",
     aosDelay: "0",
   },
  

 ]
const Produits = () => {
  return (
    <div className='mt-20 mb-13 '>
      <div className='container '>
        {/* header section */}
        <div className='text-center mb-5 -mt-6   max-m-[600px] mx-auto'>
          <p className='text-black mt-2 dark:text-primary'>Meilleurs produits en ventes pour vous</p>
            <h1 data-aos="fade-up" className='text-[50px] font-bold '><span className='bg-gradient-to-r from-secondary to-primary and-primary bg-clip-text text-transparent dark:text-white'>Produits</span></h1>
            <p data-aos="fade-up" className='text-xs text-gray-600 dark:text-white'>Les meilleurs produits en ventes pour vous. Nous vous assurons de la qualité de tous nos produits du moins couteux au plus couteux</p>
        </div>
        {/* body section */}
        <div>
          <div
          className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grids-cols-5 place-items-center gap-5'
          >
            {/* card section */}
            {
              ProductsData.map((data) => {
                return (
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id} 
                    className='space-y-3'>
                        <img data-aos="fade-up"  src={data.img} alt=''
                          className='h-[290px] w-[200px] object-cover rounded-md'
                        />
                        <div>
                          <h3 data-aos="fade-up" className='font-semibold '>{data.title}</h3>
                          <p data-aos="fade-up" className='text-sm text-gray-600'>{data.color}</p>
                          <div data-aos="fade-up" className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400'/>
                            <span>{data.rating}</span>
                          </div>
                        </div>
                    </div>
                )
                
              })
            }
          </div>
          {/* view all button */}
          <div className='flex justify-center'>
            <button
            data-aos='zoom-in'
            className='text-center mt-10 cursor-pointer bg-primary
            text-white w-[150px] py-1 rounded-full p'>Voir Tout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produits
