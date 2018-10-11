import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import Select from "../../global/Select";

import { FormControl } from "react-bootstrap";

class EditRoutes extends Component {
  state = {
    editMode: "",
    trainLine: "",
    routeName: "",
    runNumber: "",
    operator: ""
  };

  edit = (id, trainLine, routeName, runNumber, operator) => {
    this.setState({
      editMode: id,
      trainLine: trainLine,
      routeName: routeName,
      runNumber: runNumber,
      operator: operator
    });
  };

  submitEdit = () => {
    const routeData = {
      trainLine: this.state.trainLine,
      runNumber: this.state.runNumber,
      routeName: this.state.routeName,
      operator: this.state.operator
    };

    this.props.editRoute(routeData, this.state.editMode);
    this.setState({
      runNumber: "",
      routeName: "",
      operator: "",
      editMode: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const EL = [
      "Red Line",
      "Blue Line",
      "Brown Line",
      "Green Line",
      "Orange Line",
      "Pink Line",
      "Purple Line",
      "Yellow Line"
    ];

    const Metra = [
      "MD-N",
      "NCS",
      "UP-N",
      "UP-NW",
      "HC",
      "ME",
      "RI",
      "SWS",
      "BNSF",
      "MD-W",
      "UP-W"
    ];
    const list = this.props.routes.map((route, index) => {
      if (this.state.editMode === route._id) {
        return (
          <ul key={route._id} className="list" id={index}>
            <li>
              <Select
                options={["EL", "Metra", "Amtrak"]}
                value={this.state.trainLine}
                handleChange={this.handleChange}
                name="trainLine"
              />
            </li>
            <li>
              {this.state.trainLine === "Amtrak" ? (
                <FormControl
                  type="text"
                  name="routeName"
                  value={this.state.routeName}
                  onChange={this.handleChange}
                />
              ) : (
                <Select
                  options={this.state.trainLine === "EL" ? EL : Metra}
                  value={this.state.routeName}
                  handleChange={this.handleChange}
                  name="routeName"
                />
              )}
            </li>
            <li>
              <FormControl
                type="text"
                name="runNumber"
                value={this.state.runNumber}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <FormControl
                type="text"
                name="operator"
                value={this.state.operator}
                onChange={this.handleChange}
              />
            </li>
            <li>
              {this.state.editMode === "" ? (
                <FontAwesome
                  className="icon"
                  onClick={() => this.edit(route._id)}
                  name="edit"
                  size="lg"
                  style={{ marginRight: "10px" }}
                />
              ) : (
                <FontAwesome
                  className="icon"
                  onClick={this.submitEdit}
                  name="check"
                  size="lg"
                  style={{ marginRight: "10px" }}
                />
              )}
            </li>
          </ul>
        );
      } else {
        return (
          <ul key={route._id} className="list" id={index}>
            <li>{route.trainLine}</li>
            <li>{route.routeName}</li>
            <li>{route.runNumber}</li>
            <li>{route.operator}</li>
            <li>
              <FontAwesome
                className="icon"
                onClick={() =>
                  this.edit(
                    route._id,
                    route.trainLine,
                    route.routeName,
                    route.runNumber,
                    route.operator
                  )
                }
                name="edit"
                size="lg"
                style={{ marginRight: "10px" }}
              />
              <FontAwesome
                className="icon"
                onClick={() => this.props.deleteRoute(route._id)}
                name="trash"
                size="lg"
                style={{ marginRight: "10px" }}
              />
            </li>
          </ul>
        );
      }
    });
    return <div style={{ marginTop: "5px", minHeight: "200px" }}>{list}</div>;
  }
}

export default EditRoutes;
