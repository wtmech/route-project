import React, { Fragment } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

const ContentTable = ({ routes }) => {
  return (
    <Fragment>
      <ReactTable
        style={{ marginTop: "5px" }}
        data={routes}
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
};

export default ContentTable;
