
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Navbar from './Utils/Navbar';
import Hero from './components/Hero';
import ProductCarousal from './components/ProductCarousal';
import DataProduct from './components/DataProduct';
import ContactUs from './components/ContactUs ';
import Wallet from './components/Wallet';




function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero/>
  <ProductCarousal/>
  <DataProduct/>
  <Wallet/>
<ContactUs/>
    </div>
  );
}

export default App;
