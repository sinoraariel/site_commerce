import React from 'react'
import Slider from "react-slick"
const TestimonialsData = [
    {
        id: 1,
        name: "Marie",
        text: "A chaque achat fait chez EldoraShop, j'en ressort toujours satisfaite et la chose qui me facine le plus est que tout est à un prix incroyablement moins chers 🥰",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Abigaelle",
        text: "Dans le domaine de la vente de bijoux, ils sont high en qualité, et avec de bas prix, vraiment c'est formidable.😍Et encore plus formidable lors de certaines fêtes où il y'a des reduction🤤",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Maxim",
        text: "Le mieux chez EldoraShop est que quand tu prends plus d'un bijoux, ils te font une bonne réduction et ils te donnent même des cadeaux😄",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Merveille",
        text: "Moi j'etais hors de la ville, j'avais peur de commander car je pensais qu'ils ne pouvaient livrer, mais à ma grande surprise, ils font des livraisons partout dans le pays. Cool🤩",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Miguel",
        text: "Ce qui me facine🤩, c'est que chez eux, tout est disponible à tout moment  et peu importe l'endroit où tu te trouves, ils arrivent🏃‍♀️ et le temps de livraison est tellement petit",
        img: "https://picsum.photos/103/103",
    },
]
const Temoignage = () => {
    var settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToscroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div className='mt-10 mb-10 py-10'>
      <div className='container'>
            {/* header section */}
            <div className='text-center mb-5 -mt-6   max-m-[600px] mx-auto'>
            <p className='dark:text-primary text-black mt-2'>Ce que nos consomateurs disent de nous</p>
                <h1 data-aos="fade-up" className='text-[50px] font-bold'><span className='dark:text-white bg-gradient-to-r from-secondary to-primary and-primary bg-clip-text text-transparent'>Temoignages</span></h1>
                <p data-aos="fade-up" className='text-xs text-gray-600 dark:text-white'>Nos clients nous font des témoignages chaque jour tellement le niveau de satisfaction est élévé</p>
            </div>
            {/* testimonials card */}
            <div
            data-aos="zoom-in">
                <Slider { ...settings}>{
                   TestimonialsData.map((data) =>{
                    return (
                        <div className='my-6'>
                            <div
                        key={data.id}
                            className='flex flex-col gap-4  shadow-lg  py-8 px-6  rounded-xl dark:bg-gray-800 
                            bg-primary/10 relative'
                        >
                            <div className='mb-4'>
                                <img 
                                src={data.img} alt=''
                                className='rounded-full w-20 h-20'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                <p
                                className='text-xs text-gray-500'
                                >{data.text}</p>
                                <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                            </div>
                            </div>
                            <p className='text-black/20 dark:text-primary/10 text-9xl font-serif absolute top-0 right-0'>,,</p>
                        </div>
                     </div>
                        
                    )
                   })
                    }

                </Slider>
            </div>
      </div>
    </div>
  )
}

export default Temoignage
