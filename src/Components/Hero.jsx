import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';

import logoNogb from '../assets/logoNobg.png'

import shoe2 from '../assets/shoe2.png'
import rolex from '../assets/rolex.png'
import bag from '../assets/bag2.png'
import logo2 from '../assets/logoblack.png'
import logo3 from '../assets/logo-new.png'
import over from '../assets/over2.jpg'
import over3 from '../assets/over3.jpg'
import slider4 from '../assets/slider4.jpg'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const tabs = ["Home", "Products", "On Demand"];

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (swiper, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    const remainingTime = Math.max(0, Math.ceil(time / 1000));
    progressContent.current.textContent = `${remainingTime}s`;
  };





  const bgColors = ['bg-[#FFE6E6]','bg-[#6C0345]','bg-[#D2DAFF]']  
  const [bgColor, setBgColor] = useState('bg-[#FFE6E6]');
  const logos = [logo2,logoNogb,logo3]

  const [logo,setLogo]= useState(logoNogb)
  
  const products = [shoe2,rolex,bag]
  const [product, setProduct] = useState(shoe2)


  const textColors = ['text-white','text-black','text-white']
  const [textColor,setTextColor]= useState('text-black')

  const upperbg = ['bg-[#114232]','bg-[#DC6B19]','bg-[#FFD1E3]']
  const [upperback, setUpperBack] = useState('bg-[#A0DEFF]')

  const productsData =[
    {
      name: 'Nike Air',
      size: 'Medium, Small',
      Price:'$40'
    },
    {
      name: 'T-shirt',
      size: 'Medium',
      Price:'$190'
     
    }
  ,
  {
    name: 'T-shirt',
    size: 'Medium',
    Price:'$70'
  }

  ]

  const [selectedData, setSelectedData] = useState(true)


  

  const handleProductClick = (index) => {
    setProduct(products[index]);
    setBgColor(bgColors[index]);
    setTextColor(textColors[index]);
    setLogo(logos[index])
    setUpperBack(upperbg[index])
    setSelectedData(productsData[index]);

  };


  return (
    <>
    <div className={`w-full h-screen flex justify-center ${upperback} `}>
    <div className={`w-[95%] mt-5 rounded-2xl h-[90%] relative  ${bgColor}  `} >

  


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-full w-full rounded-2xl relative"

        onSlideChange={(swiper) => {
          if (swiper.activeIndex === 0 || swiper.activeIndex === 2 ) {

            setTextColor('text-white')
            
          } else {
            setTextColor('text-black')
          }
        }}
      >
      


      <SwiperSlide
  className={``}
  style={{
    backgroundImage: `url(${over})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div
    className="text-white h-full w-full ml-[2rem] flex flex-col gap-5 items-start justify-center"
   
  >
    <h1 className="text-5xl font-bold text-left">Class, Pride and Brilliance <br /> all in one</h1>
    <p className="font-">Variety of Apparels for women for all occassions</p>
    <button
      className="flex bg-[white] text-black font-bold w-[6rem] h-[3rem] justify-center items-center rounded-2xl"
    >
      Shop Now
    </button>
  </div>
</SwiperSlide>

      <SwiperSlide
    className= {``}
    style={{ backgroundImage: `url(${over3})`,  backgroundSize: 'cover', backgroundPosition: 'center'  }}
    
      >

<div className='text-black h-full w-full ml-[2rem] flex flex-col gap-5 items-center   justify-center'>
          <h1
          className='text-5xl font-bold text-center'
          >
            Elegance, She makes it <br /> Work</h1>

          <p className='font-'>Variety of Apparels for women for all occassions</p>
          <button className='flex  bg-[white] text-black font-bold w-[6rem] h-[3rem] justify-center items-center rounded-2xl'>Shop Now</button>
        </div>
     
        
      </SwiperSlide>

      
      <SwiperSlide
  className={``}
  style={{
    backgroundImage: `url(${slider4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div
    className="text-white h-full w-full ml-[2rem] flex flex-col gap-5 items-start justify-center"
 
  >
    <h1 className="text-5xl font-bold text-left">Class, Pride and Brilliance <br /> all in one</h1>
    <p className="font-">Variety of Apparels for women for all occassions</p>
    <button
      className="flex bg-[white] text-black font-bold w-[6rem] h-[3rem] justify-center items-center rounded-2xl"
    >
      Shop Now
    </button>
  </div>
</SwiperSlide>
        

       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className='text-white' ref={progressContent}></span>
        </div>
         
        
      
      </Swiper>
   
      </div>
      </div>
    </>
  );
}
