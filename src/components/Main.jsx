import React from 'react'
// import Navbar from './Utils/Navbar';
import Hero from "./Hero"
import ProductCarousal from "./ProductCarousal"
import Deals from '../Utils/Deals'
import DataProduct from './DataProduct'
import Wallet from './Wallet'
import ContactUs from './ContactUs '

const Main = () => {
  return (
    <div>
       
<Hero/>
<ProductCarousal/>
<Deals/>
<DataProduct/>
<Wallet/>
<ContactUs/>
    </div>
  )
}

export default Main