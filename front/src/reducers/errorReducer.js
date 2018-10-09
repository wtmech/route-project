import { ACTIONS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ERRORS:
      return action.payload;
    case ACTIONS.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};
