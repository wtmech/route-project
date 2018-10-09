import { ACTIONS } from "../actions/types";

const initialState = {
  routes: [],
  route: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ROUTES:
      return {
        ...state,
        routes: action.payload
      };
    case ACTIONS.GET_ROUTE:
      return {
        ...state,
        route: action.payload
      };
    case ACTIONS.ADD_ROUTE:
      return {
        ...state,
        routes: [action.payload, ...state.routes]
      };
    case ACTIONS.EDIT_ROUTE:
      return {
        ...state,
        routes: [action.payload, ...state.routes]
      };
    case ACTIONS.DELETE_ROUTE:
      return {
        ...state,
        routes: state.routes.filter(route => route._id !== action.payload)
      };
    default:
      return state;
  }
};
