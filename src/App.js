import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Navbar from "./components/navbar/navbar";
import ProductContextProvider from "./components/Global/productContext";
import Cart from "./components/pages/cart";
import CartContextProvider from "./components/Global/cartContext";

function App() {
  return (
    <div className='App'>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
          <Redirect to='/' />
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
