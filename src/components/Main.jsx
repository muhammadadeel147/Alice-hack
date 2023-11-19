import React from 'react'

import Hero from "./Hero"
import ProductCarousal from "./ProductCarousal"
import Deals from '../Utils/Deals'
import DataProduct from './DataProduct'
import Wallet from './Wallet'
import ContactUs from './ContactUs '
import BasicDemo from './BasicDemo'

const Main = () => {
  return (
    <div>
       
<Hero/>
<ProductCarousal/>
<Deals/>
<DataProduct/>
<BasicDemo/>
<Wallet/>
<ContactUs/>

    </div>
  )
}

export default Main