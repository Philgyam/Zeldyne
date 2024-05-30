import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

const CategoryOneData = [
    {
    name: 'Nike Air',
    size: 'Medium, Small',
    Price: '$40'
    },
    {
    name: 'T-shirt',
    size: 'Medium',
    Price: '$190'
    },
    {
    name: 'T-shirt',
    size: 'Medium',
    Price: '$70'
    },
    {
    name: 'Adidas Superstar',
    size: 'Large, X-Large',
    Price: '$60'
    },
    {
    name: 'Levi Jeans',
    size: '32, 34, 36',
    Price: '$80'
    },
    {
    name: 'Converse Chuck Taylor',
    size: '8, 9, 10',
    Price: '$50'
    },
    {
    name: 'Apple Watch',
    size: '40mm, 44mm',
    Price: '$250'
    },
    {
    name: 'Samsung TV',
    size: '43inch, 55inch',
    Price: '$500'
    },
    {
    name: 'Sony Headphones',
    size: 'Medium, Large',
    Price: '$100'
    },
    {
    name: 'Nike Running Shoes',
    size: '8, 9, 10',
    Price: '$80'
    }
    ];

    const mode = ['Swipe', 'Grid']


function Latest() {
  return (
    <div className='h-[25rem] gap-5'>
     <h1
     className='text-2xl lg:text-4xl text-center my-5 font-bold  '
     >LATEST PRODUCTS</h1>


     <div className=''> 
     { mode.map((el,index)=>( <button className='hidden xl:flex md:flex ' >{el}</button> )) } </div>

     <div className='flex-col md md:flex md:flex-row lg:flex xl:flex-row h-[40rem] w-100 justify-around'>

        <div className='h-[30rem] mb-10'>
            
          
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[20rem] "
      >{
            CategoryOneData.map((el,index)=>(
           
                <SwiperSlide className='rounded-xl pb-4 '>

                </SwiperSlide>
            ))
      }
        
    
       
      </Swiper>

      

        </div>
        <div className='h-[30rem] mb-10'>
            
          
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[20rem]"
      >{
            CategoryOneData.map((el,index)=>(
           

                <SwiperSlide className='rounded-xl pb-4 '>

                </SwiperSlide>
            ))
      }
        
    
       
      </Swiper>

      

        </div>

        <div className='h-[30rem] mb-10'>
            
          
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[20rem]"
      >{
            CategoryOneData.map((el,index)=>(
           

                <SwiperSlide className='rounded-xl pb-4 '>

                </SwiperSlide>
            ))
      }
        
    
       
      </Swiper>

      

        </div>

        

       
       
    

     </div>
    </div>

  )
}

export default Latest
