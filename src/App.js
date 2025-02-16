import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

//components
import Aboutme from './components/Aboutme';
import Background from './components/Background';
import Connect from './components/Connect';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Aboutme/>} ></Route>
          <Route path="/aboutme" element={<Aboutme/>} ></Route>
          <Route path="/background" element={<Background/>} ></Route>
          <Route path="/connect" element={<Connect/>} ></Route>
          <Route path="/projects" element={<Projects/>} ></Route>
          <Route path="/skills" element={<Skills/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
