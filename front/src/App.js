import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import { Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

import Header from "./components/Header/Header";
import AddTrain from "./components/AddTrain/AddTrain";
import Content from "./components/Content/Content";
import "./App.css";

class App extends Component {
  state = {
    settings: false
  };

  settingsView = () => {
    this.setState({ settings: !this.state.settings });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Header />
          <AddTrain />
          {!this.state.settings ? (
            <Button bsStyle="primary" onClick={this.settingsView}>
              <FontAwesome className="icon" name="gear" size="lg" />
            </Button>
          ) : (
            <Button bsStyle="primary" onClick={this.settingsView}>
              Routes
            </Button>
          )}
          <Content settingsView={this.state.settings} />
        </div>
      </Provider>
    );
  }
}

export default App;
