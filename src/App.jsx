
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import JsonPlaceHolder from './components/JasonPlaceHolder/JsonPlaceHolder';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Paradisi'/>
      <JsonPlaceHolder/>

    </div >
  );
}

export default App;



