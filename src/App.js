
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Navbar from './Utils/Navbar';
// import Hero from './components/Hero';
// import ProductCarousal from './components/ProductCarousal';
// import DataProduct from './components/DataProduct';
import ContactUs from './components/ContactUs ';
// import Wallet from './components/Wallet';
// import Deals from './Utils/Deals';
// import Gallery from './components/Gallery';
import { BrowserRouter as   Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Login from './Utils/Login';
import Wallet from './components/Wallet';
// import ProductCarousal from './components/ProductCarousal';
import DataProduct from './components/DataProduct';

import Reports from './Dashboardcomponents/Reports';
import Dashboard from './Dashboardcomponents/Dashboard';
function App() {
  return (
    <div className="App">
 <Navbar />
<Routes>
<Route path="/" exact element={<Main/>} />
          <Route path="/contact-us" exact element={<ContactUs/>} />
          <Route path="/sign-in" exact element={<Login/>} />
          <Route path="/wallet" exact element={<Wallet/>} />
          <Route path="/product" exact element={<DataProduct/>} />
          <Route path="/reports" exact element={<Reports/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        
        </Routes>

   
   
    </div>
  );
}

export default App;
