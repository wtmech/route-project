import React from "react";

const EditRoutes = props => {
  const list = this.props.routes.map(route => {
    return (
      <div>
        <ul>
          <li>{route.trainLine}</li>
          <li>{route.routeName}</li>
          <li>{route.runNumber}</li>
          <li>{route.Operator}</li>
        </ul>
      </div>
    );
  });
  return { list };
};

export default EditRoutes;
