import {
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_ERROR,
  FETCH_REPODATA_ERROR,
  FETCH_REPODATA_SUCCESS,
  RESET_USERDATA,
  RESET_REPODATA,
} from "./actions";

export const userDataReducer = (
  state = { userError: null, userData: null, repoError: null, repoData: null },
  action
) => {
  switch (action.type) {
    case FETCH_USERDATA_SUCCESS:
      return { ...state, userData: action.data };
    case FETCH_USERDATA_ERROR:
      return { ...state, userError: action.error };
    case FETCH_REPODATA_SUCCESS:
      return { ...state, repoData: action.data };
    case FETCH_REPODATA_ERROR:
      return { ...state, repoError: action.error };
    case RESET_USERDATA:
      return { ...state, userData: action.data };
    case RESET_REPODATA:
      return { ...state, repoData: action.data };
    default:
      return state;
  }
};
