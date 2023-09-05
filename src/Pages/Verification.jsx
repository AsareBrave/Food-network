import React from 'react'
import { useState } from 'react';
import ShopNav from '../components/ShopNav'
import InputArea from '../components/InputArea';
import Btn from '../components/Btn';

export default function Verification() {

    const [RegisteredAddress, setRegisteredAddress] = useState(true);

  return (
    <div className='mx-[20px] lg:mx-[100px] mt-[53px] font-Poppins'>
        <ShopNav
            width='w-[178px]'
            textDisplay='text-primary-very-light-grey'
        />
        <div className='mt-[20px]'>
            <p className='text-[20px] lg:text-[30px] font-medium'>Verification</p>
            <p className='text-base font-normal text-primary-red'>Confirm address & Payment</p>
        </div>
        <div className='mt-[42px] flex justify-between items-center'>
            <div className=''>
                <p className='text-sm sm:text-base lg:text-[20px] font-medium'>Delivery Address</p>
                <p className='text-[10px] sm:text-sm lg:text-[16px] font-normal text-primary-grey mt-[5px]'>Order will be deliverd to your registered address</p>
            </div>
            <button className='flex items-center justify-center w-[20px] h-[20px] outline outline-[2px] outline-primary-red rounded-[12px]'  onClick={() => setRegisteredAddress(!RegisteredAddress)}>
                <button className={`w-[14px] h-[14px] p-[3px] bg-primary-red rounded-[8px] ${RegisteredAddress ? "block" : "hidden"} `}></button>
            </button>
        </div>
        <div className={`${RegisteredAddress ? 'hidden' : 'block'}`}>

            <InputArea
                myProps='mt-[20px] lg:mt-[30px] w-full'
                head='Enter Delivery Address'
                placeholder='No 16, Allen Avenue'
                inputprops='w-full'     
            />
        </div>

        <InputArea
            myProps='mt-[20px] lg:mt-[30px] w-full'
            head='Phone Number'
            type='number'
            mnlength='10'
            mxlength='11' 
            placeholder='+234'
            inputprops='w-full'
        />
        <div className='border-b-[1px] mt-[30px]'></div>

        <InputArea
            myProps='mt-[30px] lg:mt-[30px] w-full'
            head='Payment Method'
            placeholder='Card'
            inputprops='w-full'
            // list='payment method'
        />
        {/* <datalist id='payment method'>
            <option value="Card"></option>
            <option value="Transfer"></option>
        </datalist> */}

        <InputArea
            myProps='mt-[20px] lg:mt-[30px] w-full'
            head='Card Number'
            inputprops='w-full'
            placeholder='2345 6543 7868 2343'
            type='number'
            mxlength='16'     
        />
        <InputArea
            myProps='mt-[20px] lg:mt-[30px] w-full'
            head='Card Name'
            placeholder='TOLUWALASE KENNY OJO'
            inputprops='w-full'     
        />
        <div className='flex justify-between mt-[20px] lg:mt-[30px'>
            <InputArea
                myProps='w-[47%]'
                head='Expiry Date'
                placeholder='01/23'
                inputprops='w-full'
                type='date'    
            />
            <InputArea
                myProps='w-[47%]'
                head='CVC'
                mxlength={3}
                type='number'   
                placeholder='012'
                inputprops='w-full'
            />
        </div>
        <Btn 
            routte='/OrderStatus'
            text='Pay'
            myClasses='mt-[49px] mb-[33px] lg:mt-[60px]'
        />
    </div>
  )
}
