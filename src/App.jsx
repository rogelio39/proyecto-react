
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';
import Categorias from './components/Categorias/Categorias';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProductCard />
      <ItemListContainer greeting='Paradisi'/>
      <Categorias/>
      <ItemCount inicial={1} stock={10}/>
      <Vista/>
      <Mensaje/>

    </div >
  );
}

export default App;



