import React from 'react'
import { ITEMS } from '../items.js'
import Products from '../components/Products.jsx'

export default function Vendors() {
  return (
    <div className='lg:mx-[100px]'>
         <div className='mt-[42px] flex flex-col sm:flex-row justify-between items-center'>
            {ITEMS.map((item) => (<Products data={item}/>))} 
        </div>
    </div>
  )
}
