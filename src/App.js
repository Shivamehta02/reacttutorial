import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';


function App() {
  const productList = [
    {
      price:999,
      name:"iphone",
      quantity:0
    },
    {
      price:999,
      name:"samsung",
      quantity:0
    }
  ]
  return (
   <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList}/>
    </main>
   </>
  );
}

export default App;
