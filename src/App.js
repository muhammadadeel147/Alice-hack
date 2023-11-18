
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Navbar from './Utils/Navbar';
import Hero from './components/Hero';
import ProductCarousal from './components/ProductCarousal';
import DataProduct from './components/DataProduct';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero/>
  <ProductCarousal/>
  <DataProduct/>

    </div>
  );
}

export default App;
