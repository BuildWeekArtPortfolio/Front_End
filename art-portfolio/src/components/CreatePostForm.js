import React from "react";
import axios from "axios";

class CreatePostForm extends React.Component {
  state = {};

  componentDidMount(prevProps) {
    axios.get(`https://artportfoliobw.herokuapp.com/`).then(res => {
      console.log(res.data);
      // const persons = res.data;
      // this.setState({ persons });
    });
  }
  componentDidUpdate(prevProps) {}

  changeHandler = e => {
    e.persist();
  };

  handleSubmit = e => {};

  render() {
    return (
      <div>
        <h2>Create New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="string"
            name="imageUrl"
            onChange={this.changeHandler}
            placeholder="Image"
            // value={this.state}
          />
          <div />

          <input
            type="string"
            name="description"
            onChange={this.changeHandler}
            placeholder="Description"
            // value={this.state}
          />
          <div />

          <button>Create Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
