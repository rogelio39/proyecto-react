
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import JsonPlaceHolder from './components/JasonPlaceHolder/JsonPlaceHolder';
import Netflix from './components/Netflix/Netflix';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Hooks from './components/Hooks/Hooks';
import Login from './components/Patrones/Login';



function App() {


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Paradisi' />
      <ItemDetailContainer />
      <JsonPlaceHolder />
      <Netflix />
      <Hooks />

      <Login/>

    </div >
  );
}

export default App;



