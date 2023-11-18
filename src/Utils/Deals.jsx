import React from 'react'

const Deals = () => {
  return (
    <div>
        
<div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div className="font-bold mr-8">🔥 Hot Deals!</div>
    <div className="align-items-center hidden lg:flex">
        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
    </div>
    
    <a href='#' className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }} >
        <i className="pi pi-times"></i>
    </a>
</div>
    
    </div>
  )
}

export default Deals