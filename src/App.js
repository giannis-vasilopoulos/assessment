import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import API from "./components/common/api";

import "./App.scss";

class App extends Component {
  state = {
    menu: [],
    slider: [],
    page: null,
  };

  async componentDidMount() {
    try {
      const [menu, slider, page] = await Promise.all([
        API.get(`menu`),
        API.get(`slider`),
        API.get(`page`),
      ]);

      this.setState({
        menu: menu.data,
        slider: slider.data,
        page: page.data[0],
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { menu, slider, page } = this.state;
    return (
      <div>
        <Header menu={menu} slider={slider} />
        <div className="container main-content">
          <Switch>
            {/* <Route
             path="/products"
             render={(props) => <Products sortBy="newest" {...props} />}
            /> */}
            <Route
              path="/page2"
              render={(props) => <Page page={page} {...props} />}
            />
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
