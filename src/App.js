import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import ProductContextProvider from "./components/Global/productContext";
import Cart from "./components/pages/cart/cart";
import CartContextProvider from "./components/Global/cartContext";
import Category from "./components/pages/category";
import CategoryContextProvider from "./components/Global/categoryContext";
import About from "./components/pages/about";
import Login from "./components/pages/login/login";
import SignUp from "./components/pages/signup/signup";

function App() {
  return (
    <div className='App'>
      <ProductContextProvider>
        <CategoryContextProvider>
          <CartContextProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/categories/:category' component={Category} />
              <Route exact path='/sign_up' component={SignUp} />
              <Route exact path='/log_in' component={Login} />
            </Switch>
            <Redirect to='/' />
          </CartContextProvider>
        </CategoryContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
