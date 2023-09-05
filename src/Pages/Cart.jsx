import React, {useContext} from 'react'
import { ITEMS } from '../items.js'
import { HomeContext } from '../context/HomeContext.jsx'
import CartItem from '../components/CartItem.jsx'
import ShopNav from '../components/ShopNav.jsx'
import Btn from '../components/Btn.jsx'


export default function Cart() {
    const { cartItems, getTotalCartAmount, clearAllItems, getTotalItemsCount} = useContext(HomeContext);
    const totalAmount = getTotalCartAmount();
    const formattedTotalAmount = totalAmount.toLocaleString("en-US");
    
    const checkOut = () => {
        let routte = ''
        if (totalAmount > 0) {
            routte = '/verification';
        };
        return routte
    };

    const checkOutText = () => {
        let text = '';
        if (totalAmount > 0) {
            text = 'Checkout'
        } else {
            text = 'Cart is Empty'
        };
        return text
    }

  return (
    <div className="mt-[60px] mx-[20px] lg:mx-[100px] font-Poppins">
        <ShopNav
            width='w-[88px]'
            display='hidden'
        />
        <div className="flex items-center justify-between mt-[20px]">
            <div className="">
                <p className="text-[20px] sm:text-[30px] font-medium">Cart</p>
                <p className="text-[16px] text-primary-red font-normal lg:hidden">4 Items</p>
            </div>
            <div className="">
                <button className="text-[14px] text-primary-red font-semibold underline lg:hidden" onClick={() => clearAllItems()}>Remove all</button>
            </div>
        </div>
        <div className='mt-[42px]'>

            {ITEMS.map((item) =>  {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }})}

        </div>
        <div className='flex justify-between mt-[20px]'>
            <p>Total</p>
            {totalAmount > 0 ?
            ( <p> #{formattedTotalAmount} </p> )
            : ( <p>#0</p> )
            }
        </div>
            <Btn 
                routte={checkOut()}
                text={checkOutText()}
                myClasses='mt-[37px] mb-[20px] lg:mt-[60px]'
            />
    {getTotalItemsCount()}
    </div>
  )
}
