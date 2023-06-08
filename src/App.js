
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import AddProduct from './components/addProduct';
import ViewProduct from './components/viewProduct';
import ProductState from './context/productState';



function App() {
  return (
    
<ProductState>

    <BrowserRouter>
    <div className='flex'>
    <Sidebar/>
    <Routes>
    <Route path="/addProduct" element={<AddProduct/>}/>
    <Route path="/viewProduct" element={<ViewProduct/>}/>
    </Routes>
    </div>
    </BrowserRouter>
</ProductState>
    
  );
}

export default App;
