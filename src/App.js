import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Navbar from "./components/navbar/navbar";
import ProductContextProvider from "./components/Global/productContext";
import Cart from "./components/pages/cart";
import CartContextProvider from "./components/Global/cartContext";
import Category from './components/pages/category';
import CategoryContextProvider from "./components/Global/categoryContext";


function App() {
  return (
    <div className='App'>
      <ProductContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/categories/:category' component={Category} />
          </Switch>
          <Redirect to='/' />
        </CartContextProvider>
        </CategoryContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
