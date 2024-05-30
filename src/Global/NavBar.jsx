import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsCartOpen } from '../State';





import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";
const tabs = ["Home", "Products", "On Demand"];

function NavBar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector((state)=>state.cart.cart)

  return (
    <div>
   <div className=' px-5 flex justify-around items-center  absolute z-10  w-full'>
            <div  className='h-[10rem] pt-7 w-[10rem] '>
                <img  src={logo} alt="" onClick={()=> navigate('/')} className='font-bold' />
            </div>

            <div className='flex gap-10'>
                {
                    tabs.map((btn)=>(
                        
                        <button 
                        className={`px-6 py-2  ${textColor} rounded-lg font-bold transform hover:-translate-y-1 transition duration-400`}>
                        {btn}
                          </button>
                    ))
                }
            </div>


            <div className='flex gap-10'>
            <FaShoppingCart
            style={{
               
                height:'2rem',
                width:'2rem'
            }}
            className={`${textColor}`}
            onClick={()=> dispatch(setIsCartOpen({}))}
             />
            <MdAccountCircle
            style={{
              
                height:'2rem',
                width:'2rem'
            }}
            className={`${textColor}`}
             />


            </div>
        </div>
    </div>
  )
}

export default NavBar
