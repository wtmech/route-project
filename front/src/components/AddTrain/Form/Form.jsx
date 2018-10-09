import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { addRoute } from "../../../actions/routeActions";

import { Button, FormControl, ControlLabel } from "react-bootstrap";

class Form extends Component {
  state = {
    trainLine: "Metra",
    runNumber: "",
    routeName: "",
    operator: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addRoute = () => {
    const routeData = {
      trainLine: this.state.trainLine,
      runNumber: this.state.runNumber,
      routeName: this.state.routeName,
      operator: this.state.operator
    };

    this.props.addRoute(routeData);
    this.setState({
      runNumber: "",
      routeName: "",
      operator: ""
    });
  };

  render() {
    let routeName;
    if (this.state.trainLine === "EL") {
      routeName = (
        <Fragment>
          <option hidden>Select Route</option>
          <option value="Red Line">Red Line</option>
          <option value="Blue Line">Blue Line</option>
          <option value="Brown Line">Brown Line</option>
          <option value="Green Line">Green Line</option>
          <option value="Orange Line">Orange Line</option>
          <option value="Pink Line">Pink Line</option>
          <option value="Purple Line">Purple Line</option>
          <option value="Yellow Line">Yellow Line</option>
        </Fragment>
      );
    } else if (this.state.trainLine === "Metra") {
      routeName = (
        <Fragment>
          <option hidden>Select Route</option>
          <option value="MD-N">MD-N</option>
          <option value="NCS">NCS</option>
          <option value="UP-N">UP-N</option>
          <option value="UP-NW">UP-NW</option>
          <option value="HC">HC</option>
          <option value="ME">ME</option>
          <option value="RI">RI</option>
          <option value="SWS">SWS</option>
          <option value="BNSF">BNSF</option>
          <option value="MD-W">MD-W</option>
          <option value="UP-W">UP-W</option>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <form style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="form-group">
            <ControlLabel>Train Line</ControlLabel>
            <FormControl
              componentClass="select"
              name="trainLine"
              value={this.state.trainLine}
              style={{ width: "173px" }}
              onChange={this.handleChange}
            >
              <option value="EL">EL</option>
              <option value="Metra">Metra</option>
              <option value="Amtrak">Amtrak</option>
            </FormControl>
          </div>
          <div className="form-group">
            <ControlLabel>Route Name</ControlLabel>
            <FormControl
              type={this.state.trainLine === "Amtrak" ? "text" : "text"}
              componentClass={
                this.state.trainLine === "Amtrak" ? "input" : "select"
              }
              placeholder="Type Route"
              name="routeName"
              value={this.state.routeName}
              onChange={this.handleChange}
            >
              {this.state.trainLine === "Amtrak" ? null : routeName}
            </FormControl>
            {this.props.errors.routeName ? (
              <span className="validation">{this.props.errors.routeName}</span>
            ) : null}
          </div>
          <div className="form-group">
            <ControlLabel>Run Number</ControlLabel>
            <FormControl
              type="text"
              name="runNumber"
              value={this.state.runNumber}
              onChange={this.handleChange}
            />
            {this.props.errors.runNumber ? (
              <span className="validation">{this.props.errors.runNumber}</span>
            ) : null}
          </div>
          <div className="form-group">
            <ControlLabel>Operator ID</ControlLabel>
            <FormControl
              type="text"
              name="operator"
              value={this.state.operator}
              onChange={this.handleChange}
            />
            {this.props.errors.operator ? (
              <span className="validation">{this.props.errors.operator}</span>
            ) : null}
          </div>
          <div className="form-group" style={{ justifyContent: "flex-end" }}>
            <Button bsStyle="primary" onClick={this.addRoute}>
              Add
            </Button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addRoute }
)(Form);
