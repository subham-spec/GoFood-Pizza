import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from "./components/Footer";
import Menu from './pages/Menu';
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/menu" exact Component={Menu}></Route>
            <Route path='/about' exact Component={About}></Route>
            <Route path='/contact' exact Component={Contact}></Route>
          </Routes>

          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
