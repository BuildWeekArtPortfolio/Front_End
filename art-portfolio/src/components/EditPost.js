import React from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";
import axios from "axios";
import Axios from "axios";

class EditPost extends React.Component {
  state = {
    caption: ""
  };

  changeHandler = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.setDescription(this.state.caption);
    this.props.setIsEditing(false);
    // AxiosWithAuth()
    //   .put(`art/${this.props.id}`, this.state)
    //   .then(res => {
    //     console.log("res", res);
    //   })
    //   .catch(err => {
    //     console.log("err", err);
    //   });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="caption"
            onChange={this.changeHandler}
            placeholder="Caption"
            value={this.state.caption}
          />
          <div />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EditPost;
