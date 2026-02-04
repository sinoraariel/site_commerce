import React from 'react'
import Image1 from '../assets/Image.png';
import Image2 from '../assets/image1.png';
import Image3 from '../assets/image3.png';
import Slider from "react-slick"
const ImageList = [
  {
    id:1,
    img: Image2,
    title:"Jusqu'à -70% de réduction sur les produits en solde",
    description:"Périodes pendant lesquels vous aurez envie de tout acheter tellement les prix seront très bas et avec une qualité dont vous nous donnerez des nouvelles"
  },
  {
    id:2,
    img: Image1,
    title:"Jusqu'à -50% de rédution sur tous vêtements pour hommes",
    description:"Et oui en faisant plusieurs achat nous vous offrons la possibilité de payer rien que la moitié du prix de vos achats"
  },
  {
    id:3,
    img: Image3,
    title:"-30% de réduction sur  les vêtements femmes",
    description:"Le but premier de notre boutique n'est pas de gagner de l'argent mais de faire en sorte que chaque client à la fin de ses achats soit satisfait et ravi"
  },
]
const Hero = () => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHiver: false,
    pauseOnFocus: true,
  }
  return (
    <div>
      <div className='dark:text-white relative overflow-hidden min-h-[550px] 
      sm:min-h-[650px] bg-gray-100 flex justify-center 
      items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/70
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider  {...settings}>
          {ImageList.map((data) => (
        <div>
          <div className='grid grid-cols-1  sm:grid-cols-2'>
            {/* text content section */}
              <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 
              text-center sm:text-left order-2 sm:order-1 relative z-10'>
                <h1 
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className='text-5xl ml-3 sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                <p 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-once="true"
                className='text-1xl mt-4'>{data.description}
                </p>
                <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                >
                  <button className='bg-gradient-to-r from-primary to-secondary
                  hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                      Start Now
                  </button>
                </div>
              </div>
            {/* text content section */}
              <div className='order-2 sm:order-1'>
                <div 
                data-aos="zoom-in"
                data-aos-once="true"
                className='relative z-10'>
                  <img alt='' 
                  className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125
                  lg:scale-120 object-contain top-100 right-0 mx-auto'
                  src={data.img}/>
                </div>
              </div>
          </div>
        </div>
          ))}
          
        </Slider>
        
      </div>
     </div>
     <div className='relative'>
         <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/30 rounded-full blur-xl animate-float"></div>

  <div
    className="absolute top-40 right-20 w-32 h-32 bg-primary-500/30 rounded-full blur-xl animate-float"
    style={{ animationDelay: '2s' }}
  ></div>

  <div
    className="absolute bottom-20 left-20 w-24 h-24 bg-primary-500/30 rounded-full blur-xl animate-float"
    style={{ animationDelay: '4s' }}
  ></div>
        </div>
        
    </div>
    
  )
}

export default Hero;
