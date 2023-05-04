import ReactDOM from 'react-dom/client';
import './index.scss';
// import SimpleSlider from './components/Slider/Slider';
import { Product } from './components/Product/Product';
import Header from './components/Header/Header';
import Subhead from './components/Header/Subhead';
import Search from './components/Header/Search';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <Header />
    <Subhead />
    <Search />
    <Home />
    <Product />
    <Location />
    <Footer />
    {/* <SimpleSlider /> */}
  </div>

);
