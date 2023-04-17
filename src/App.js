import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products'
function App() { 
const product =[
  {
    price : 9999,
    name : "iphone15",
    quantity:0,
  },
  {
    price : 9999,
    name : "iphone14",
    quantity:0,
  }
]
  return (
    <>
  <Navbar/>
  <Products/>
  <Footer/>
  </>
  );
}

export default App;
