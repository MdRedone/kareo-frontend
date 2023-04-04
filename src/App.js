import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

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
