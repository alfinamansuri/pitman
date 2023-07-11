import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./assets/scss/style.scss";
// import { Router } from 'react-router';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
