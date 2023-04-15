import { Component } from "react";
import pt from "prop-types";

class Form extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <label htmlFor="user" className="label is-medium">
            GitHub username:
          </label>
          <input
            type="text"
            placeholder="e.g. facebook"
            className="input is-primary is-focused is-medium"
            id="user"
            onChange={this.props.onUserInput}
          />
          <br />
          <input
            type="submit"
            className="submit-btn button is-success is-medium is-fullwidth"
            onClick={this.props.getData}
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onUserInput: pt.func,
  getData: pt.func,
};

export default Form;
