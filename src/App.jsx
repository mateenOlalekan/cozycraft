import './App.css';
import TopBar from './Component/Topnav/topNav';
import Header from "./Component/Header/Header";
import Services from './Component/Service/Service';
import Features from "./Component/Feature/Feature";
import Speaker from "./Component/Section/Section";
import Product from "./Component/Product/Product"
import Footer from "./Component/Footer/Footer";
import FlashSales from './Component/FlashSales/FlashSales';
import BestSales from "./Component/BestSell/BestSales";

function App() {
  return (
    <>
      <Header/>
      <FlashSales/>
      <BestSales/>
      <Speaker/>
      <Features/>
      <Services/> 
      <Product/>
      <Footer/>
    </>
  )
}

export default App