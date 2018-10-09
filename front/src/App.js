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
    edit: false
  };

  editView = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Header />
          <AddTrain />
          {!this.state.edit ? (
            <Button bsStyle="primary" onClick={this.editView}>
              <FontAwesome className="icon" name="gear" size="lg" />
            </Button>
          ) : (
            <Button bsStyle="primary" onClick={this.editView}>
              Routes
            </Button>
          )}
          <Content editView={this.state.edit} />
        </div>
      </Provider>
    );
  }
}

export default App;
