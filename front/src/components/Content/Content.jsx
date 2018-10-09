import React, { Component } from "react";

import { connect } from "react-redux";
import { getRoutes, deleteRoute, editRoute } from "../../actions/routeActions";

import ContentTable from "./Table/Table";
import EditRoutes from "./Edit/EditRoutes";

class Content extends Component {
  componentDidMount() {
    this.props.getRoutes();
  }

  deleteRoute = id => {
    this.props.deleteRoute(id);
  };

  editRoute = (data, id) => {
    this.props.editRoute(data, id);
  };

  render() {
    const { routes } = this.props.route;
    console.log(routes);
    return (
      <div className="table-container">
        {!this.props.editView ? (
          <ContentTable routes={routes} />
        ) : (
          <EditRoutes
            routes={routes}
            deleteRoute={this.deleteRoute}
            editRoute={this.editRoute}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route
});

export default connect(
  mapStateToProps,
  { getRoutes, deleteRoute, editRoute }
)(Content);
