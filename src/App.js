import './App.css';
import './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CardWidget from './components/CardWidget/CardWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element= {<ItemListContainer/>} />
            <Route path='/Categoria/:idCategoria' element= {<ItemListContainer/>} />
            <Route path='/CardWidget' element= {<CardWidget/>}/>
            <Route path='/Detalle/:idProducto' element= {<ItemDetailContainer />}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
