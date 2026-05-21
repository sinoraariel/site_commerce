import React from 'react'
import Image1 from '../assets/Image.png';
import Image2 from '../assets/image1.png';
import Image3 from '../assets/image3.png';
import Slider from "react-slick"

const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "Jusqu'à -70% de réduction sur les produits en solde",
    description: "Périodes pendant lesquels vous aurez envie de tout acheter tellement les prix seront très bas et avec une qualité dont vous nous donnerez des nouvelles"
  },
  {
    id: 2,
    img: Image1,
    title: "Jusqu'à -50% de rédution sur tous vêtements pour hommes",
    description: "Et oui en faisant plusieurs achat nous vous offrons la possibilité de payer rien que la moitié du prix de vos achats"
  },
  {
    id: 3,
    img: Image3,
    title: "-30% de réduction sur les vêtements femmes",
    description: "Le but premier de notre boutique n'est pas de gagner de l'argent mais de faire en sorte que chaque client à la fin de ses achats soit satisfait et ravi"
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
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div>
      <div className='dark:text-white relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 duration-200 mt-20 sm:mt-35'>
        {/* Triangle background */}
        <div className='h-[400px] w-[400px] sm:h-[700px] sm:w-[700px] bg-primary/70 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>

        <div className='container px-4 pb-8 sm:pb-0'>
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                  {/* Texte */}
                  <div className='flex flex-col justify-center gap-4 pt-8 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 px-2'>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className='text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight'
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className='text-sm sm:text-base mt-2'
                    >
                      {data.description}
                    </p>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                      <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                        Start Now
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className='order-1 sm:order-2 flex justify-center'>
                    <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                      <img
                        alt=''
                        className=' w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-contain mx-auto '
                        src={data.img}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero;