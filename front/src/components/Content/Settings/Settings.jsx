import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class EditRoutes extends Component {
  render() {
    const list = this.props.routes.map(route => {
      return (
        <ul key={route._id} className="list">
          <li>{route.trainLine}</li>
          <li>{route.routeName}</li>
          <li>{route.runNumber}</li>
          <li>{route.Operator}</li>
          <li>
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
    });
    return <div style={{ marginTop: "5px", minHeight: "200px" }}>{list}</div>;
  }
}

export default EditRoutes;
