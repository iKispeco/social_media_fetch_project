export const FETCH_USERDATA_SUCCESS = "FETCH_USERDATA_SUCCESS";
export const FETCH_USERDATA_ERROR = "FETCH_USERDATA_ERROR";
export const FETCH_REPODATA_SUCCESS = "FETCH_REPODATA_SUCCESS";
export const FETCH_REPODATA_ERROR = "FETCH_REPODATA_ERROR";
export const RESET_USERDATA = "RESET_USERDATA";
export const RESET_REPODATA = "RESET_REPODATA";

function fetchUserData(user) {
  return (dispatch) =>
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_USERDATA_SUCCESS, data: data }))
      .catch((err) =>
        dispatch({
          type: FETCH_USERDATA_ERROR,
          error: err.toString(),
        })
      );
}

function fetchRepoData(user) {
  return (dispatch) =>
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_REPODATA_SUCCESS, data: data }))
      .catch((err) =>
        dispatch({
          type: FETCH_REPODATA_ERROR,
          error: err.toString(),
        })
      );
}

function resetData() {
  return (dispatch) => {
    dispatch({ type: RESET_USERDATA, data: null });
    dispatch({ type: RESET_REPODATA, data: null });
  };
}

export { fetchUserData, fetchRepoData, resetData };
