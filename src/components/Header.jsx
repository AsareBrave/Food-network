import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <div className='w-screen static h-[32px] sm:h-[40px] px-[20px] lg:px-[100px] my-[22px]  lg:my-[42px] flex justify-between items-center text-[10px] sm:text-[16px] font-normal font-Poppins leading-normal'>
        <div className='w-[72px] sm:w-[90px] h-[24px] sm:h-[30px] text-[16px] sm:text-[20px] font-medium flex items-center justify-center'>
            <Link to='/'> 
                <p>Food<span className='text-primary-red'>Bag</span></p>
            </Link>
        </div>
        <ul className='flex items-center justify-center gap-[20px] sm:gap-[30px] lg:gap-[50px]'>
            <Link to="/Cart">
                <li className='text-primary-grey'>
                    <a href="#cart">Cart</a>

                </li>
            </Link>
            <li className='text-primary-grey'>
                <a href="#login">Login</a>

            </li>
            <li className='w-[74px] sm:w-[92px] h-[32px] sm:h-[40px] flex items-center justify-center rounded-[5px] text-primary-red font-medium border border-primary-red'>
                <a href="#signup">Sign Up</a>

            </li>
        </ul>
    </div>
  )
}
