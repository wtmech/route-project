import React, { Component } from "react";

import { connect } from "react-redux";
import { getRoutes, deleteRoute } from "../../actions/routeActions";

import ContentTable from "./Table/Table";
import Settings from "./Settings/Settings";

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
    return (
      <div className="table-container">
        {!this.props.settingsView ? (
          <ContentTable routes={routes} />
        ) : (
          <Settings
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
  { getRoutes, deleteRoute }
)(Content);
