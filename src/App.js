import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AllServices from "./components/allService/AllServices";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <div>
      <Router>
        {/* header route */}
        <Header></Header>
        {/* all page route */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            <AllServices></AllServices>
          </Route>
          <Route path="/contactus">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          {/* not found page route */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* footer route */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
