import React from 'react'
import { Button } from 'primereact/button';
import img from "../Assets/NFT2.jpg"
const Hero = () => {
  return (
    <div>
        
<div className="grid grid-nogutter surface-0 text-800">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">Digital Art Auction Blockchain</span>
            <div className="text-6xl text-primary font-bold mb-3">Our visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Discover, buy, and own exclusive digital treasures on our NFT Blockchain Marketplace—authentic, transparent, and decentralized digital assets await.</p>

            <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
            <Button label="Explore NFT'S" type="button" className="p-button-outlined" />
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src={img} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
    </div>
  )
}

export default Hero