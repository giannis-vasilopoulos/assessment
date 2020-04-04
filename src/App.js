import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import NotFound from "./components/NotFound";
import Header from "./components/Header/Header";
import API from "./components/common/api";

import "./App.scss";

class App extends Component {
  state = {
    menu: [],
    slider: [],
  };

  async componentDidMount() {
    try {
      const [menu, slider] = await Promise.all([
        API.get(`menu`).then((res) => {
          return res.data;
        }),
        API.get(`slider`).then((res) => {
          return res.data;
        }),
      ]);

      this.setState({ menu, slider });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { menu, slider } = this.state;
    return (
      <div>
        <Header menu={menu} slider={slider} />
        <div className="container">
          <Switch>
            {/* <Route
             path="/products"
             render={(props) => <Products sortBy="newest" {...props} />}
            /> */}
            <Route path="/page2" component={Page} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/home" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
