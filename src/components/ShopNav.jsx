import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopNav(props) {
  return (
    <div>
        <div className={`${props.width} h-[21px] text-[14px] flex items-center justify-center gap-[3px]`}>
            <Link to="/">
                <p className="text-primary-very-light-grey">Home</p>
            </Link>
            <i className={`fa fa-chevron-right text-primary-very-light-grey text-[10px]`}></i>
            <Link to="/cart">
                <p className={props.textDisplay}>Cart</p>
            </Link>
            <div className={`${props.display} flex justify-center items-center`}>
                
                <i className='fa fa-chevron-right text-primary-very-light-grey text-[10px]'></i>
                <p className=''>Verification</p>
            </div>
        </div>
    </div>
  )
}
