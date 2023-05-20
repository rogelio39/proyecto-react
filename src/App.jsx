
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';





function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='item/:idItem' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />


    </div >
  );
}

export default App;



