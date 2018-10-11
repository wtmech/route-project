import axios from "axios";

import { ACTIONS } from "./types";

export const addRoute = routeData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/routes", routeData)
    .then(res =>
      dispatch({
        type: ACTIONS.ADD_ROUTE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const editRoute = (routeData, id) => dispatch => {
  dispatch(clearErrors());
  axios
    .put(`/api/routes/${id}`, routeData)
    .then(res =>
      dispatch({
        type: ACTIONS.EDIT_ROUTE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.res.data
      })
    );
};

export const getRoutes = () => dispatch => {
  axios
    .get("/api/routes")
    .then(res =>
      dispatch({
        type: ACTIONS.GET_ROUTES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteRoute = id => dispatch => {
  axios
    .delete(`/api/routes/${id}`)
    .then(res =>
      dispatch({
        type: ACTIONS.DELETE_ROUTE,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: ACTIONS.GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const clearErrors = () => {
  return {
    type: ACTIONS.CLEAR_ERRORS
  };
};
