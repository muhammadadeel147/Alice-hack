import React from 'react'
import img from "../Assets/7.png"
import img1 from "../Assets/8.png"
import img2 from "../Assets/3.png"
import img3 from "../Assets/4.png"
import img4 from "../Assets/5.png"
import img5 from "../Assets/6.png"

const Wallet = () => {
  return (
    <>
  
    <div>
        <div className="surface-0 text-center">
    <div className="mb-3 font-bold text-3xl">
        <span className="text-900">One Product,Many Solutions</span>
        <br/>
        <span className="text-blue-600"> OUR TRUSTED WALLETS</span>
    </div>
    <div className="text-700 mb-6">Choose onre of Your Wallet</div>
    <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
              <img src={img} alt="img" className="w-10 h-10"/>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">MetaMask</div>
            <span className="text-700 line-height-3">MetaMask, a browser extension, simplifies Ethereum transactions, offering secure management of Ether and ERC-20 tokens for decentralized app interactions.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <img src={img1} alt="img" className="w-10 h-10"/>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Ledger Nano S</div>
            <span className="text-700 line-height-3">Ledger Nano S ensures cryptocurrency security with offline storage, supporting diverse assets and popularly used for cold storage.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <img src={img3} alt="img" className="w-10 h-10"/>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Trezor</div>
            <span className="text-700 line-height-3">Trezor, a hardware wallet, prioritizes secure offline key storage, supporting various cryptocurrencies and renowned for simplicity and robust security features.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <img src={img4} alt="img" className="w-10 h-10"/>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">MyEtherWallet (MEW)</div>
            <span className="text-700 line-height-3">an open-source Ethereum wallet, enables user-friendly wallet generation, offline access, and interaction with smart contracts, emphasizing simplicity and versatility.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <img src={img2} alt="img" className="w-10 h-10"/>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Trust Wallet</div>
            <span className="text-700 line-height-3">Trust Wallet, a mobile solution, offers a user-friendly interface, secure storage for numerous cryptocurrencies, and seamless integration with decentralized exchanges for trading. </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
            <img src={img5} alt="img" className="w-10 h-10"/>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Coinbase Wallet</div>
            <span className="text-700 line-height-3">Coinbase Wallet, a mobile app, facilitates secure storage, decentralized app access, and broader cryptocurrency ecosystem interaction, focusing on security and user experience.</span>
        </div>
    </div>
</div>
     
    </div>
    </>
  )
}

export default Wallet