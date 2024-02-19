import './App.css';
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';import Administrador from './components/pages/Administrador';
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
