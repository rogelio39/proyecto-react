
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import Productos from './components/Productos/Productos';

import Form from './components/Form/Form';
import { CarritoProvider } from './context/CarritoContext';

function App() {




  return (
    <div className="App">
      <CarritoProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='item/:idItem' element={<ItemDetailContainer />}></Route>
            <Route path='*' element={<h2>ERROR 404</h2>} />
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
      <Productos />
      <Form />
      <Footer />




    </div >
  );
}

export default App;



