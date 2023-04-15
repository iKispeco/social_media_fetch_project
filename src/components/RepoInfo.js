import { Component } from "react";
import pt from "prop-types";

class RepoInfo extends Component {
  render() {
    const { repos, resetBtn } = this.props;
    return (
      <div className="repo-container">
        <br />
        <p className="paragraf">
          <strong>REPOSITORIES:</strong>
        </p>
        <ul className="list-container">
          {repos.map((repo) => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
        </ul>
        <button
          className="button is-fullwidth is-danger is-normal"
          onClick={resetBtn}
        >
          Reset
        </button>
      </div>
    );
  }
}

RepoInfo.propTypes = {
  repos: pt.array,
  resetBtn: pt.func,
};

export default RepoInfo;
