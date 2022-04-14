import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Header/Home/Home";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
