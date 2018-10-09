import React, { Component, Fragment } from "react";
import FontAwesome from "react-fontawesome";

// import { Table } from "react-bootstrap";
import ReactTable from "react-table";
import "react-table/react-table.css";

class ContentTable extends Component {
  state = {
    edit: false
  };

  editView = () => {
    this.setState({
      edit: !!this.state.edit
    });
  };

  render() {
    const tableInfo = this.props.routes.map(route => {
      return (
        <tr key={route._id}>
          <td>{route.trainLine}</td>
          <td>{route.routeName}</td>
          <td>{route.runNumber}</td>
          <td>{route.operator}</td>
          <td>
            <FontAwesome
              className="icon"
              onClick={() => this.props.deleteRoute(route._id)}
              name="edit"
              size="lg"
              style={{ marginRight: "10px" }}
            />
            <FontAwesome
              className="icon"
              onClick={() => this.props.deleteRoute(route._id)}
              name="trash"
              size="lg"
            />
          </td>
        </tr>
      );
    });

    return (
      <Fragment>
        <ReactTable
          style={{ marginTop: "5px" }}
          data={this.props.routes}
          noDataText="Add some routes!"
          columns={[
            {
              Header: "Tain Line",
              accessor: "trainLine"
            },
            {
              Header: "Route Name",
              accessor: "routeName"
            },

            {
              Header: "Run Number",
              accessor: "runNumber"
            },
            {
              Header: "Operator",
              accessor: "operator"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </Fragment>
    );
  }
}

export default ContentTable;
