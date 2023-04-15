import { useState } from "react";
import { Form, UserInfo, RepoInfo } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserData,
  getUserError,
  getRepoData,
  getRepoError,
} from "../services/connectFunctions";
import { fetchUserData, fetchRepoData, resetData } from "../services/actions";

function ShowData() {
  const userData = useSelector(getUserData);
  const userError = useSelector(getUserError);
  const repoData = useSelector(getRepoData);
  const repoError = useSelector(getRepoError);
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleUserInput = (event) => {
    setUser(event.target.value);
  };

  const handleFetchData = (event) => {
    event.preventDefault();
    if (!user) {
      alert("Molimo upišite nešto u polje!");
    } else {
      dispatch(fetchUserData(user));
      dispatch(fetchRepoData(user));
    }
  };

  const handleResetBtn = () => {
    dispatch(resetData());
    dispatch(resetData());
    setUser("");
  };

  return (
    <main className="main-container">
      <div className="border-container">
        {!userData ? (
          <Form onUserInput={handleUserInput} getData={handleFetchData} />
        ) : (
          ""
        )}
        {userError ? (
          <h4>Došlo je do greške: {userError}</h4>
        ) : userData && repoData ? (
          <UserInfo data={userData} />
        ) : (
          ""
        )}
        {repoError ? (
          <h4>Došlo je do greške: {repoError}</h4>
        ) : repoData && userData ? (
          <RepoInfo repos={repoData} resetBtn={handleResetBtn} />
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default ShowData;
