import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './Components/Article';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/article/:id' element={<Article/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
