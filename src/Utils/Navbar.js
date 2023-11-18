// Navbar.js
import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './Navbar.css'; 
import { InputText } from 'primereact/inputtext';

const Navbar = () => {
    const items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url: '#',
      },
      {
        label: 'Services',
        icon: 'pi pi-cog',
        url: '#',
      },
      {
        label: 'Products',
        icon: 'pi pi-shopping-cart',
        url: '#',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        url: '#',
      },
      {
        label: 'About Us',
        icon: 'pi pi-info-circle',
        url: '#',
      },
    ];
  
    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="p-mr-2 abc" />;
    const end = <InputText placeholder="Search" type="text" className="p-inputtext-sm" />;
  
    return (
      <div >
        <Menubar model={items} start={start} end={end} className='navbar'/>
      </div>
    );
  };
  
  export default Navbar;