
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProductCard />
      <ItemListContainer greeting='Paradisi'/>
    </div >
  );
}

export default App;



