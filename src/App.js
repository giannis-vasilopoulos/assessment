import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import NotFound from "./components/NotFound";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          {/* <Route
            path="/products"
            render={(props) => <Products sortBy="newest" {...props} />}
          /> */}
          <Route path="/page" component={Page} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
