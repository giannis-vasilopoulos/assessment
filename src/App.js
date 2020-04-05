import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import Masonry from "./components/Home/Masonry";
import Services from "./components/Home/Services";
import Search from "./components/Search/Search";
import API from "./components/common/api";
import "./App.scss";

class App extends Component {
  state = {
    menu: [],
    slider: [],
    page: null,
    home: null,
    searchToggle: false,
    pageList: [
      {
        _id: 1,
        parent: 0,
        name: "Home",
        path: "/",
      },
      {
        _id: 3,
        parent: 1,
        name: "Section 1",
        path: "/",
      },
      {
        _id: 4,
        parent: 1,
        name: "Section 2",
        path: "/services",
      },
      {
        _id: 2,
        parent: 0,
        name: "Page 2",
        path: "page2",
      },
    ],
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

  handleSearchVisibility = (searchToggle) => {
    this.setState({ searchToggle: !searchToggle });
  };

  handleSearchKeyUp = (params) => {};

  render() {
    const { menu, slider, page, home, searchToggle, pageList } = this.state;
    if (!page || !home) return null;
    const [section1, section2] = home.sections;
    return (
      <div>
        <Header
          menu={menu}
          slider={slider}
          searchToggle={searchToggle}
          onSearchClick={this.handleSearchVisibility}
        />
        <div className="container main-content">
          <Switch>
            <Route
              path="/page2"
              render={(props) => <Page page={page} {...props} />}
            />
            <Route path="/not-found" component={NotFound} />
            <Route
              path="/services"
              exact
              render={(props) => (
                <Home
                  title={home.description}
                  children={<Services services={section2} />}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
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
        <Search
          searchToggle={searchToggle}
          onCloseClick={this.handleSearchVisibility}
          pageList={pageList}
          onSearchKeyUp={this.handleSearchKeyUp}
        />
      </div>
    );
  }
}

export default App;
