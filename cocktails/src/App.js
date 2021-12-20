
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home/Home";
import Article from "./components/Article/Article";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <>
        <Home />
        <Article />
      </>
    </div>
  );
}

export default App;
