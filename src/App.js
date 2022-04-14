import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Header/Home/Home";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "./components/Checkout/Checkout";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
