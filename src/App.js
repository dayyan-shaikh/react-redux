import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import Product from "./components/Product";
import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact  path="/" ><Home/></Route>
        <Route exact  path="/product"> <Product/> </Route>
        <Route  exact path="/products/:id" > <Products/> </Route>
        <Route exact  path="/contact"> <Contact/></Route>
      </Switch>



      
    </>
  );
}

export default App;
