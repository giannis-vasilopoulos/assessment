import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import Masonry from "./components/Home/Masonry";
import API from "./components/common/api";

import "./App.scss";

class App extends Component {
  state = {
    menu: [],
    slider: [],
    page: null,
    home: null,
  };

  async componentDidMount() {
    try {
      const [menu, slider, page, home] = await Promise.all([
        API.get(`menu`),
        API.get(`slider`),
        API.get(`page`),
        API.get(`home`),
      ]);

      this.setState({
        menu: menu.data,
        slider: slider.data,
        page: page.data[0],
        home: home.data[0],
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { menu, slider, page, home } = this.state;
    if (!page || !home) return null;
    const [section1, section2] = home.sections;
    return (
      <div>
        <Header menu={menu} slider={slider} />
        <div className="container main-content">
          <Switch>
            <Route
              path="/page2"
              render={(props) => <Page page={page} {...props} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Route
              path="/home"
              exact
              render={(props) => (
                <Home
                  title={home.description}
                  children={<Masonry images={section1.images} />}
                  {...props}
                />
              )}
            />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
